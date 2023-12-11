# -------------------------------------------------------
# Copyright (c) [2022] Nadege Lemperiere
# All rights reserved
# -------------------------------------------------------
# Python script to trigger aws amplify webhook
# -------------------------------------------------------
# Nadège LEMPERIERE, @04 october 2021
# Latest revision: 04 october 2021
# -------------------------------------------------------

# System includes
from logging import config, getLogger, Logger
from os import path, getenv, environ
from json import dump, loads
from xml.dom import NotFoundErr

# Click includes
from click import option, group

# Requests includes
from requests import post

# Aws includes
from boto3 import Session

# Pykeepass includes
from pykeepass import PyKeePass
from pykeepass.exceptions import CredentialsError, PayloadChecksumError

log = getLogger('publish')

class Publicator() :

    m_keepass                   = None
    m_session                   = None
    m_client                    = None
    m_token                     = None
    m_account                   = None
    m_password                  = None
    m_state                     = None

    def __init__(self) :
        """ Constructor
        """
        self.m_keepass          = None
        self.m_session          = None
        self.m_client           = None
        self.m_token            = None
        self.m_password         = None
        self.m_account          = None
        self.m_state            = None

    def configure_logging(self, filename) :

        is_status_ok = True

        try :
            config.fileConfig(filename)
            log = getLogger('publish')

        except Exception as e :
            log.error(str(e))
            is_status_ok = False

        return is_status_ok

    def load_secrets(self, database, key, username) :
        """ Read deployment secrets from keepass database

        Parameters
        ----------
        database : str
            The input keepass database to extract values from
        key : str
            The input keepass database key file or master key
        """

        is_status_ok = True

        try:

            log.info('-- Loading secrets from database')

            if path.isfile(key) :
                log.debug('Opening database with keyfile')
                self.m_keepass = PyKeePass(database, keyfile=key)
            else :
                log.debug('Opening database with master key in environment variable ' + key)
                self.m_keepass = PyKeePass(database, password=getenv(key))

            key_path = ['engineering-environment','aws','aws-' + username + '-access-key']
            entry = self.m_keepass.find_entries_by_path(key_path)
            if entry is None :
                raise Exception('Entry ' + '/'.join(key_path) + ' not found')
            self.m_token = getattr(entry,'username')
            self.m_password = getattr(entry,'password')

            key_path = ['engineering-environment','aws','aws-account']
            entry = self.m_keepass.find_entries_by_path(key_path)
            if entry is None :
                raise Exception('Entry ' + '/'.join(key_path) + ' not found')
            self.m_account = getattr(entry,'password')

            environ.setdefault('AWS_ACCESS_KEY_ID',self.m_token)
            environ.setdefault('AWS_SECRET_ACCESS_KEY',self.m_password)

            self.m_shall_remove_credentials = True

        except CredentialsError as e :
            log.error('Credentials error : %s',str(e))
            is_status_ok = False
        except Exception as e :
            log.error(str(e))
            is_status_ok = False

        return is_status_ok

    def load_state(self, region, bucket, file) :
        """ Retrieve AWS amplify webhook url from terraform backend bucket
        """

        is_status_ok = True

        try:

            log.info('-- Retrieving terraform state from s3')
            self.m_session = Session(aws_access_key_id=self.m_token, aws_secret_access_key=self.m_password, region_name = region)
            self.m_client = self.m_session.client('s3')

            response = self.m_client.get_object(Bucket = bucket, Key = file, ExpectedBucketOwner = self.m_account)
            self.m_content = loads(response['Body'].read())
            log.debug(self.m_content)

        except Exception as e :
            log.error(str(e))
            is_status_ok = False

        return is_status_ok


    def publish(self, branch) :
        """ Retrieve AWS amplify webhook url from terraform backend bucket and publish website
        """

        is_status_ok = True

        try:

            webhook = self.m_content['outputs'][branch]['value']['webhook']
            log.info('-- Triggering webhook : ' + webhook)
            post(webhook, json={})

        except Exception as e :
            log.error(str(e))
            is_status_ok = False

        return is_status_ok

    def url(self, branch, filename) :
        """  Retrieve AWS amplify url from terraform backend bucket
        """

        is_status_ok = True

        try:
            content = {}
            log.debug(branch)
            log.debug(self.m_content['outputs']['application']['value']['domain'])
            content['url'] = 'https://' + branch + '.' + self.m_content['outputs']['application']['value']['domain']

            with open(filename,'w', encoding='UTF-8') as fid:
                dump(content,fid)

        except Exception as e :
            log.error(str(e))
            is_status_ok = False

        return is_status_ok

@group()
def main():
    """ Main click group """
#pylint: disable=W0107
    pass
#pylint: enable=W0107

@main.command()
@option('--database', default='database.kdbx', help='Keepass database filename')
@option('--key',default='database.keyx', help='Keepass database key file or master key environment variable name')
@option('--username',default='prenom-nom', help ='Name of the user to retrieve access keys from database')
@option('--region',default='eu-west-1', help='Region in which the bucket is located')
@option('--branch', default='main', help='Branch of the amplify app to trigger')
@option('--bucket', help='S3 bucket to retrieve webhook from')
@option('--file', help='Terraform backend file to retrieve webhook from')
@option('--logging',default='./logging.conf', help='Configuration file for logging')
def publish(database, key, username, region, branch, bucket, file, logging) :
    """ Application run function """

    is_status_ok = True

    if is_status_ok : publicator = Publicator()
    if is_status_ok : is_status_ok = publicator.configure_logging(logging)
    if is_status_ok : is_status_ok = publicator.load_secrets(database, key, username)
    if is_status_ok : is_status_ok = publicator.load_state(region, bucket, file)
    if is_status_ok : is_status_ok = publicator.publish(branch)

    if is_status_ok : log.info('-- Successfully triggered website publishing')
    else            : log.info('-- Failed to trigger website publishing website - check logs for more info')

@main.command()
@option('--database', default='database.kdbx', help='Keepass database filename')
@option('--key',default='database.keyx', help='Keepass database key file or master key environment variable name')
@option('--username',default='prenom-nom', help ='Name of the user to retrieve access keys from database')
@option('--region',default='eu-west-1', help='Region in which the bucket is located')
@option('--branch', default='main', help='Branch of the amplify app to trigger')
@option('--bucket', help='S3 bucket to retrieve webhook from')
@option('--file', help='Terraform backend file to retrieve webhook from')
@option('--logging',default='./logging.conf', help='Configuration file for logging')
@option('--output',default='./url.json', help='Result file containing the aws amplify url')
def url(database, key, username, region, branch, bucket, file, logging, output) :
    """ Application run function """

    is_status_ok = True
    url = ''

    if is_status_ok : publicator = Publicator()
    if is_status_ok : is_status_ok = publicator.configure_logging(logging)
    if is_status_ok : is_status_ok = publicator.load_secrets(database, key, username)
    if is_status_ok : is_status_ok = publicator.load_state(region, bucket, file)
    if is_status_ok : is_status_ok = publicator.url(branch, output)

    if is_status_ok : log.info('-- Successfully retrieved website url')
    else            : log.info('-- Failed to retrieve website url - check logs for more info')


if __name__ == "__main__":
    main()

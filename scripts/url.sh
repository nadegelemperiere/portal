#!/bin/bash
# -------------------------------------------------------
# TECHNOGIX
# -------------------------------------------------------
# Copyright (c) [2022] Technogix SARL
# All rights reserved
# -------------------------------------------------------
# Module to deploy an aws bucket with all the secure
# components required
# Bash script to tests in a container
# -------------------------------------------------------
# Nadège LEMPERIERE, @13 january 2022
# Latest revision: 11 march 2022
# -------------------------------------------------------

# Retrieve absolute path to this script
script=$(readlink -f $0)
scriptpath=`dirname $script`

# Parse arguments from flags
args=""
key=""
while getopts b:k: flag
do
    case "${flag}" in
          b) args+=" --branch ${OPTARG}";;
          k) key=${OPTARG}
    esac
done

# Install required python packages
mkdir /home/technogix/packages
export PYTHONPATH=/home/technogix/packages
pip install --quiet -r $scriptpath/requirements.txt

# Launch python scripts to setup terraform environment
python3 $scriptpath/trigger.py url \
    --database $scriptpath/../../vault/cicd.kdbx \
    --key $key \
    --username principal \
    --bucket technogix-prod-eu-west-1-terraform-backend \
    --file terraform/technogix-website.prod.tfstate \
    --region eu-west-1 \
    --logging $scriptpath/logging.conf \
    $args


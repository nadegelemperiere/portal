/* -------------------------------------------------------
# Copyright (c) [2022] Nadege Lemperiere
# All rights reserved
# -------------------------------------------------------
# "Who Am I" part of Home page
# -------------------------------------------------------
# Nadège LEMPERIERE, @02 february 2021
# Latest revision: 02 february 2021
# -------------------------------------------------------*/

/* React includes */
import React from 'react';
import { useIntl } from 'react-intl';

/* Material UI includes */
import { Typography, Avatar, Stack, List } from '@mui/material';

/* Local includes */
import { HomeGridItem } from './HomeContainers';

/* Media */
const picture = require('../../assets/picture.png');

function HomeWhoAmI() {

    /* --------- Gather inputs --------- */
    const intl = useIntl();
    // const componentName = 'HomeWhoAmI';

    /* ----------- Define HTML --------- */
    return (
        <HomeGridItem item xs={12} sm={6} md={6} style={{ bottom: '0px', position: 'relative' }}>
            <Stack direction="column" justifyContent="space-between" style={{ height: '100%' }}>
                <Stack direction="row" style={{ marginBottom: '20px' }}>
                    <Avatar alt="Picture" src={picture} style={{ marginRight: '20px', width: '40px', height: '40px' }} />
                    <Typography variant="h2" style={{ marginTop: '0px', textAlign: 'left' }}>
                        {intl.formatMessage({ id: 'home_about_me_whoami', defaultMessage: 'Who am I' })}
                    </Typography>
                </Stack>
                <Typography>
                    {intl.formatMessage({ id: 'home_about_me_whoami0', defaultMessage: '' })}
                    <b> {intl.formatMessage({ id: 'home_about_me_whoami1', defaultMessage: '' })}</b>
                    {intl.formatMessage({ id: 'home_about_me_whoami2', defaultMessage: '' })}
                    <b> {intl.formatMessage({ id: 'home_about_me_whoami3', defaultMessage: '' })}</b>
                    {intl.formatMessage({ id: 'home_about_me_whoami4', defaultMessage: '' })}
                    {intl.formatMessage({ id: 'home_about_me_whoami5', defaultMessage: '' })}
                    <b> {intl.formatMessage({ id: 'home_about_me_whoami6', defaultMessage: '' })} </b>
                    {intl.formatMessage({ id: 'home_about_me_whoami7', defaultMessage: '' })}
                    <b> {intl.formatMessage({ id: 'home_about_me_whoami8', defaultMessage: '' })}</b>
                    {intl.formatMessage({ id: 'home_about_me_whoami9', defaultMessage: '' })}
                    <b> {intl.formatMessage({ id: 'home_about_me_whoami10', defaultMessage: '' })}</b>
                </Typography>
                <Typography>
                    {intl.formatMessage({ id: 'home_about_me_whoami11', defaultMessage: '' })}
                    <b> {intl.formatMessage({ id: 'home_about_me_whoami12', defaultMessage: '' })}</b>
                    {intl.formatMessage({ id: 'home_about_me_whoami13', defaultMessage: '' })}
                    <b> {intl.formatMessage({ id: 'home_about_me_whoami14', defaultMessage: '' })} </b>
                    {intl.formatMessage({ id: 'home_about_me_whoami15', defaultMessage: '' })}
                    <b> {intl.formatMessage({ id: 'home_about_me_whoami16', defaultMessage: '' })} </b>
                    {intl.formatMessage({ id: 'home_about_me_whoami17', defaultMessage: '' })}
                </Typography>
                <Typography>
                    {intl.formatMessage({ id: 'home_about_me_whoami18', defaultMessage: '' })}
                    <b> {intl.formatMessage({ id: 'home_about_me_whoami19', defaultMessage: '' })} </b>
                    {intl.formatMessage({ id: 'home_about_me_whoami20', defaultMessage: '' })}
                    <b> {intl.formatMessage({ id: 'home_about_me_whoami21', defaultMessage: '' })} </b>
                    {intl.formatMessage({ id: 'home_about_me_whoami22', defaultMessage: '' })}
                </Typography>
                <List dense={true} style={{ paddingTop: '10px', paddingLeft: '20px', listStyleType: 'disc', listStylePosition: 'outside', listStyleImage: 'none' }}>
                    <li>
                        <Typography>
                            {intl.formatMessage({ id: 'home_about_me_whoami23', defaultMessage: '' })}
                            <b> {intl.formatMessage({ id: 'home_about_me_whoami24', defaultMessage: '' })} </b>
                            {intl.formatMessage({ id: 'home_about_me_whoami25', defaultMessage: '' })}
                            <b> {intl.formatMessage({ id: 'home_about_me_whoami26', defaultMessage: '' })}</b>
                        </Typography>
                    </li>
                    <li>
                        <Typography>
                            {intl.formatMessage({ id: 'home_about_me_whoami27', defaultMessage: '' })}
                            <b> {intl.formatMessage({ id: 'home_about_me_whoami28', defaultMessage: '' })} </b>
                            {intl.formatMessage({ id: 'home_about_me_whoami29', defaultMessage: '' })}
                            <b> {intl.formatMessage({ id: 'home_about_me_whoami30', defaultMessage: '' })}</b>
                        </Typography>
                    </li>
                    <li>
                        <Typography>
                            {intl.formatMessage({ id: 'home_about_me_whoami31', defaultMessage: '' })}
                            <b> {intl.formatMessage({ id: 'home_about_me_whoami32', defaultMessage: '' })} </b>
                            {intl.formatMessage({ id: 'home_about_me_whoami33', defaultMessage: '' })}
                        </Typography>
                    </li>
                    <li>
                        <Typography>
                            {intl.formatMessage({ id: 'home_about_me_whoami34', defaultMessage: '' })}
                            <b> {intl.formatMessage({ id: 'home_about_me_whoami35', defaultMessage: '' })} </b>
                            {intl.formatMessage({ id: 'home_about_me_whoami36', defaultMessage: '' })}
                            <b> {intl.formatMessage({ id: 'home_about_me_whoami37', defaultMessage: '' })} </b>
                            {intl.formatMessage({ id: 'home_about_me_whoami38', defaultMessage: '' })}
                        </Typography>
                    </li>
                </List>
            </Stack>
        </HomeGridItem>
    );

}

export default HomeWhoAmI;

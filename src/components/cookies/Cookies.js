/* -------------------------------------------------------
# TECHNOGIX
# -------------------------------------------------------
# Copyright (c) [2022] Technogix SARL
# All rights reserved
# -------------------------------------------------------
# Hamburger bar for mobile navigation
# -------------------------------------------------------
# Nadège LEMPERIERE, @02 february 2022
# Latest revision: 02 february 2022
# -------------------------------------------------------*/

/* React includes */
import React from 'react';
import { useIntl } from 'react-intl';

/* Material UI includes */
import { Button, Typography, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';

/* Website includes */
import { useCookies, useConfig, useMenu } from '../../providers';
import logMessage from '../../utils/logging';

function Cookies(props) {

    /* --------- Gather inputs --------- */
    const intl = useIntl();
    const { toggleThis, hasChosen = false } = useCookies();
    const { isDesktop } = useMenu();
    const { appConfig } = useConfig();
    const { menu } = appConfig || {};
    const { margin = '20px', maxWidth = '1100px' } = menu || {};
    const theme = useTheme();
    const componentName = 'Cookies';

    /* --------- Compute sizes --------- */
    var marginString = `max( ${margin} ,calc((100vw - ${maxWidth} )/2)`;
    if (!isDesktop) { marginString = 0; }

    /* ------ Manage cookie change ----- */
    const activateCookies = () => {

        logMessage(componentName, 'activateCookies --- BEGIN');
        toggleThis(true);
        logMessage(componentName, 'activateCookies --- END');

    };
    const deactivateCookies = () => {

        logMessage(componentName, 'deactivateCookies --- BEGIN');
        toggleThis(false);
        logMessage(componentName, 'deactivateCookies --- END');

    };

    /* ----------- Define HTML --------- */
    return (
        <div style={{ position:'fixed', backgroundColor: theme.palette.primary.main, bottom:'0px', left:marginString, right:marginString, zIndex:'10000', padding:'10px', height: ( hasChosen? '0px' : 'auto' ), visibility: ( hasChosen? 'hidden' : 'visible' ) }}>
            <Typography style= {{ color:'#ffffff' }}>
                {intl.formatMessage({ id: 'cookies_consent', defaultMessage: ''})}
                <Link href="/policy" style= {{ color:'#ffffff' }}>
                    {intl.formatMessage({ id: 'cookies_consent0', defaultMessage: ''})}
                </Link>
            </Typography>
            <Button onClick={activateCookies} style={{ backgroundColor: '#ffffff', margin:'10px' }} >
                <Typography style={{ color: theme.palette.primary.main, fontWeight:'bold' }}>
                    {intl.formatMessage({ id: 'cookies_consent_accept', defaultMessage: ''})}
                </Typography>
            </Button>
            <Button onClick={deactivateCookies} style={{ backgroundColor: '#ffffff', margin:'10px' }} >
                <Typography style={{ color: theme.palette.primary.main, fontWeight:'bold' }}>
                    {intl.formatMessage({ id: 'cookies_consent_reject', defaultMessage: ''})}
                </Typography>
            </Button>
        </div>
    );

}

export default Cookies;

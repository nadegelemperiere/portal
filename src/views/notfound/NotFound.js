/* -------------------------------------------------------
# TECHNOGIX
# -------------------------------------------------------
# Copyright (c) [2022] Technogix SARL
# All rights reserved
# -------------------------------------------------------
# Not found page
# -------------------------------------------------------
# Nadège LEMPERIERE, @02 february 2022
# Latest revision: 02 february 2022
# -------------------------------------------------------*/

/* React includes */
import React from 'react';
import { useIntl } from 'react-intl';

/* Material UI includes */
import { Box, Container, Typography } from '@mui/material';
import { useConfig, useMenu } from '../../providers';
import { Cookie as CookieIcon } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

/* Website includes */
import { Page } from '../../containers';
import { Background } from '../../components';

function NotFound() {

    /* --------- Gather inputs --------- */
    const intl = useIntl();
    const { isDesktop } = useMenu();
    const { appConfig } = useConfig();
    const { menu } = appConfig || {};
    const { height = '115px', margin = '20px' } = menu || {};
    const theme = useTheme();

    /* -------- Defining sizes --------- */
    let topString = 0;
    if (!isDesktop) { topString = height; }
    let heightImage = `calc(100vh - ${margin})`
    if (!isDesktop) { heightImage = `calc(100vh - ${topString})` }

    /* ----------- Define HTML --------- */
    return (
        <Page pageTitle={intl.formatMessage({ id: 'notfound', defaultMessage: 'NotFound'})}>
            <Box style={{ backgroundColor: 'black', height: topString, top:0 }} />
            <Background id="notfound" size="cover" reference="notfound" >
                <Container style={{ width:'100%', height:heightImage, padding:0, '@media':{padding:0} }}>
                    <Box style={{ backgroundColor: 'rgba(255,255,255,0)', height: '18%', top:0 }} />
                    <Container style={{ zIndex: '1', top: '18%', left: '10%', width: '80%', right: '10%', '@media':{padding:0} }}>
                        <Typography style={{ color:theme.palette.primary.main, textAlign:'center', fontSize: '30px'}}>
                            You seem lost! Take a break and have a cookie.
                        </Typography>
                        <CookieIcon color='primary' style={{ width:'100px', height:'100px' }}/>
                    </Container>
                </Container>
            </Background>
        </Page>
    );

}

export default NotFound;

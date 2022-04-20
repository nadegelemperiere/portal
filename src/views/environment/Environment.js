/* -------------------------------------------------------
# TECHNOGIX
# -------------------------------------------------------
# Copyright (c) [2022] Technogix SARL
# All rights reserved
# -------------------------------------------------------
# Environment page
# -------------------------------------------------------
# Nadège LEMPERIERE, @02 february 2021
# Latest revision: 02 february 2021
# -------------------------------------------------------*/

/* React includes */
import React from 'react';
import { useIntl } from 'react-intl';

/* Material UI includes */
import { Box, Typography } from '@mui/material';

/* Website includes */
import { Page } from '../../containers';
import { useMenu, useConfig } from '../../providers';
import { Image } from '../../components';

/* Local includes */
import { EnvironmentGridContainer, EnvironmentGridItem } from './EnvironmentContainers';

import EnvironmentOrganization from './EnvironmentOrganization';
import EnvironmentSecurity from './EnvironmentSecurity';

function Environment() {

    /* --------- Gather inputs --------- */
    const intl = useIntl();
    const { isDesktop } = useMenu();
    const { appConfig } = useConfig();
    const { menu } = appConfig || {};
    const { height = '115px' } = menu || {};

    /* -------- Defining sizes --------- */
    let topString = 0;
    if (!isDesktop) { topString = height; }

    /* ----------- Define HTML --------- */
    return (
        <Page pageTitle={intl.formatMessage({ id: 'environment', defaultMessage: 'Environment' })}>
            <Box style={{ backgroundColor: '#ffffff', height: topString }} />
            <Box style={{ position: 'relative', top: 0 }}>
                <Image reference="environment" style={{ zIndex: '0', width: '100%', objectFit: 'cover', overflow: 'hidden', textAlign: 'left', backgroundColor: '#ffffff' }} />
            </Box>
            <Box id="workplace">
                <Typography variant="h1">
                    {intl.formatMessage({ id: 'environment_workplace', defaultMessage: 'Experience' })}
                </Typography>
                <EnvironmentGridContainer container spacing={3}>
                    <EnvironmentOrganization/>
                    <EnvironmentSecurity/>
                </EnvironmentGridContainer>
            </Box>
            <Box id="ecosystem">
                <Typography variant="h1">
                    {intl.formatMessage({ id: 'environment_ecosystem', defaultMessage: 'Ecosystem' })}
                </Typography>
                <EnvironmentGridContainer container spacing={3}>
                    <EnvironmentGridItem item xs={12} sm={12} md={12} style={{ bottom: '0px', position: 'relative', paddingBottom:'10px' }}>
                        <Typography>
                            {intl.formatMessage({ id: 'environment_ecosystem0', defaultMessage: 'Ecosystem' })}
                        </Typography>
                        <Image reference="infrastructure" style={{ zIndex: '0', width: '100%', objectFit: 'cover', overflow: 'hidden', textAlign: 'left', backgroundColor: '#ffffff' }} />
                        <Typography>
                            {intl.formatMessage({ id: 'environment_ecosystem1', defaultMessage: 'Ecosystem' })}
                        </Typography>
                    </EnvironmentGridItem>
                </EnvironmentGridContainer>
            </Box>
        </Page>
    );

}

export default Environment;

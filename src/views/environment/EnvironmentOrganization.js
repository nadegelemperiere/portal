/* -------------------------------------------------------
# TECHNOGIX
# -------------------------------------------------------
# Copyright (c) [2022] Technogix SARL
# All rights reserved
# -------------------------------------------------------
# "Who Am I" part of Environment page
# -------------------------------------------------------
# Nadège LEMPERIERE, @02 february 2021
# Latest revision: 02 february 2021
# -------------------------------------------------------*/

/* React includes */
import React from 'react';
import { useIntl } from 'react-intl';

/* Material UI includes */
import { Typography, Avatar, Stack } from '@mui/material';
import { Circle as CircleIcon } from '@mui/icons-material';

/* Local includes */
import { EnvironmentGridItem } from './EnvironmentContainers';

function EnvironmentOrganization() {

    /* --------- Gather inputs --------- */
    const intl = useIntl();

    /* ----------- Define HTML --------- */
    return (
        <EnvironmentGridItem item xs={12} sm={6} md={6} style={{ bottom: '0px', position: 'relative' }}>
            <Stack direction="column" justifyContent="space-between" style={{ height: '100%' }}>
                <Stack direction="row" style={{ marginBottom: '20px' }}>
                    <Avatar alt="Picture" style={{ backgroundColor: '#ffffff', marginRight: '0px', maxWidth: '0px', width: '0px', height: '40px' }}>
                        <CircleIcon color="disabled" />
                    </Avatar>
                    <Typography variant="h2" style={{ marginTop: '0px', textAlign: 'left' }}>
                        {intl.formatMessage({ id: 'environment_workplace_orga', defaultMessage: 'Organization' })}
                    </Typography>
                </Stack>
                <Typography>
                    {intl.formatMessage({ id: 'environment_workplace_orga0', defaultMessage: 'Organization' })}
                </Typography>
                <Typography>
                    {intl.formatMessage({ id: 'environment_workplace_orga1', defaultMessage: 'Organization' })}
                </Typography>
            </Stack>
        </EnvironmentGridItem>
    );

}

export default EnvironmentOrganization;

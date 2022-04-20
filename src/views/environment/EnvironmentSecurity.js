/* -------------------------------------------------------
# TECHNOGIX
# -------------------------------------------------------
# Copyright (c) [2022] Technogix SARL
# All rights reserved
# -------------------------------------------------------
# Security part of Environment page
# -------------------------------------------------------
# Nadège LEMPERIERE, @02 february 2021
# Latest revision: 02 february 2021
# -------------------------------------------------------*/

/* React includes */
import React from 'react';
import { useIntl } from 'react-intl';

/* Material UI includes */
import { Typography, Avatar, Stack, List } from '@mui/material';
import { Circle as CircleIcon } from '@mui/icons-material';

/* Local includes */
import { EnvironmentGridItem } from './EnvironmentContainers';

function EnvironmentSecurity() {

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
                        {intl.formatMessage({ id: 'environment_workplace_secu', defaultMessage: 'Security' })}
                    </Typography>
                </Stack>
                <Typography> {intl.formatMessage({ id: 'environment_workplace_secu0', defaultMessage: '' })}
                </Typography>
                <List dense={true} style={{ paddingTop: '10px', paddingLeft: '20px', listStyleType: 'disc', listStylePosition: 'outside', listStyleImage: 'none' }}>
                    <li><Typography>{intl.formatMessage({ id: 'environment_workplace_secu1', defaultMessage: '' })}</Typography></li>
                    <li><Typography>{intl.formatMessage({ id: 'environment_workplace_secu2', defaultMessage: '' })}</Typography></li>
                    <li><Typography>{intl.formatMessage({ id: 'environment_workplace_secu3', defaultMessage: '' })}</Typography></li>
                    <li><Typography>{intl.formatMessage({ id: 'environment_workplace_secu4', defaultMessage: '' })}</Typography></li>
                    <li><Typography>{intl.formatMessage({ id: 'environment_workplace_secu5', defaultMessage: '' })}</Typography></li>
                </List>
                <Typography> {intl.formatMessage({ id: 'environment_workplace_secu6', defaultMessage: '' })}
                </Typography>
            </Stack>
        </EnvironmentGridItem>
    );

}

export default EnvironmentSecurity;

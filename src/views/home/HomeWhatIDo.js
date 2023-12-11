/* -------------------------------------------------------
# Copyright (c) [2022] Nadege Lemperiere
# All rights reserved
# -------------------------------------------------------
# H"What I Do" part of Home page
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
import { HomeGridItem } from './HomeContainers';

function HomeWhatIDo() {

    /* --------- Gather inputs --------- */
    const intl = useIntl();
    // const componentName = 'HomeWhatIDo';

    /* ----------- Define HTML --------- */
    return (
        <HomeGridItem item xs={12} sm={6} md={6} style={{ bottom: '0px', position: 'relative' }}>
            <Stack direction="column" justifyContent="space-between" style={{ height: '100%' }}>
                <Stack direction="row" style={{ marginBottom: '20px' }}>
                    <Avatar alt="Picture" style={{ backgroundColor: '#ffffff', marginRight: '0px', maxWidth: '0px', width: '0px', height: '40px' }}>
                        <CircleIcon color="disabled" />
                    </Avatar>
                    <Typography variant="h2" style={{ marginTop: '0px', textAlign: 'left' }}>
                        {intl.formatMessage({ id: 'home_whatido', defaultMessage: 'Who am I' })}
                    </Typography>
                </Stack>
                <Typography variant="h3"> {intl.formatMessage({ id: 'home_whatido0', defaultMessage: ''})} </Typography>
                <List dense={true} style={{ paddingTop: '10px', paddingLeft: '20px', listStyleType: 'disc', listStylePosition: 'outside', listStyleImage: 'none' }}>
                    <li><Typography>{intl.formatMessage({ id: 'home_whatido1', defaultMessage: ''})} </Typography></li>
                    <li><Typography>{intl.formatMessage({ id: 'home_whatido2', defaultMessage: ''})} </Typography></li>
                    <li><Typography>{intl.formatMessage({ id: 'home_whatido3', defaultMessage: ''})} </Typography></li>
                    <li>
                        <Typography>
                            {intl.formatMessage({ id: 'home_whatido4', defaultMessage: ''})}
                        </Typography>
                    </li>
                </List>
                <Typography variant="h3">{intl.formatMessage({ id: 'home_whatido5', defaultMessage: ''})} </Typography>
                <List dense={true} style={{ paddingTop: '10px', paddingLeft: '20px', listStyleType: 'disc', listStylePosition: 'outside', listStyleImage: 'none' }}>
                    <li><Typography>{intl.formatMessage({ id: 'home_whatido6', defaultMessage: ''})} </Typography></li>
                    <li><Typography>{intl.formatMessage({ id: 'home_whatido7', defaultMessage: ''})} </Typography></li>
                    <li><Typography>{intl.formatMessage({ id: 'home_whatido8', defaultMessage: ''})} </Typography></li>
                    <li><Typography>{intl.formatMessage({ id: 'home_whatido9', defaultMessage: ''})} </Typography></li>
                    <li><Typography>{intl.formatMessage({ id: 'home_whatido10', defaultMessage: ''})} </Typography></li>
                    <li><Typography>{intl.formatMessage({ id: 'home_whatido11', defaultMessage: ''})} </Typography></li>
                    <li><Typography>{intl.formatMessage({ id: 'home_whatido12', defaultMessage: ''})} </Typography></li>
                </List>
                <Typography variant="h3"> {intl.formatMessage({ id: 'home_whatido13', defaultMessage: ''})} </Typography>
                <List dense={true} style={{ paddingTop: '10px', paddingLeft: '20px', listStyleType: 'disc', listStylePosition: 'outside', listStyleImage: 'none' }}>
                    <li><Typography>{intl.formatMessage({ id: 'home_whatido14', defaultMessage: ''})} </Typography></li>
                    <li><Typography>{intl.formatMessage({ id: 'home_whatido15', defaultMessage: ''})} </Typography></li>
                    <li><Typography>{intl.formatMessage({ id: 'home_whatido16', defaultMessage: ''})} </Typography></li>
                </List>
            </Stack>
        </HomeGridItem>
    );

}

export default HomeWhatIDo;

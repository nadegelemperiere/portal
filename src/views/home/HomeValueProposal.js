/* -------------------------------------------------------
# Copyright (c) [2022] Nadege Lemperiere
# All rights reserved
# -------------------------------------------------------
# "Value proposal" part of Home page
# -------------------------------------------------------
# Nadège LEMPERIERE, @02 february 2021
# Latest revision: 02 february 2021
# -------------------------------------------------------*/

/* React includes */
import React from 'react';
import { useIntl } from 'react-intl';

/* Material UI includes */
import { Typography, Avatar, Grid, Paper } from '@mui/material';
import { Security as SecurityIcon, Flight as FlightIcon, AutoAwesome as AutoAwesomeIcon } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

/* Local includes */
import { HomeGridItem } from './HomeContainers';

function HomeValueProposal() {

    /* --------- Gather inputs --------- */
    const theme = useTheme();
    const intl = useIntl();
    // const componentName = 'HomeValueProposal';

    /* ----------- Define HTML --------- */
    return (
        <HomeGridItem item xs={12} sm={12} md={12} style={{ bottom: '0px', position: 'relative' }}>
            <Grid container spacing={1} justifyContent="space-between" alignItems="stretch" style={{ paddingLeft: '0px', paddingRight: '0px', paddingBottom: '20px', width: '100%' }}>
                <Grid item xs={12} sm={4} md={4} style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                    <Paper style={{ backgroundColor: 'rgba(220,220,220,0.5)', padding: '10px', height: '100%' }}>
                        <Avatar alt="MissionCritical" style={{ backgroundColor: 'rgba(255,255,255,0)', width: '100%' }}>
                            <FlightIcon style={{ color: theme.palette.primary.main }} />
                        </Avatar>
                        <Typography style={{ width: '100%', textAlign: 'center', fontWeight: 'bold', marginBottom: '10px' }}> {intl.formatMessage({ id: 'home_value_proposal0', defaultMessage: '' }) } </Typography>
                        <Typography>
                            {intl.formatMessage({ id: 'home_value_proposal1', defaultMessage: '' }) }
                            {intl.formatMessage({ id: 'home_value_proposal2', defaultMessage: '' }) }
                            {intl.formatMessage({ id: 'home_value_proposal3', defaultMessage: '' }) }
                            {intl.formatMessage({ id: 'home_value_proposal4', defaultMessage: '' }) }
                            {intl.formatMessage({ id: 'home_value_proposal5', defaultMessage: '' }) }
                            {intl.formatMessage({ id: 'home_value_proposal6', defaultMessage: '' }) }
                            {intl.formatMessage({ id: 'home_value_proposal7', defaultMessage: '' }) }
                            {intl.formatMessage({ id: 'home_value_proposal8', defaultMessage: '' }) }
                            {intl.formatMessage({ id: 'home_value_proposal9', defaultMessage: '' }) }
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4} md={4} style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                    <Paper style={{ backgroundColor: 'rgba(220,220,220,0.5)', padding: '10px', height: '100%' }}>
                        <Avatar alt="Security" style={{ backgroundColor: 'rgba(255,255,255,0)', width: '100%' }}>
                            <SecurityIcon style={{ color: theme.palette.primary.main }} />
                        </Avatar>
                        <Typography style={{ width: '100%', textAlign: 'center', fontWeight: 'bold', marginBottom: '10px' }}> {intl.formatMessage({ id: 'home_value_proposal10', defaultMessage: '' }) }  </Typography>
                        <Typography>
                            {intl.formatMessage({ id: 'home_value_proposal11', defaultMessage: '' }) }
                            {intl.formatMessage({ id: 'home_value_proposal12', defaultMessage: '' }) }
                            {intl.formatMessage({ id: 'home_value_proposal13', defaultMessage: '' }) }
                            {intl.formatMessage({ id: 'home_value_proposal14', defaultMessage: '' }) }
                            {intl.formatMessage({ id: 'home_value_proposal15', defaultMessage: '' }) }
                            {intl.formatMessage({ id: 'home_value_proposal16', defaultMessage: '' }) }
                            {intl.formatMessage({ id: 'home_value_proposal17', defaultMessage: '' }) }
                            {intl.formatMessage({ id: 'home_value_proposal172', defaultMessage: '' }) }
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4} md={4} style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                    <Paper style={{ backgroundColor: 'rgba(220,220,220,0.5)', padding: '10px', height: '100%' }}>
                        <Avatar alt="Pluridisciplinarity" style={{ backgroundColor: 'rgba(255,255,255,0)', width: '100%' }}>
                            <AutoAwesomeIcon style={{ color: theme.palette.primary.main }} />
                        </Avatar>
                        <Typography style={{ width: '100%', textAlign: 'center', fontWeight: 'bold', marginBottom: '10px' }}> {intl.formatMessage({ id: 'home_value_proposal18', defaultMessage: '' }) }   </Typography>
                        <Typography>
                            {intl.formatMessage({ id: 'home_value_proposal19', defaultMessage: '' }) }
                            {intl.formatMessage({ id: 'home_value_proposal20', defaultMessage: '' }) }
                            {intl.formatMessage({ id: 'home_value_proposal21', defaultMessage: '' }) }
                            {intl.formatMessage({ id: 'home_value_proposal22', defaultMessage: '' }) }
                            {intl.formatMessage({ id: 'home_value_proposal23', defaultMessage: '' }) }
                            {intl.formatMessage({ id: 'home_value_proposal24', defaultMessage: '' }) }
                            {intl.formatMessage({ id: 'home_value_proposal25', defaultMessage: '' }) }
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </HomeGridItem>
    );

}

export default HomeValueProposal;

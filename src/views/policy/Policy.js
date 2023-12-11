/* -------------------------------------------------------
# Copyright (c) [2022] Nadege Lemperiere
# All rights reserved
# -------------------------------------------------------
# Policy page
# -------------------------------------------------------
# Nadège LEMPERIERE, @02 february 2021
# Latest revision: 02 february 2021
# -------------------------------------------------------*/

/* React includes */
import React from 'react';
import { useIntl } from 'react-intl';

/* Material UI includes */
import { Box, Typography, Table, TableRow, TableHead, TableCell, TableBody, List, Link, Switch, Stack } from '@mui/material';

/* Website includes */
import { Page } from '../../containers';
import { Image } from '../../components';
import { useCookies } from '../../providers';
import logMessage from '../../utils/logging';

/* Local includes */

function Policy() {

    /* --------- Gather inputs --------- */
    const intl = useIntl();
    const { toggleThis, areActivated = false } = useCookies();
    const componentName = 'Policy';

    /* ------ Manage cookie change ----- */
    const handleCookies = () => {

        logMessage(componentName, 'handleUsageCookie --- BEGIN');
        toggleThis();
        logMessage(componentName, 'handleUsageCookie --- END');

    };

    /* ----------- Define HTML --------- */
    return (
        <Page pageTitle={intl.formatMessage({ id: 'cookies_policy', defaultMessage: 'Policy' })}>
            <Box style={{ position: 'relative', top: 0 }}>
                <Image reference="policy" style={{ zIndex: '0', width: '100%', objectFit: 'cover', overflow: 'hidden', textAlign: 'left', backgroundColor: '#ffffff' }} />
            </Box>
            <Box id='title'>
                <Typography variant="h1" style={{ paddingBottom:'10px' }}>
                    {intl.formatMessage({ id: 'cookies_policy', defaultMessage: '' })}
                </Typography>
            </Box>
            <Box id='cookies_definition' style={{ paddingLeft:'10px', paddingRight:'10px' }}>
                <Typography variant="h2" style={{ paddingBottom:'20px' }}>
                    {intl.formatMessage({ id: 'cookies_definition', defaultMessage: '' })}
                </Typography>
                <Typography>
                    {intl.formatMessage({ id: 'cookies_definition0', defaultMessage: '' })}
                </Typography>
            </Box>
            <Box id='cookies_definition' style={{ paddingLeft:'10px', paddingRight:'10px' }}>
                <Typography variant="h2" style={{ paddingBottom:'20px' }}>
                    {intl.formatMessage({ id: 'cookies_use', defaultMessage: '' })}
                </Typography>
                <Typography>
                    {intl.formatMessage({ id: 'cookies_use0', defaultMessage: '' })}
                </Typography>
                <List dense={true} style={{ paddingTop: '10px', paddingLeft: '20px', listStyleType: 'disc', listStylePosition: 'outside', listStyleImage: 'none' }}>
                    <li><Typography>{intl.formatMessage({ id: 'cookies_use1', defaultMessage: ''})} </Typography></li>
                    <li><Typography>{intl.formatMessage({ id: 'cookies_use2', defaultMessage: ''})} </Typography></li>
                </List>
            </Box>
            <Box id='cookies_storage' style={{ paddingLeft:'10px', paddingRight:'10px' }}>
                <Typography variant="h2" style={{ paddingBottom:'20px' }}>
                    {intl.formatMessage({ id: 'cookies_storage', defaultMessage: '' })}
                </Typography>
                <Typography>
                    {intl.formatMessage({ id: 'cookies_storage0', defaultMessage: '' })}
                    <Link target="_blank" href="https://policies.google.com/privacy">Google data privacy and security policy</Link>
                    {intl.formatMessage({ id: 'cookies_storage1', defaultMessage: '' })}
                </Typography>
                <List dense={true} style={{ paddingTop: '10px', paddingLeft: '20px', listStyleType: 'disc', listStylePosition: 'outside', listStyleImage: 'none' }}>
                    <li>
                        <Typography>
                            <b>{intl.formatMessage({ id: 'cookies_storage2_1', defaultMessage: ''})} : </b>
                            {intl.formatMessage({ id: 'cookies_storage2_2', defaultMessage: ''})}
                        </Typography>
                    </li>
                    <li>
                        <Typography>
                            <b>{intl.formatMessage({ id: 'cookies_storage3_1', defaultMessage: ''})} : </b>
                            {intl.formatMessage({ id: 'cookies_storage3_2', defaultMessage: ''})}
                        </Typography>
                    </li>
                    <li>
                        <Typography>
                            <b>{intl.formatMessage({ id: 'cookies_storage4_1', defaultMessage: ''})} : </b>
                            {intl.formatMessage({ id: 'cookies_storage4_2', defaultMessage: ''})}
                        </Typography>
                    </li>
                    <li>
                        <Typography>
                            <b>{intl.formatMessage({ id: 'cookies_storage5_1', defaultMessage: ''})} : </b>
                            {intl.formatMessage({ id: 'cookies_storage5_2', defaultMessage: ''})}
                        </Typography>
                    </li>
                </List>
                <Typography>
                    {intl.formatMessage({ id: 'cookies_storage6', defaultMessage: '' })}.
                    {intl.formatMessage({ id: 'cookies_storage7', defaultMessage: '' })}
                </Typography>
                <Typography>
                    {intl.formatMessage({ id: 'cookies_storage8', defaultMessage: '' })}
                </Typography>
            </Box>
            <Box id='cookies_list' style={{ paddingLeft:'10px', paddingRight:'10px' }}>
                <Typography variant="h2" style={{ paddingBottom:'20px' }}>
                    {intl.formatMessage({ id: 'cookies_list', defaultMessage: '' })}
                </Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ fontSize:'10px', fontWeight:'bold', padding:'5px' }}>
                                {intl.formatMessage({ id: 'cookies_name', defaultMessage: '' })}
                            </TableCell>
                            <TableCell style={{ fontSize:'10px', fontWeight:'bold', padding:'5px' }}>
                                {intl.formatMessage({ id: 'cookies_expiration', defaultMessage: '' })}
                            </TableCell>
                            <TableCell style={{ fontSize:'10px', fontWeight:'bold', padding:'5px' }}>
                                {intl.formatMessage({ id: 'cookies_description', defaultMessage: '' })}
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell style={{ fontSize:'10px', padding:'5px' }}>
                                _ga
                            </TableCell>
                            <TableCell style={{ fontSize:'10px', padding:'5px' }}>
                                2 years
                            </TableCell>
                            <TableCell style={{ fontSize:'10px', padding:'5px' }}>
                                Google Analytics Cookie used to distinguish users.
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{ fontSize:'10px', padding:'5px' }}>
                                _gid
                            </TableCell>
                            <TableCell style={{ fontSize:'10px', padding:'5px' }}>
                                24 hours
                            </TableCell>
                            <TableCell style={{ fontSize:'10px', padding:'5px' }}>
                                Google Analytics Cookie used to distinguish users.
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{ fontSize:'10px', padding:'5px' }}>
                                _ga_{process.env.REACT_APP_GOOGLE_ANALYTICS_ID}
                            </TableCell>
                            <TableCell style={{ fontSize:'10px', padding:'5px' }}>
                                2 years
                            </TableCell>
                            <TableCell style={{ fontSize:'10px', padding:'5px' }}>
                                Google Analytics Cookie used to persist session state.
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Box>
            <Box id='cookies_choice' style={{ paddingLeft:'10px', paddingRight:'10px' }}>
                <Typography variant="h2" style={{ paddingBottom:'20px' }}>
                    {intl.formatMessage({ id: 'cookies_choice', defaultMessage: '' })}
                </Typography>
                <Typography variant="h3" style={{ paddingBottom:'20px' }}>
                    {intl.formatMessage({ id: 'cookies_choice0', defaultMessage: '' })}
                </Typography>
                <Stack direction="row">
                    <Typography style={{ paddingBottom:'20px' }}>
                        {intl.formatMessage({ id: 'cookies_choice1', defaultMessage: '' })}
                    </Typography>
                    <Switch
                        defaultChecked={areActivated}
                        color='primary'
                        onChange={handleCookies}
                        inputProps={{ 'aria-label': 'ant design' }}
                    />
                </Stack>
            </Box>
        </Page>
    );

}

export default Policy;

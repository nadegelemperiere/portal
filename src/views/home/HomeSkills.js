/* -------------------------------------------------------
# Copyright (c) [2022] Nadege Lemperiere
# All rights reserved
# -------------------------------------------------------
# "Skills" part of home page
# -------------------------------------------------------
# Nadège LEMPERIERE, @02 february 2021
# Latest revision: 02 february 2021
# -------------------------------------------------------*/

/* React includes */
import React from 'react';
import { useIntl } from 'react-intl';

/* Material UI includes */
import { Stack, Typography, Avatar } from '@mui/material';
import { Circle as CircleIcon } from '@mui/icons-material';

/* Local includes */
import { HomeGridItem } from './HomeContainers';
import HomeLinearProgress from './HomeLinearProgress';

function HomeSkills() {

    /* --------- Gather inputs --------- */
    const intl = useIntl();


    /* ----------- Define HTML --------- */
    return (
        <HomeGridItem item xs={12} sm={6} md={6} style={{ bottom: '0px', position: 'relative' }}>
            <Stack direction="column" justifyContent="space-between" style={{ height: '100%' }}>
                <Stack direction="row" style={{ marginBottom: '20px', paddingLeft: '0px' }}>
                    <Avatar alt="Picture" style={{ backgroundColor: '#ffffff', marginRight: '0px', maxWidth: '0px', width: '0px', height: '40px' }}>
                        <CircleIcon color="disabled" />
                    </Avatar>
                    <Typography variant="h2" style={{ marginTop: '0px', textAlign: 'left' }}>
                        {intl.formatMessage({ id: 'home_skills', defaultMessage: 'Skills' })}
                    </Typography>
                </Stack>

                <HomeLinearProgress variant="determinate" value={80} text={intl.formatMessage({ id: 'home_skills_soft', defaultMessage: 'Soft skills' })} />
                <HomeLinearProgress variant="determinate" value={80} text={intl.formatMessage({ id: 'home_skills_cicd', defaultMessage: 'CI/CD' })} />
                <HomeLinearProgress variant="determinate" value={80} text={intl.formatMessage({ id: 'home_skills_iac', defaultMessage: 'Infrastructure as Code' })} />
                <HomeLinearProgress variant="determinate" value={70} text={intl.formatMessage({ id: 'home_skills_fsdev', defaultMessage: 'Full stack development' })} />
                <HomeLinearProgress variant="determinate" value={60} text={intl.formatMessage({ id: 'home_skills_cloud', defaultMessage: 'Cloud architecture' })} />
                <HomeLinearProgress variant="determinate" value={60} text={intl.formatMessage({ id: 'home_skills_agility', defaultMessage: 'Agility' })} />
                <HomeLinearProgress variant="determinate" value={60} text={intl.formatMessage({ id: 'home_skills_sp', defaultMessage: 'Signal processing' })} />

            </Stack>
        </HomeGridItem>
    );

}

export default HomeSkills;

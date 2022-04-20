/* -------------------------------------------------------
# TECHNOGIX
# -------------------------------------------------------
# Copyright (c) [2022] Technogix SARL
# All rights reserved
# -------------------------------------------------------
# Home page
# -------------------------------------------------------
# Nadège LEMPERIERE, @02 february 2021
# Latest revision: 02 february 2021
# -------------------------------------------------------*/

/* React includes */
import React from 'react';
import { useIntl } from 'react-intl';

/* Material UI includes */
import { Box, Typography, Link } from '@mui/material';

/* Website includes */
import { Page } from '../../containers';
import { useMenu, useConfig } from '../../providers';
import { Image, Background } from '../../components';

/* Local includes */
import SkillsGridContainer from './SkillsGridContainer';
import { SkillsMediaContainer } from './SkillsContainers';
import SkillsEducation from './SkillsEducation';
import SkillsExperience from './SkillsExperience';
import SkillsLandscape from './SkillsLandscape';

function Skills() {

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
        <Page pageTitle={intl.formatMessage({ id: 'skills', defaultMessage: 'Skills' })}>
            <Box style={{ backgroundColor: '#ffffff', height: topString }} />
            <Box style={{ position: 'relative', top: 0 }}>
                <Image reference="skills" style={{ zIndex: '0', width: '100%', objectFit: 'cover', overflow: 'hidden', textAlign: 'left', backgroundColor: '#ffffff' }} />
            </Box>
            <Box id="experience">
                <Typography variant="h1">
                    {intl.formatMessage({ id: 'skills_experience', defaultMessage: 'Experience' })}
                </Typography>
                <SkillsGridContainer container spacing={3} style={{ left: '10px', marginTop: '0px', position: 'relative', width: '100%', paddingLeft: '10px', paddingRight: '10px' }}>
                    <SkillsExperience />
                </SkillsGridContainer>
            </Box>
            <Box id="education">
                <Typography variant="h1">
                    {intl.formatMessage({ id: 'skills_education', defaultMessage: 'Education' })}
                </Typography>
                <SkillsGridContainer container spacing={3} style={{ left: '10px', marginTop: '0px', position: 'relative', width: '100%', paddingLeft: '10px', paddingRight: '10px' }}>
                    <SkillsEducation />
                </SkillsGridContainer>
            </Box>
            <Background id="landscape" size="cover" reference="landscape">
                <SkillsMediaContainer paddinglr="0px" style={{ position: 'relative', backgroundColor: 'rgba(255,255,255,0.85)' }}>
                    <Typography variant="h1">
                        {intl.formatMessage({ id: 'skills_landscape', defaultMessage: 'Technologies' })}
                    </Typography>
                    <Link href="https://landscape.cncf.io/" alt="cncf landscape" target="_blank" style={{ fontSize: '12px', color: 'black', textDecorationColor: 'black' }}> {intl.formatMessage({ id: 'skills_cncf', defaultMessage: 'from CNCF cloud native landscape' })} </Link>
                    <SkillsLandscape />
                </SkillsMediaContainer>
            </Background>
        </Page>
    );

}

export default Skills;

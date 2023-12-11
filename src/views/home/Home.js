/* -------------------------------------------------------
# Copyright (c) [2022] Nadege Lemperiere
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
import { Box, Typography, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';

/* Website includes */
import { Page } from '../../containers';
import { useLocale, useMenu, useConfig } from '../../providers';
import { Image, Background } from '../../components';

/* Local includes */
import HomeButton from './HomeButton';
import { HomeMediaContainer, HomeGridContainer } from './HomeContainers';

import HomeWhoAmI from './HomeWhoAmI';
import HomeSkills from './HomeSkills';
import HomeCertifications from './HomeCertifications';
import HomeWhatIDo from './HomeWhatIDo';
import HomeValueProposal from './HomeValueProposal';

function Home() {

    /* --------- Gather inputs --------- */
    const intl = useIntl();
    const { isDesktop } = useMenu();
    const { locale = 'en' } = useLocale() || {};
    const { appConfig } = useConfig();
    const { menu } = appConfig || {};
    const { height = '115px' } = menu || {};
    const theme = useTheme();
    //const componentName = 'Home';

    /* -------- Defining sizes --------- */
    let topString = 0;
    let marginTopString = '20px';
    if (!isDesktop) { topString = height; }
    if (!isDesktop) { marginTopString = 0; }
    const reference = `homeintro${locale}`;

    /* ----------- Define HTML --------- */
    return (
        <Page pageTitle={intl.formatMessage({ id: 'home', defaultMessage: 'Home' })}>
            <Box style={{ backgroundColor: '#ffffff', height: topString }} />
            <Box style={{ position: 'relative', top: 0 }}>
                <Image reference="home" style={{ zIndex: '0', width: '100%', objectFit: 'cover', overflow: 'hidden', textAlign: 'left', backgroundColor: '#ffffff' }} />
                <Container style={{ position: 'absolute', zIndex: '1', top: '18%', left: '50%', width: '45%', right: '5%' }}>
                    <Image reference={reference} style={{ width: '100%', objectFit: 'content', overflow: 'hidden' }} />
                    <HomeButton col={theme.palette.primary.main} alt="mail" href="mailto:contact.technogix@gmail.com" style={{ marginTop: marginTopString }}>
                        { intl.formatMessage({ id: 'home_intro_lets_talk', defaultMessage: "Let's talk" }) }
                    </HomeButton>
                </Container>
            </Box>
            <Box id="about">
                <Typography variant="h1">
                    { intl.formatMessage({ id: 'home_about_me', defaultMessage: 'About me' }) }
                </Typography>
                <HomeGridContainer container spacing={3}>
                    <HomeWhoAmI />
                    <HomeWhatIDo />
                    <div style={{ marginTop: '10px', marginLeft: '20px', marginBottom: '10px', width: '100%' }}>
                        <HomeButton col={theme.palette.primary.main} alt="about" href="/skills" style={{ fontSize: '14px', textTransform: 'uppercase', textAlign: 'center' }}>
                            { intl.formatMessage({ id: 'know_more', defaultMessage: 'Want to know more' }) }
                        </HomeButton>
                    </div>
                </HomeGridContainer>
            </Box>
            <Box id="skills">
                <Typography variant="h1">
                    { intl.formatMessage({ id: 'home_expertise', defaultMessage: 'Expertise' }) }
                </Typography>
                <HomeGridContainer container spacing={3}>
                    <HomeSkills />
                    <HomeCertifications />
                    <div style={{ marginTop: '10px', marginLeft: '20px', marginBottom: '10px', width: '100%' }}>
                        <HomeButton col={theme.palette.primary.main} alt="about" href="/skills" style={{ fontSize: '14px', textTransform: 'uppercase', textAlign: 'center' }}>
                            { intl.formatMessage({ id: 'know_more', defaultMessage: 'Want to know more' }) }
                        </HomeButton>
                    </div>
                </HomeGridContainer>
            </Box>
            <Background id="valueprop" reference="services" size="cover">
                <HomeMediaContainer style={{ paddingLeft: '0px', paddingRight: '0px', position: 'relative', backgroundColor: 'rgba(255,255,255,0.6)' }}>
                    <Typography variant="h1">
                        {intl.formatMessage({ id: 'home_value_proposal', defaultMessage: 'Value Proposal' }) }
                    </Typography>
                    <HomeGridContainer container spacing={3} style={{ opacity: '1' }}>
                        <HomeValueProposal />
                    </HomeGridContainer>
                </HomeMediaContainer>
            </Background>
        </Page>
    );


}

export default Home;

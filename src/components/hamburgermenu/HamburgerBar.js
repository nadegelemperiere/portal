/* -------------------------------------------------------
# Copyright (c) [2022] Nadege Lemperiere
# All rights reserved
# -------------------------------------------------------
# Hamburger bar for mobile navigation
# -------------------------------------------------------
# Nadège LEMPERIERE, @02 february 2022
# Latest revision: 02 february 2022
# -------------------------------------------------------*/

/* React includes */
import React from 'react';

/* Material UI includes */
import { Stack, Switch } from '@mui/material';
import { useTheme } from '@mui/material/styles';

/* Website includes */
import { useMenu, useLocale } from '../../providers';
import logMessage from '../../utils/logging';

/* Local includes */
import HamburgerLogo from './HamburgerLogo';
import HamburgerStack from './HamburgerStack';
import HamburgerIcon from './HamburgerIcon';
import HamburgerTypography from './HamburgerTypography';

function HamburgerBar(props) {

    /* --------- Gather inputs --------- */
    const { height = '115px' } = props;
    const { isSliding } = useMenu();
    const { setLocale, locale = 'en' } = useLocale();
    const theme = useTheme();
    const componentName = 'HamburgerBar';

    /* ------ Manage switch change ----- */
    /* eslint-disable padded-blocks, brace-style */
    const switchLanguage = () => {

        logMessage(componentName, 'switchLanguage --- BEGIN');
        if (locale === 'fr') { setLocale('en'); }
        else if (locale === 'en') { setLocale('fr'); }
        logMessage(componentName, 'switchLanguage --- END');

    };
    /* eslint-enable padded-blocks, brace-style */

    /* -------- Defining theme --------- */
    let stackcolor = theme.palette.primary.main;
    if (isSliding) { stackcolor = theme.palette.common.white; }

    /* ----------- Define HTML --------- */
    return (
        <HamburgerStack placeholder="hamburgerbar" id="hamburgerbar" direction="row" alignItems="center" justifyContent="space-between" color={stackcolor} padding="0px" height={height}>
            <HamburgerLogo padding="20px" height={height} reference={isSliding ? 'logoWhite' : 'logo'} />
            <HamburgerIcon width="30px" height="30px" color={stackcolor} />
            <Stack direction="row" spacing={0}>
                <HamburgerTypography col={stackcolor}>FR</HamburgerTypography>
                <Switch
                    defaultChecked={locale === 'en'}
                    color={isSliding ? 'secondary' : 'primary'}
                    onChange={switchLanguage}
                    inputProps={{ 'aria-label': 'ant design' }}
                />
                <HamburgerTypography col={stackcolor}>EN</HamburgerTypography>
            </Stack>
        </HamburgerStack>
    );

}

export default HamburgerBar;

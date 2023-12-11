/* -------------------------------------------------------
# Copyright (c) [2022] Nadege Lemperiere
# All rights reserved
# -------------------------------------------------------
# Navigation bar for desktop appliances
# -------------------------------------------------------
# Nadège LEMPERIERE, @02 february 2022
# Latest revision: 02 february 2022
# -------------------------------------------------------*/

/* React includes */
import React, { useRef } from 'react';
import { useIntl } from 'react-intl';

/* Material UI includes */
import { ButtonGroup, Stack, Switch, MenuList, MenuItem, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';

/* Website includes */
import { useMenu, useLocale } from '../../providers';
import logMessage from '../../utils/logging';

/* Local includes */
import NavigationButton from './NavigationButton';
import NavigationLogo from './NavigationLogo';
import NavigationStack from './NavigationStack';
import NavigationTypography from './NavigationTypography';

function NavigationBar(props) {

    /* --------- Gather inputs --------- */
    const { height = '115px' } = props || {};
    const { toggleItem, isSliding, isItemSelected, content, icons } = useMenu();
    const intl = useIntl();
    const theme = useTheme();
    const { setLocale, locale = 'en' } = useLocale();
    const componentName = 'NavigationBar';
    const allRef = useRef({});

    /* eslint-disable padded-blocks, brace-style */

    /* ------ Manage button click ------ */
    const handleButtonClick = (event) => {
        logMessage(componentName, 'handleButtonClick --- BEGIN');
        toggleItem(event.target.name, !(isItemSelected[event.target.name]) );
        logMessage(componentName, 'handleButtonClick --- END');
    };

    /* ----- Manage menu selection ----- */
    const handleClose = (event) => {
        logMessage(componentName, 'handleClose --- BEGIN');
        toggleItem(event.target.name, false);
        logMessage(componentName, 'handleClose --- END');
    };

    /* ------ Manage switch change ----- */
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

    let menucolor = theme.palette.common.white;
    if (isSliding) { menucolor = theme.palette.primary.main; }

    let style = 'solid';
    if (isSliding) { style = 'none'; }

    /* ----------- Define HTML --------- */
    return (
        <NavigationStack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            color={stackcolor}
            padding="0px"
            height={height}
        >
            <NavigationLogo
                padding="5px"
                reference={isSliding ? 'logoWhite' : 'logo'}
            />
            <ButtonGroup
                disableElevation={true}
                disableFocusRipple={true}
                fullWidth={true}
                disableRipple={true}
                style={{ marginLeft: '10px', marginRight: '10px', width: '100%', left: 0 }}
            >
                {content.map((item, index) => { /* Loop on all menu content to create button */

                    const IconName = icons[item.id];
                    const visibility = (isItemSelected[item.id] ? 'visible' : 'hidden')
                    return (
                        <div key={item.id} style={{width:'100%'}}>
                            <NavigationButton
                                id={item.id}
                                theme={theme}
                                name={item.id}
                                className={isItemSelected[item.id] ? 'selected' : 'nonselected'}
                                ref = {ref => allRef.current[index] = ref}
                                col={stackcolor}
                                variant="text"
                                href={ 'subitems' in item ? null : item.path }
                                target={ 'subitems' in item ? null : item.target }
                                alt={item.id}
                                startIcon={<IconName />}
                                onClick={handleButtonClick}
                            >
                                {intl.formatMessage({ id: item.id, defaultMessage: '' })}
                            </NavigationButton>
                            {('subitems' in item) && (
                                <MenuList
                                    open={isItemSelected[item.id]}
                                    style={{padding:0, borderRadius:0, visibility:visibility, position:'absolute', top:height, borderWidth:'1px', borderStyle:style, borderColor:theme.palette.primary.main}}
                                >
                                    {item.subitems.map((subitem) => {

                                        return (
                                            <MenuItem onClick={handleClose} key={subitem.id} style={{backgroundColor:menucolor, color:stackcolor, borderRadius:0}}>
                                                <Link href={subitem.path} target={subitem.target} style={{ textDecoration: 'none', color:stackcolor }}>
                                                    {intl.formatMessage({ id: subitem.id, defaultMessage: '' })}
                                                </Link>
                                            </MenuItem>
                                        );

                                    })}
                                </MenuList>
                            )}
                        </div>
                    );

                })}
            </ButtonGroup>
            <Stack direction="row">
                <NavigationTypography col={stackcolor}>FR</NavigationTypography>
                <Switch
                    defaultChecked={locale === 'en'}
                    color={isSliding ? 'secondary' : 'primary'}
                    onChange={switchLanguage}
                    inputProps={{ 'aria-label': 'ant design' }}
                />
                <NavigationTypography col={stackcolor}>EN</NavigationTypography>
            </Stack>
        </NavigationStack>
    );

}

export default NavigationBar;

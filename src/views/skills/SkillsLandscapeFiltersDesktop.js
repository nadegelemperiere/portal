/* -------------------------------------------------------
# TECHNOGIX
# -------------------------------------------------------
# Copyright (c) [2022] Technogix SARL
# All rights reserved
# -------------------------------------------------------
# Desktop technology landscape part of about page
# -------------------------------------------------------
# Nadège LEMPERIERE, @02 february 2021
# Latest revision: 02 february 2021
# -------------------------------------------------------*/

/* React includes */
import React from 'react';

/* Material UI includes */
import { Paper, Typography, Stack, IconButton, Button, Container, TextField, List, ListItem, Checkbox, ListItemText, ListItemIcon, Collapse, Divider } from '@mui/material';
import { Settings as SettingsIcon, ExpandLess as ExpandLessIcon, ExpandMore as ExpandMoreIcon, CheckBoxOutlineBlank as CheckBoxOutlineBlankIcon, CheckBox as CheckBoxIcon, Search as SearchIcon } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

/* Website includes */
import { useTechnologies, useConfig } from '../../providers';
import logMessage from '../../utils/logging';

function SkillsLandscapeFiltersDesktop() {

    /* --------- Gather inputs --------- */
    const {
        filtersVisible, toggleFilters, technologySearch,
        technologyCategories, technologySort, selectName,
        selectCategory, sortTechnologies, selectSubcategory,
        technologyFilters, technologySortOptions, resetTechnologies,
    } = useTechnologies();
    const { appConfig } = useConfig();
    const { menu } = appConfig || {};
    const { height = '115px' } = menu || {};
    const theme = useTheme();
    const componentName = 'SkillsLandscapeFiltersMobile';

    /* --------- Compute sizes --------- */
    const widthSearch = '300px'
    const leftSearch = `calc((100% - ${widthSearch}) * 0.5)`;
    const heightString = `calc(100% - ${height} - 40px)`;
    const percentString = Math.floor(100 / (technologySortOptions.length)).toString();
    const widthSelectString = `${percentString}%`;

    /* ----- Manage filters display ---- */
    /* eslint-disable padded-blocks, brace-style */
    const handleFilters = () => {

        logMessage(componentName, 'handleFilters --- BEGIN');
        const category = 'main';
        toggleFilters(category);
        logMessage(componentName, 'handleFilters --- END');

    };
    /* eslint-enable padded-blocks, brace-style */

    /* ------ Manage filters reset ----- */
    /* eslint-disable padded-blocks, brace-style */
    const handleAll = () => {

        logMessage(componentName, 'handleAll --- BEGIN');
        resetTechnologies('checked');
        logMessage(componentName, 'handleAll --- END');

    };
    /* eslint-disable padded-blocks, brace-style */

    /* eslint-disable padded-blocks, brace-style */
    const handleNone = () => {

        logMessage(componentName, 'handleNone --- BEGIN');
        resetTechnologies('unchecked');
        logMessage(componentName, 'handleNone --- END');

    };
    /* eslint-disable padded-blocks, brace-style */

    /* eslint-disable padded-blocks, brace-style */
    const handleSearch = (event) => {

        logMessage(componentName, 'handleSearch --- BEGIN');
        selectName(event.target.value);
        logMessage(componentName, 'handleSearch --- END');

    };
    /* eslint-disable padded-blocks, brace-style */

    /* ----- Manage category display ---- */
    /* eslint-disable brace-style */
    const handleCategory = (event) => {

        logMessage(componentName, 'handleCategory --- BEGIN');

        /* find the technology name depending on the element that was clicked : svg or path */
        let id = '';
        if (event.target.type === 'button') { id = event.target.id; }
        else if (event.target.parentNode.type === 'button') { id = event.target.parentNode.id; }
        else if (event.target.parentNode.parentNode.type === 'button') { id = event.target.parentNode.parentNode.id; }

        toggleFilters(id);
        logMessage(componentName, 'handleCategory --- END');

    };
    /* eslint-enable brace-style */

    const handleCheckCategory = (event) => {

        logMessage(componentName, 'handleCheckCategory --- BEGIN');
        selectCategory(event.target.id);
        logMessage(componentName, 'handleCheckCategory --- END');

    };

    const handleCheckSubcategory = (event) => {

        logMessage(componentName, 'handleCheckCategory --- BEGIN');
        selectSubcategory(event.target.name, event.target.id);
        logMessage(componentName, 'handleCheckCategory --- END');

    };

    /* eslint-disable brace-style */
    const handleSort = (event) => {

        logMessage(componentName, 'handleSort --- BEGIN');

        /* find the technology name depending on the element that was clicked : svg or path */
        let id = '';
        if (event.target.type === 'button') { id = event.target.id; }
        else if (event.target.parentNode.type === 'button') { id = event.target.parentNode.id; }
        else if (event.target.parentNode.parentNode.type === 'button') { id = event.target.parentNode.parentNode.id; }

        sortTechnologies(id);
        logMessage(componentName, 'handleSort --- END');

    };
    /* eslint-disable brace-style */

    /* ----------- Define HTML --------- */
    return (
        <Paper style={{ position:'relative', backgroundColor: '#ffffff', marginTop: '20px', marginLeft: '20px', marginRight: '20px', top: '0px', left:leftSearch, zIndex: '1000', borderRadius: '0px', padding: '5px', width:widthSearch }}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" style={{ height: '40px' }}>
                <IconButton onClick={handleFilters}>
                    <SettingsIcon style={{ alignSelf: 'center' }} />
                </IconButton>
                <Divider light orientation="vertical" />
                <SearchIcon color="secondary" />
                <TextField label="Search field" onChange={handleSearch} value={technologySearch} type="search" variant="standard" color="secondary" style={{ paddingLeft: '10px', label: { paddingLeft: '10px' }, '&::before': { paddingLeft: '10px' } }} />
                <Divider light orientation="vertical" />
                <IconButton onClick={handleNone}>
                    <CheckBoxOutlineBlankIcon style={{ alignSelf: 'center' }} />
                </IconButton>
                <Divider light orientation="vertical" />
                <IconButton onClick={handleAll}>
                    <CheckBoxIcon style={{ alignSelf: 'center' }} />
                </IconButton>
            </Stack>
            <Container style={{ visibility: (filtersVisible.main ? 'visible' : 'hidden'), height: (filtersVisible.main ? heightString : '0px'), overflowY: 'scroll' }}>
                <Divider light />
                <Typography style={{ fontSize: '12px', paddingTop: '10px' }}> Sort by : </Typography>
                <Stack direction="row" alignItems="center" justifyContent="space-between" style={{ height: '40px' }}>
                    {technologySortOptions.map((item) => {

                        const isSelected = (technologySort.key === item.key);
                        return (
                            <Button className={isSelected ? 'selected' : 'nonselected'} style={{ width: widthSelectString, borderRadius: '0px', borderColor: theme.palette.secondary.main, borderWidth: '1px', borderStyle: 'solid', '&.selected p': { color: theme.palette.secondary.main }, '&.selected': { backgroundColor: '#e0e0de' } }} key={item.key} variant="contained" onClick={handleSort} size="small" color="secondary" id={item.key} disableElevation>
                                <Typography style={{ color: '#ffffff' }}>
                                    {item.key}
                                </Typography>
                            </Button>
                        );

                    })}
                </Stack>
                <Divider light />
                <Typography style={{ fontSize: '12px', paddingTop: '10px' }}> Categories : </Typography>
                <List dense={true}>
                    { Object.entries(technologyCategories).map((item) => {

                        const isCollapsed = filtersVisible[item[1].name];
                        const isChecked = (technologyFilters[item[1].name] === 'checked');
                        const isIndeterminated = (technologyFilters[item[1].name] === 'indeterminated');

                        return (
                            <React.Fragment key={item[1].name}>
                                <ListItem
                                    style={{ padding: 0 }}
                                    alignItems="center"
                                    secondaryAction={(
                                        <IconButton edge="end" onClick={handleCategory} id={item[1].name}>
                                            {isCollapsed ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                        </IconButton>
                                    )}
                                >
                                    <ListItemIcon style={{ minWidth: '24px' }}>
                                        <Checkbox edge="start" id={item[1].name} indeterminate={isIndeterminated} checked={isChecked} onChange={handleCheckCategory} color="secondary" style={{ padding: '0px', margin: '0px' }} />
                                    </ListItemIcon>
                                    <ListItemText primary={item[1].name} style={{ marginLeft: '10px', span: { fontSize: '11px' } }} />
                                </ListItem>
                                <Collapse in={isCollapsed} timeout="auto" unmountOnExit style={{ paddingLeft: '20px' }}>
                                    <List disablePadding dense={true}>
                                        {item[1].subcategories.map((jtem) => {

                                            const isSChecked = (technologyFilters[jtem] === 'checked');
                                            return (
                                                <ListItem key={jtem} style={{ padding: 0 }}>
                                                    <ListItemIcon style={{ minWidth: '0px' }}>
                                                        <Checkbox edge="start" checked={isSChecked} name={item[1].name} id={jtem} onChange={handleCheckSubcategory} color="secondary" style={{ padding: '0px', margin: '0px' }} />
                                                    </ListItemIcon>
                                                    <ListItemText primary={jtem} style={{ marginLeft: '10px', span: { fontSize: '11px' } }} />
                                                </ListItem>
                                            );

                                        })}
                                    </List>
                                </Collapse>
                            </React.Fragment>
                        );

                    })}
                </List>
            </Container>
        </Paper>
    );


}

export default SkillsLandscapeFiltersDesktop;

/* -------------------------------------------------------
# TECHNOGIX
# -------------------------------------------------------
# Copyright (c) [2022] Technogix SARL
# All rights reserved
# -------------------------------------------------------
# Technology landscape part of about page
# -------------------------------------------------------
# Nadège LEMPERIERE, @02 february 2021
# Latest revision: 02 february 2021
# -------------------------------------------------------*/

/* React includes */
import React, { useEffect } from 'react';

/* Material UI includes */
import { Typography, IconButton, Card, CardHeader, Stack, Stepper, Step, StepLabel, Avatar, Table, TableRow, TableCell, TableBody, Collapse, StepConnector } from '@mui/material';
import { ExpandMore as ExpandMoreIcon, ExpandLess as ExpandLessIcon, Link as StarIcon, Stop as StopIcon } from '@mui/icons-material';
import { styled } from '@mui/system';

/* Website includes */
import { useMenu, useTechnologies } from '../../providers';
import { gtag } from '../../providers/Cookies/Utils';
import logMessage from '../../utils/logging';

/* Local includes */
import SkillsLandscapeFiltersDesktop from './SkillsLandscapeFiltersDesktop';
import SkillsLandscapeFiltersMobile from './SkillsLandscapeFiltersMobile';
import { SkillsMediaContainer } from './SkillsContainers';

const SkillsLandscapeStepperConnector = styled(StepConnector)(({ theme, color }) => ({
    width: '30px',
    marginLeft: '-10px',
    span: {
        borderColor: '#e0e0de',
        borderTopWidth: '5px',
    },
    '&.alternativeLabel': {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    },
    '&.active': { '&.line': { borderColor: '#784af4' } },
    '&.completed': { '&.line': { borderColor: '#784af4' } },
    '&.line': {
        borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
        borderTopWidth: 3,
        borderRadius: 1,
    },
    '&.Mui-completed': { span: { borderColor: color } },
}));

const SkillsLandscapeStep = styled(Step)(({ color }) => ({
    color: '#e0e0de',
    paddingRight: '0px',
    '&.Mui-completed': { color },
}));

const SkillsLandscapeIcon = styled(StopIcon)(() => ({
    zIndex: 1,
    transform: ' translate(0px,2px) rotate(45deg)',
}));

const SkillsLandscapeStepLabel = styled(StepLabel)(() => ({
    alternativeLabel: { marginTop: '5px' },
    'span.MuiStepLabel-label': { marginTop: '5px' },
    span: {
        span: {
            fontSize: '11px',
            marginTop: '5px',
        },
    },
}));


function SkillsLandscape() {

    /* --------- Gather inputs --------- */
    const { isDesktop } = useMenu();
    const {
        toggleTechnology, sortTechnologies, technologySort,
        technologyColors, technologyStatus, technologySelection,
    } = useTechnologies();
    const componentName = 'SkillsLandscape';

    /* ---------- Derive sizes --------- */
    const widthString = 'calc(100% - 40px)';

    /* ----- Manage details display ---- */
    const handleCardClick = (event) => {

        /* find the technology name depending on the element that was clicked : svg or path */
        const { target } = event;
        const { parentNode } = target;
        let { id } = parentNode;

        if (event.target.parentNode.parentNode.type === 'button') { id = event.target.parentNode.parentNode.id; }
        gtag('event','search',{'search_term':id});

        toggleTechnology(id);

    };

    /* ---- Initialize technologies  --- */
    /* eslint-disable brace-style */
    useEffect(() => {

        logMessage(componentName, 'useEffect[] --- BEGIN');
        sortTechnologies(technologySort.key);
        logMessage(componentName, 'useEffect[] --- END');

    }, [technologySort.key]); /* eslint-disable-line react-hooks/exhaustive-deps */

    /* ----------- Define HTML --------- */
    return (
        <React.Fragment key="landscape">
            {(isDesktop) && (<SkillsLandscapeFiltersDesktop />)}
            {(!isDesktop) && (<SkillsLandscapeFiltersMobile />)}
            <SkillsMediaContainer paddinglr="5px" paddingtb="5px" style={{ textAlign: 'center', justifyContent: 'center', backgroundColor: 'rgba(255,255,255,0)', width: widthString, marginLeft: '20px', marginRight: '20px', marginBottom: '20px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {technologySelection.map((item) => {

                    const color = technologyColors[item.category];
                    const status = technologyStatus[item.name];
                    const iconSize = (isDesktop ? '20px' : '40px');
                    const cardSize = (isDesktop ? '250px' : '250px');
                    /* eslint-disable  import/no-dynamic-require, global-require */
                    const image = require(`../../${item.image}`);
                    /* eslint-enable  import/no-dynamic-require, global-require */
                    return (
                        <Stack key={item.name} direction="column">
                            <Card style={{ width: cardSize, marginLeft: '5px', marginRight: '5px', marginTop: '5px', marginBottom: '0px', div: { alignSelf: 'center' } }}>
                                <CardHeader
                                    action={
                                        (
                                            <IconButton onClick={handleCardClick} id={item.name} style={{ width: iconSize, height: iconSize, right: '10px' }}>
                                                {(status) && (<ExpandLessIcon style={{ color: '#ffffff', width: iconSize, height: iconSize }} />)}
                                                {(!status) && (<ExpandMoreIcon style={{ color: '#ffffff', width: iconSize, height: iconSize }} />)}
                                            </IconButton>
                                        )
                                    }
                                    avatar={
                                        <Avatar src={image} alt={item.name} style={{ backgroundColor: '#ffffff', width: iconSize, height: iconSize }} />
                                    }
                                    title={item.name}
                                    sx={{ span: { color: '#ffffff', fontSize: '11px' }, padding: '5px', backgroundColor: color }}
                                />
                            </Card>
                            <Collapse in={status} style={{ backgroundColor: '#ffffff', width: cardSize, paddingBottom: '5px', paddingTop: '5px', marginLeft: '5px', marginRight: '5px', marginBottom: '5px', marginTop: '0px', paddingLeft: '10px', paddingRight: '10px' }}>
                                <Table style={{ width: '100%' }}>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell style={{ padding: 0, borderWidth: '0px', borderStyle: 'none' }}>
                                                <Typography style={{ fontSize: '11px' }}> Category </Typography>
                                            </TableCell>
                                            <TableCell style={{ padding: 0, borderWidth: '0px', borderStyle: 'none' }}>
                                                <Typography style={{ fontSize: '11px', backgroundColor: color, color: '#ffffff', padding: '5px', margin: '5px', borderRadius: '10px' }}>
                                                    {item.category}
                                                </Typography>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell style={{ padding: 0, borderWidth: '0px', borderStyle: 'none' }}>
                                                <Typography style={{ fontSize: '11px' }}> Subcategory </Typography>
                                            </TableCell>
                                            <TableCell style={{ padding: 0, borderWidth: '0px', borderStyle: 'none' }}>
                                                <Typography style={{ fontSize: '11px', backgroundColor: color, color: '#ffffff', padding: '5px', margin: '5px', borderRadius: '10px' }}>
                                                    {item.subcategoryShort}
                                                </Typography>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell style={{ padding: 0, borderWidth: '0px', borderStyle: 'none' }}>
                                                <Typography style={{ fontSize: '11px' }}> Level </Typography>
                                            </TableCell>
                                            <TableCell style={{ padding: 0, borderWidth: '0px', borderStyle: 'none' }}>
                                                <Stepper alternativeLabel sx={{ marginLeft: '-5px' }}>
                                                    <SkillsLandscapeStep completed={item.level >= 1} color={color}>
                                                        <SkillsLandscapeStepLabel icon={<SkillsLandscapeIcon/>} > 1 </SkillsLandscapeStepLabel>
                                                    </SkillsLandscapeStep>
                                                    <SkillsLandscapeStep completed={item.level >= 2} color={color}>
                                                        <SkillsLandscapeStepLabel icon={<SkillsLandscapeIcon/>} > 2 </SkillsLandscapeStepLabel>
                                                        <SkillsLandscapeStepperConnector color={color} />
                                                    </SkillsLandscapeStep>
                                                    <SkillsLandscapeStep completed={item.level >= 3} color={color}>
                                                        <SkillsLandscapeStepLabel icon={<SkillsLandscapeIcon/>} > 3 </SkillsLandscapeStepLabel>
                                                        <SkillsLandscapeStepperConnector color={color} />
                                                    </SkillsLandscapeStep>
                                                    <SkillsLandscapeStep completed={item.level >= 4} color={color}>
                                                        <SkillsLandscapeStepLabel icon={<SkillsLandscapeIcon/>} > 4 </SkillsLandscapeStepLabel>
                                                        <SkillsLandscapeStepperConnector color={color} />
                                                    </SkillsLandscapeStep>
                                                    <SkillsLandscapeStep completed={item.level >= 5} color={color}>
                                                        <SkillsLandscapeStepLabel icon={<SkillsLandscapeIcon/>} > 5 </SkillsLandscapeStepLabel>
                                                        <SkillsLandscapeStepperConnector color={color} />
                                                    </SkillsLandscapeStep>
                                                </Stepper>
                                            </TableCell>
                                        </TableRow>
                                        {
                                            (item.certification.url !== '') && (
                                                <TableRow>
                                                    <TableCell style={{ padding: 0, borderWidth: '0px', borderStyle: 'none' }}>
                                                        <Typography style={{ fontSize: '11px' }}> Certification </Typography>
                                                    </TableCell>
                                                    <TableCell style={{ padding: 0, borderWidth: '0px', borderStyle: 'none' }}>
                                                        <IconButton href={item.certification.url} target="_blank" style={{ paddingLeft: '5px' }}>
                                                            <StarIcon style={{ color }} />
                                                        </IconButton>
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        }
                                        <TableRow>
                                            <TableCell style={{ padding: 0, borderWidth: '0px', borderStyle: 'none' }}>
                                                <Typography style={{ fontSize: '11px' }}> Comments </Typography>
                                            </TableCell>
                                            <TableCell style={{ padding: 0, borderWidth: '0px', borderStyle: 'none' }}>
                                                <Typography style={{ fontSize: '11px', padding: '5px', margin: '5px', borderRadius: '10px' }}>
                                                    {item.comments}
                                                </Typography>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </Collapse>
                        </Stack>
                    );

                })}
            </SkillsMediaContainer>
        </React.Fragment>
    );

}

export default SkillsLandscape;

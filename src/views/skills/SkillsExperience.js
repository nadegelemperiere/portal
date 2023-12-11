/* -------------------------------------------------------
# Copyright (c) [2022] Nadege Lemperiere
# All rights reserved
# -------------------------------------------------------
# Experience part of about page
# -------------------------------------------------------
# Nadège LEMPERIERE, @02 february 2021
# Latest revision: 02 february 2021
# -------------------------------------------------------*/

/* React includes */
import React, { useState } from 'react';
import { useIntl } from 'react-intl';

/* Material UI includes */
import { Typography, Badge, Button, Avatar, Link, Stack, Grid, Divider } from '@mui/material';
import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';

/* Website includes */
import logMessage from '../../utils/logging';
import { useConfig } from '../../providers';

/* Local includes */
import SkillsGridItem from './SkillsGridItem';


const SkillsExperienceBadge = styled(Badge)(() => ({ '& .MuiBadge-badge': { color:'#ffffff' } }));

const SkillsExperienceButton = styled(Button)(() => ({
    backgroundColor:'#aaaaaa',
    borderColor:'#ffffff',
    borderStyle:'solid',
    borderWidth:'1px',
    color:'#ffffff',
    minHeight: '0px',
    paddingTop: '2px',
    paddingBottom:'2px',
    fontSize:'9px',
}));


function SkillsExperience() {

    /* --------- Gather inputs --------- */
    const intl = useIntl();
    const { appConfig } = useConfig();
    const { experience = [] } = appConfig || {};
    const [expanded, setExpanded] = useState('');
    const theme = useTheme();
    const componentName = 'SkillsExperience';

    /* ---- Handle accordion events ---- */
    const handleChange = (panel) => (event, newExpanded) => {

        logMessage(componentName, 'handleChange --- BEGIN');
        setExpanded(expanded === panel ? '' : panel);
        logMessage(componentName, 'handleChange --- END');

    };

    /* ----------- Define HTML --------- */
    return (
        <SkillsGridItem item xs={12} sm={12} md={12} style={{ bottom: '0px', position: 'relative' }}>
            <Stack direction="column" justifyContent="space-between" style={{ height: '100%', paddingBottom: '10px' }}>
                <Grid container style={{ display: 'grid', width:'100%' }}>
                    {experience.map((item, index) => {

                        /* Loop on all menu content to create button */
                        const name = `panel${index}`;
                        const display = (expanded === name ? 'table-row' : 'none' );
                        const isExpanded = (expanded === name);
                        let publications = 0;
                        let patents = 0;
                        for (let i =0; i < item.references.length; i += 1)
                        {

                            if ( item.references[i].type === 'publication') { publications += 1; }
                            if ( item.references[i].type === 'patent') { patents += 1; }

                        }

                        return (
                            <Grid key={item.title} container sx ={{ paddingTop:'10px' }}>
                                <Grid container item spacing={2}>
                                    <Grid item container xs={12} sm={4} md={4}>
                                        <Typography style={{ fontWeight: 'bold' }}>
                                            {item.date}
                                        </Typography>
                                    </Grid>
                                    <Grid item container xs={11} sm={7} md={7} style={{ textTransform: 'uppercase' }}>
                                        <Typography style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
                                            {intl.formatMessage({ id: item.title, defaultMessage: '' })}
                                        </Typography>
                                    </Grid>
                                    <Grid item container xs={1} sm={1} md={1} onClick={handleChange(name)} style={{ rowSpan:2 }}>
                                        <Avatar style={{ width: '30px', minWidth:'30px', height:'30px' }}>
                                            {(!isExpanded) && (<AddIcon />)}
                                            {(isExpanded) && (<RemoveIcon />)}
                                        </Avatar>
                                    </Grid>
                                </Grid>
                                <Grid container item spacing={2} style={{ paddingTop:'10px' }}>
                                    <Grid item container xs={12} sm={4} md={4}>
                                        <Typography>{intl.formatMessage({ id: item.location, defaultMessage: '' })}</Typography>
                                    </Grid>
                                    {(publications !== 0 ) && (
                                        <Grid item xs={6} sm={4} md={4} style={{ textAlign:'left', paddingBottom: '10px', paddingTop: '10px' }}>
                                            <SkillsExperienceBadge badgeContent={publications} color='primary'>
                                                <SkillsExperienceButton variant="contained" disableElevation >
                                                    Publications
                                                </SkillsExperienceButton>
                                            </SkillsExperienceBadge>
                                        </Grid>
                                    )}
                                    {(patents !== 0 ) && (
                                        <Grid item xs={6} sm={4} md={4} style={{ textAlign:'left', paddingBottom: '10px', paddingTop: '10px' }}>
                                            <SkillsExperienceBadge badgeContent={patents} color='primary'>
                                                <SkillsExperienceButton variant="contained" disableElevation >
                                                    Patents
                                                </SkillsExperienceButton>
                                            </SkillsExperienceBadge>
                                        </Grid>
                                    )}
                                </Grid>
                                <Grid container item spacing={2} style={{ display: display, paddingTop:'10px' }}>
                                    <Grid item container xs={12} sm={12} md={12}>
                                        <Divider style={{ marginBottom: '10px', width:'100%' }}/>
                                    </Grid>
                                    <Grid item container xs={12} sm={12} md={12}>
                                        <Typography style={{ fontWeight: 'bold' }}>
                                            Missions:
                                        </Typography>
                                    </Grid>
                                    <Grid item container xs={12} sm={12} md={12}>
                                        {item.description.map((description) => {

                                            return(
                                                <Typography key={description} style={{ paddingLeft: '10px' }}>
                                                    {intl.formatMessage({ id: description, defaultMessage: '' })}
                                                </Typography>
                                            );

                                        })}
                                    </Grid>
                                    {(item.references.length !== 0) && (
                                        <Grid item container xs={12} sm={12} md={12}>
                                            <Divider style={{ marginBottom: '10px', marginTop: '10px', width:'100%' }} />
                                        </Grid>
                                    )}
                                    {(item.references.length !== 0) && (
                                        <Grid item container xs={12} sm={12} md={12}>
                                            <Typography style={{ fontWeight: 'bold' }}>
                                                References:
                                            </Typography>
                                        </Grid>
                                    )}
                                    {(item.references.length !== 0) && (
                                        <Grid item container xs={12} sm={12} md={12}>
                                            {item.references.map((reference) => {

                                                return(
                                                    <Link key={reference.reference} href={reference.url} target="_blank" style={{ textDecorationColor: 'black' }}>
                                                        <Typography style={{ paddingLeft: '10px' }}>
                                                            [{reference.reference}] - {reference.date} - {reference.title}
                                                        </Typography>
                                                    </Link>
                                                );

                                            })}
                                        </Grid>
                                    )}
                                    <Grid item container xs={12} sm={12} md={12}>
                                        <Divider style={{ marginBottom: '10px', marginTop: '10px', width:'100%' }} />
                                    </Grid>
                                    <Grid item container xs={12} sm={12} md={12}>
                                        <Typography style={{ fontWeight: 'bold' }}>
                                            Keywords:
                                        </Typography>
                                    </Grid>
                                    <Grid container item spacing={2} style={{ paddingTop:'10px' }}>
                                        {item.keywords.map((keyword) => {

                                            return(
                                                <Button variant="contained" key={keyword} disableElevation style={{minHeight: '0px', margin:'10px', padding:'3px', fontSize:'9px', backgroundColor:theme.palette.primary.main, borderColor:'#ffffff', borderStyle:'solid', borderWidth:'1px', color:'#ffffff', textTransform:'lowercase'}}>
                                                    {keyword}
                                                </Button>
                                            );

                                        })}
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <div style={{ backgroundColor: 'black', position: 'absolute', height: '1px', width: '50%', right: '25%' }} />
                                </Grid>
                            </Grid>
                        );

                    })}
                </Grid>
            </Stack>
        </SkillsGridItem>
    );

}

export default SkillsExperience;

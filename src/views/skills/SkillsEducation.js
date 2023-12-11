/* -------------------------------------------------------
# Copyright (c) [2022] Nadege Lemperiere
# All rights reserved
# -------------------------------------------------------
# Education part of about page
# -------------------------------------------------------
# Nadège LEMPERIERE, @02 february 2021
# Latest revision: 02 february 2021
# -------------------------------------------------------*/

/* React includes */
import React from 'react';
import { useIntl } from 'react-intl';

/* Material UI includes */
import { Grid, Stack, Typography, Link } from '@mui/material';

/* Website includes */
import { useConfig } from '../../providers';

/* Local includes */
import SkillsGridItem from './SkillsGridItem';

function SkillsEducation() {

    /* --------- Gather inputs --------- */
    const intl = useIntl();
    const { appConfig } = useConfig();
    const { education = [] } = appConfig || {};

    /* ----------- Define HTML --------- */
    return (
        <SkillsGridItem item xs={12} sm={12} md={12} style={{ bottom: '0px', position: 'relative' }}>
            <Stack direction="column" justifyContent="space-between" style={{ height: '100%' }}>
                <Grid container style={{ display: 'grid', gridTemplateRows: `repeat(${education.length}, 1fr)` }}>
                    {education.map((item, index) => {

                        /* Loop on all menu content to create button */
                        const key = `experience${index}`;
                        return (
                            <Grid key={key} container style={{ marginTop: '10px' }}>
                                <Grid container item spacing={2}>
                                    <Grid item container xs={12} sm={4} md={4}>
                                        <Typography style={{ fontWeight: 'bold' }}>
                                            {item.date}
                                        </Typography>
                                    </Grid>
                                    <Grid item container xs={12} sm={8} md={8} style={{ textTransform: 'uppercase' }}>
                                        <Typography style={{ fontWeight: 'bold' }}>
                                            {intl.formatMessage({ id: item.id1, defaultMessage: '' })}
                                        </Typography>
                                    </Grid>
                                    <Grid item container xs={12} sm={4} md={4}>
                                        <Link href={item.link} style={{ color: 'black', textDecorationColor: 'black' }}>
                                            <Typography>{item.location}</Typography>
                                        </Link>
                                    </Grid>
                                    <Grid item xs={12} sm={8} md={8} style={{ position: 'relative', bottom: '0px' }}>
                                        <Grid item xs={12} style={{ height: '100%' }}>
                                            <Typography>
                                                {intl.formatMessage({ id: item.id2, defaultMessage: '' })}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ backgroundColor: 'black', position: 'absolute', height: '1px', width: '50%', right: '25%' }} />
                                    </Grid>
                                </Grid>
                            </Grid>
                        );

                    })}
                </Grid>
            </Stack>
        </SkillsGridItem>
    );

}

export default SkillsEducation;

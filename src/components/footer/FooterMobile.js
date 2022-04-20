/* -------------------------------------------------------
# TECHNOGIX
# -------------------------------------------------------
# Copyright (c) [2022] Technogix SARL
# All rights reserved
# -------------------------------------------------------
# Responsive image handling srcset, webp and fallbacks
# -------------------------------------------------------
# Nadège LEMPERIERE, @24 february 2022
# Latest revision: 24 february 2022
# -------------------------------------------------------*/

/* React includes */
import React from 'react';
import { useIntl } from 'react-intl';

/* Material includes */
import { Typography, Grid, Avatar, Link, Divider } from '@mui/material';
import { LocationOn as LocationOnIcon, Email as EmailIcon, LinkedIn as LinkedInIcon, GitHub as GitHubIcon } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

/* Website includes */
import Image from '../image/Image';


function FooterMobile() {

    /* --------- Gather inputs --------- */
    const intl = useIntl();
    const theme = useTheme();
    //const componentName = 'FooterMobile';

    /* ----------- Define HTML --------- */
    /* eslint-disable padded-blocks */
    return (
        <Grid container>
            <Grid container item xs={12}>
                <Divider style={{ color:theme.palette.primary.main, borderColor:theme.palette.primary.main, width:'100%' }}/>
            </Grid>
            <Grid item container xs={12} style={{ paddingTop:'10px' }}>
                <Grid item container xs={12} >
                    <Grid item xs={3} style={{ textAlign:'left' }}>
                        <Image reference='logo' style={{ width:'60px' }}/>
                    </Grid>
                    <Grid item xs={6} style={{ paddingTop:'17px' }} >
                        <Typography style={{ textTransform:'uppercase', color:theme.palette.primary.main, textAlign:'center', fontSize:'11px' }}>
                            {intl.formatMessage({ id: 'footer_follow_us', defaultMessage: '' })} :
                        </Typography>
                    </Grid>
                    <Grid container item xs={3} style={{ paddingTop:'5px' }} >
                        <Grid item xs={6}>
                            <Link href="https://www.linkedin.com/in/nadege-lemperiere-88518129/" target="_blank">
                                <Avatar style={{ backgroundColor:'rgba(255,255,255,0)' }}><LinkedInIcon style={{ color:theme.palette.primary.main }}/></Avatar>
                            </Link>
                        </Grid>
                        <Grid item xs={6}>
                            <Link href="https://github.com/technogix/" target="_blank">
                                <Avatar style={{ backgroundColor:'rgba(255,255,255,0)' }}><GitHubIcon style={{ color:theme.palette.primary.main }}/></Avatar>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container item xs={12}>
                <Divider style={{ color:theme.palette.primary.main, borderColor:theme.palette.primary.main, width:'100%' }}/>
            </Grid>
            <Grid container item xs={12} style= {{ paddingTop:'10px', paddingBottom:'10px' }}>
                <Grid item container xs={12} style={{ width:'100%' }}>
                    <Grid container item xs={12}>
                        <Grid item xs={3} sm={3} md={3}>
                            <Link href="https://www.google.com/maps/place/3+Imp.+Wagner,+92130+Issy-les-Moulineaux/@48.8204567,2.2700222,17z/data=!4m5!3m4!1s0x47e67a81b06b10af:0xc6710abc09b39742!8m2!3d48.8204532!4d2.2722109" target="_blank">
                                <Avatar style={{ backgroundColor:'rgba(255,255,255,0)' }} ><LocationOnIcon style={{ color:theme.palette.primary.main }}/></Avatar>
                            </Link>
                        </Grid>
                        <Grid item xs={9} sm={9} md={9} style={{ paddingTop:'7px' }}>
                            <Typography style={{ color:theme.palette.primary.main, fontSize:'10px' }}>
                                3 impasse Wagner
                            </Typography>
                            <Typography style={{ color:theme.palette.primary.main, fontSize:'10px' }}>
                                92130 Issy les Moulineaux
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12}>
                        <Grid item xs={3} sm={3} md={3}>
                            <Link href="mailto:contact.technogix@gmail.com">
                                <Avatar style={{ backgroundColor:'rgba(255,255,255,0)' }}><EmailIcon style={{ color:theme.palette.primary.main }}/></Avatar>
                            </Link>
                        </Grid>
                        <Grid item xs={7} sm={7} md={7} style={{ paddingTop:'10px' }}>
                            <Link href="mailto:contact.technogix@gmail.com">
                                <Typography style={{ color:theme.palette.primary.main, fontSize:'10px' }}>
                                    contact.technogix@gmail.com
                                </Typography>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container item xs={12}>
                <Divider style={{ color:theme.palette.primary.main, borderColor:theme.palette.primary.main, width:'100%' }}/>
            </Grid>
            <Grid container item xs={12} style={{ paddingTop:'5px' }}>
                <Grid container item xs={6}>
                    <Link href='/status' style={{ width:'100%' }}>
                        <Typography style={{ color:theme.palette.primary.main, fontSize:'10px', width:'100%', textAlign:'center' }}>
                            {intl.formatMessage({ id: 'footer_general_conditions', defaultMessage: '' })}
                        </Typography>
                    </Link>
                </Grid>
                <Grid container item xs={6} >
                    <Link href='/policy' style={{ width:'100%' }}>
                        <Typography style={{ color:theme.palette.primary.main, fontSize:'10px', width:'100%', textAlign:'center' }}>
                            {intl.formatMessage({ id: 'footer_cookies', defaultMessage: '' })}
                        </Typography>
                    </Link>
                </Grid>
            </Grid>
        </Grid>
    );

}

export default FooterMobile;

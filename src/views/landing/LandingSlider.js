/* -------------------------------------------------------
# Copyright (c) [2022] Nadege Lemperiere
# All rights reserved
# -------------------------------------------------------
# Landing page
# -------------------------------------------------------
# Nadège LEMPERIERE, @02 february 2022
# Latest revision: 02 february 2022
# -------------------------------------------------------*/

/* React includes */
import React from 'react';

/* Material ui includes */
import { Typography, Stack, Paper, Slide } from '@mui/material';
import { styled } from '@mui/system';

/* Website includes */
import { Image } from '../../components';

const Logo = styled(Paper)(({ height, margin }) => ({
    fontFamily: 'Roboto Condensed',
    height,
    top: '75vh',
    right: margin,
    color: '#ffffff',
    backgroundColor: 'rgb(35,168,212)',
    borderTopLeftRadius: '0',
    borderTopRightRadius: '0',
    borderBottomLeftRadius: '0',
    borderBottomRightRadius: '0',
    position: 'fixed',
    minWidth: `calc(320px - 2 * ${margin} )`,
    verticalAlign: 'middle',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    p: { fontSize: '48px' },
    '@media all and (max-device-width: 720px)': { p: { fontSize: '36px' } },
    '@media all and (max-device-width: 425px)': { p: { fontSize: '30px' } },
    '@media all and (max-device-width: 320px)': { p: { fontSize: '24px' } },
}));

function LandingSlider(props) {

    /* --------- Gather inputs --------- */
    const { height, margin } = props;

    /* -------- Defining sizes --------- */
    const heightLogoString = `calc( ${height} * 1.2)`;
    const underlineString = `calc( ${height} * 1)`;

    /* ----------- Define HTML --------- */
    return (
        <Slide direction="left" in={true} timeout={2000}>
            <Logo style={{ zIndex: '1' }} margin={margin}>
                <Stack direction="row" spacing={2} alignItems="center" height={heightLogoString} style={{ paddingLeft: '5px', paddingBottom: '5px', paddingTop: '5px', paddingRight: '0px' }}>
                    <Image reference="logoWhite" style={{ height, width: 'auto', textAlign: 'left', display: 'inline-block' }} />
                    <Typography style={{ paddingRight: margin, fontFamily: 'Roboto Condensed', borderWidth: '5px', borderBottomStyle: 'solid', height: underlineString, verticalAlign: 'middle' }}>
                        NADEGE LEMPERIERE
                    </Typography>
                </Stack>
            </Logo>
        </Slide>
    );

}

export default LandingSlider;

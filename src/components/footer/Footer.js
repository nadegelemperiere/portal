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

/* Material includes */
import { Paper } from '@mui/material';

/* Website includes */
import { useMenu } from '../../providers';

import FooterDesktop from './FooterDesktop';
import FooterMobile from './FooterMobile';

function Footer() {

    /* --------- Gather inputs --------- */
    const { isDesktop } = useMenu();
    //const componentName = 'Footer';

    /* ----------- Define HTML --------- */
    /* eslint-disable padded-blocks */
    return (
        <Paper square={true} style={{ position:'relative', backgroundColor: '#ffffff', padding:'15px', bottom:0 }}>
            {(isDesktop) && (<FooterDesktop />)}
            {(!isDesktop) && (<FooterMobile />)}
        </Paper>
    );
    /* eslint-enable padded-blocks */

}

export default Footer;

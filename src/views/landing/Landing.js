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
import React, { useEffect } from 'react';

/* Website includes */
import { useConfig } from '../../providers';
import { Image } from '../../components';
import logMessage from '../../utils/logging';

/* Local includes */
import LandingSlider from './LandingSlider';

function Landing() {

    /* --------- Gather inputs --------- */
    const { appConfig } = useConfig();
    const { landing, menu } = appConfig || {};
    const { logoHeight = '200px' } = landing || {};
    const { margin = '20px', maxWidth = '1300px' } = menu || {};

    /* -------- Defining sizes --------- */
    const marginString = `max( ${margin}, calc((100vw - ${maxWidth} )/2))`;
    const widthString = `min(calc(100vw - 2*${margin} ), ${maxWidth} )`;
    const heightString = `calc( 100vh - 2 * ${margin} )`;

    /* ------- Setting page name ------- */
    useEffect(() => {

        document.title = 'Landing';
        logMessage('Landing','initialization');

    }, []);

    /* ----------- Define HTML --------- */
    return (
        <div style={{ width: '100vw', height: '100vh', backgroundColor: '#000000' }}>
            <div
                style={{
                    width: widthString,
                    height: heightString,
                    display: 'flex',
                    marginTop: margin,
                    marginLeft: marginString,
                    marginRight: marginString,
                    marginBottom: margin,
                    flexDirection: 'row',
                    position: 'fixed',
                    top: '0px',
                    zIndex: '1',
                }}
            >
                <a href="/home">
                    <div style={{ width: widthString, height: heightString, overflow: 'hidden', textAlign: 'left', backgroundColor: '#ffffff' }}>
                        <Image reference="background" style={{ height: heightString, width: widthString, objectFit: 'cover', objectPosition: '10% 80%' }} />
                    </div>
                    <LandingSlider margin={marginString} height={logoHeight} />
                </a>
            </div>
        </div>
    );

}

export default Landing;

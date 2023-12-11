/* -------------------------------------------------------
# Copyright (c) [2022] Nadege Lemperiere
# All rights reserved
# -------------------------------------------------------
# Logging management utils
# -------------------------------------------------------
# Nadège LEMPERIERE, @02 february 2022
# Latest revision: 02 february 2022
# -------------------------------------------------------*/

const showComponents = ['CookiesUtils', 'CookiesProvider', 'Cookies', 'reportWebVitals', 'App', 'Layout'];
/*const showComponents = ['all'];*/

/* eslint-disable no-console */
const logMessage = (component, message, level = 'info') => {

    const df = new Date();
    if (
        showComponents.indexOf(component) > -1 ||
        showComponents.indexOf('all') > -1
    ) {

        const hours = df.getHours();
        const minutes = df.getMinutes();
        const seconds = df.getSeconds();
        const milliseconds = df.getMilliseconds();
        if (process.env.REACT_APP_SHALL_LOG === '1') {

            console.log(
                '%d:%d:%d.%f - %s - %s : %s',
                hours,
                minutes,
                seconds,
                milliseconds,
                level,
                component,
                message
            );

        }


    }

};
/* eslint-enable no-console */

export default logMessage;

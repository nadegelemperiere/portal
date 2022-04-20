/* -------------------------------------------------------
# TECHNOGIX
# -------------------------------------------------------
# Copyright (c) [2022] Technogix SARL
# All rights reserved
# -------------------------------------------------------
# Cookies provider functions
# -------------------------------------------------------
# Nadège LEMPERIERE, @02 february 2022
# Latest revision: 02 february 2022
# -------------------------------------------------------*/

/* Website includes */
import logMessage from '../../utils/logging';

const componentName = 'CookiesUtils';
const GA_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_ID;

window.dataLayer = window.dataLayer || [];
function gtag(){window.dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', GA_ID, { 'anonymize_ip': true, 'transport_type': 'beacon' });
/*gtag('get', GA_ID, 'client_id', logGA);
gtag('get', GA_ID, 'session_id', logGA);*/
gtag('consent','default', { 'analytics_storage': 'denied', 'ad_storage': 'denied'});

/*function logGA(data) { console.log(data) }*/

function activateCookies( shall_activate )
{

    if (shall_activate)
    {

        logMessage(componentName, 'Activating cookies');
        const elem = document.getElementById('GoogleAnalyticsCustomScript');
        if(elem == null)
        {

            gtag('consent', 'update', { 'analytics_storage': 'granted', 'ad_storage': 'denied'});
            var s = document.createElement('script');
            s.type = "text/javascript"
            s.async = "true";
            s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
            s.id = 'GoogleAnalyticsCustomScript';
            var x = document.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s, x);

        }
        gtag('consent', 'update', { 'analytics_storage': 'granted', 'ad_storage': 'denied'});
        window[`ga-disable-${GA_ID}`] = false

    }
    else
    {

        logMessage(componentName, 'Deactivating cookies');

        const elem = document.getElementById('GoogleAnalyticsCustomScript');
        if(elem != null) { elem.parentNode.removeChild(elem); }

        document.cookie.split(';').forEach(function(c)
        {

            const d = c.split('=')[0].trim();
            if (d.indexOf('_ga') >= 0)
            {

                document.cookie = `${c}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;

            }

        });
        window[`ga-disable-${GA_ID}`] = true
        gtag('consent', 'update', { 'analytics_storage': 'denied', 'ad_storage': 'denied'});

    }

}

export { gtag, activateCookies };

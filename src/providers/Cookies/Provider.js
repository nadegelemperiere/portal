/* -------------------------------------------------------
# Copyright (c) [2022] Nadege Lemperiere
# All rights reserved
# -------------------------------------------------------
# Cookies provider
# -------------------------------------------------------
# Nadège LEMPERIERE, @02 february 2022
# Latest revision: 02 february 2022
# -------------------------------------------------------*/

/* React includes */
import React, { useEffect, useState, useMemo } from 'react';

/* Website includes */
import logMessage from '../../utils/logging';

/* Local includes */
import CookiesContext from './Context';
import { activateCookies } from './Utils';

function Provider(props) {

    /* --------- Gather inputs --------- */
    const { children, persistKey = 'cookies' } = props;
    const componentName = 'CookiesProvider';

    const savedState = JSON.parse(localStorage.getItem(persistKey));
    const [cookiesFilters, dispatch] = useState({
        areActivated: false,
        hasChosen: false,
        ...savedState,
    });

    const memorizedValue = useMemo(() => ({
        toggleThis(newValue = null) {

            logMessage(componentName, `toggleThis() --- BEGIN`);
            /* eslint-disable padded-blocks, brace-style */
            const content =  (newValue !== null ? newValue : !cookiesFilters.areActivated)
            dispatch({ ...cookiesFilters, areActivated: content, hasChosen: true });
            /* eslint-enable padded-blocks, brace-style */
            logMessage(componentName, `toggleThis() --- END`);

        },
        /* eslint-enable padded-blocks, brace-style */
        areActivated: cookiesFilters.areActivated,
        hasChosen: cookiesFilters.hasChosen,
    }), [cookiesFilters]);


    /* Manage cookies activation */
    useEffect(() => {

        /* eslint-disable padded-blocks, brace-style */
        logMessage(componentName, 'useEffect[shallActivate] --- BEGIN');
        activateCookies(cookiesFilters.areActivated);
        logMessage(componentName, 'useEffect[shallActivate] --- END');
        /* eslint-enable padded-blocks, brace-style */

    }, [cookiesFilters.areActivated]);

    /* Manage cookies status update */
    useEffect(() => {

        /* eslint-disable padded-blocks, brace-style */
        logMessage(componentName, 'useEffect[cookiesFilters, persistKey] --- BEGIN');
        localStorage.setItem(persistKey, JSON.stringify(cookiesFilters));
        logMessage(componentName, 'useEffect[cookiesFilters, persistKey] --- END');
        /* eslint-enable padded-blocks, brace-style */

    }, [cookiesFilters, persistKey]);

    /* ----------- Define HTML --------- */
    return (
        <CookiesContext.Provider value={memorizedValue}>
            {children}
        </CookiesContext.Provider>
    );

}

export default Provider;

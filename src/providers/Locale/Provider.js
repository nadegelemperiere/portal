/* -------------------------------------------------------
# TECHNOGIX
# -------------------------------------------------------
# Copyright (c) [2022] Technogix SARL
# All rights reserved
# -------------------------------------------------------
# Locale provider
# -------------------------------------------------------
# Nadège LEMPERIERE, @02 february 2022
# Latest revision: 02 february 2022
# -------------------------------------------------------*/

/* React includes */
import React, { useState, useEffect, useMemo } from 'react';

/* Website includes */
import logMessage from '../../utils/logging';

/* Local includes */
import { Context } from './Context';

function Provider(props) {

    /* --------- Gather inputs --------- */
    const { children, defaultLocale = 'en', persistKey = 'locale' } = props;
    const persistLocale = localStorage.getItem(persistKey);
    const [locale, setLocale] = useState(persistLocale || defaultLocale);
    const componentName = 'LocaleProvider';

    /* ----- Manage locale change ------ */
    useEffect(() => {

        logMessage(componentName, 'useEffect[locale, persistKey] --- BEGIN');
        localStorage.setItem(persistKey, locale);
        logMessage(componentName, 'useEffect[locale, persistKey] --- END');

    }, [locale, persistKey]);

    const memorizedValue = useMemo(() => ({
        locale,
        setLocale,
    }), [locale, setLocale]);

    /* ----------- Define HTML --------- */
    return (
        <Context.Provider value={memorizedValue}>
            {children}
        </Context.Provider>
    );

}

export default Provider;

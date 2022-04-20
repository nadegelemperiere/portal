/* -------------------------------------------------------
# TECHNOGIX
# -------------------------------------------------------
# Copyright (c) [2022] Technogix SARL
# All rights reserved
# -------------------------------------------------------
# CSP styles hashes provider
# -------------------------------------------------------
# Nadège LEMPERIERE, @02 february 2022
# Latest revision: 02 february 2022
# -------------------------------------------------------*/

/* React includes */
import React, { useEffect, useState, useMemo } from 'react';

/* Website includes */
import logMessage from '../../utils/logging';

/* Local includes */
import HashesContext from './Context';

function Provider(props) {

    /* --------- Gather inputs --------- */
    const { children, persistKey = 'hashes' } = props;
    const componentName = 'HashesProvider';

    const savedState = JSON.parse(localStorage.getItem(persistKey));
    const [hashesState, dispatch] = useState({
        hashes: [],
        ...savedState,
    });

    const memorizedValue = useMemo(() => ({
        appendSha(sha) {

            logMessage(componentName, `appendSha() --- BEGIN`);
            const temp = Object.assign({}, hashesState);
            const list = temp.hashes;

            if ( list.indexOf(sha) < 0 ) { list.push(sha); }
            else { logMessage(componentName, `duplicate sha : ${sha}`); }
            dispatch({...hashesState, hashes:list});
            logMessage(componentName, `appendSha() --- END`);

        },
        getSha() {

            let result = "";
            /* eslint-disable padded-blocks */
            for (let i = 0; i < hashesState.hashes.length; i += 1)
            {
                result = `${result} '${hashesState.hashes[i]}'`
            }
            /* eslint-enable padded-blocks */
            return result;

        },
    }), [hashesState]);

    /* Manage csp settings */
    useEffect(() => {

        logMessage(componentName, 'useEffect[hashes, persistKey] --- BEGIN');
        localStorage.setItem(persistKey, JSON.stringify(hashesState));
        logMessage(componentName, 'useEffect[hashes, persistKey] --- END');

    }, [hashesState, persistKey]);

    useEffect(() => {

        const all_shas = memorizedValue.getSha();

        /* Look for existing csp and remove it */
        var csp = document.getElementById('technogix-csp');
        if ( csp !== null ) { csp.remove(); }

        /* Create new one */
        csp = document.createElement('meta');
        csp.id='technogix-csp';
        csp.httpEquiv='Content-Security-Policy';
        csp.content=`default-src 'none'; font-src 'self' fonts.googleapis.com fonts.gstatic.com; script-src 'self' www.google-analytics.com www.googletagmanager.com; connect-src 'self' www.google-analytics.com; img-src 'self' data: blob: images.credly.com; style-src 'self' fonts.googleapis.com; style-src-elem 'self' ${all_shas}; base-uri 'self';form-action 'self'; manifest-src 'self';`;
        var head = document.getElementsByTagName('head')[0];
        if ( process.env.REACT_APP_SHALL_ADD_CSP_HEADER === '1' ) { head.prepend(csp); }

    }, []); /* eslint-disable-line react-hooks/exhaustive-deps */

    /* ----------- Define HTML --------- */
    return (
        <HashesContext.Provider value={memorizedValue}>
            {children}
        </HashesContext.Provider>
    );

}

export default Provider;

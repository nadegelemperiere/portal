/* -------------------------------------------------------
# TECHNOGIX
# -------------------------------------------------------
# Copyright (c) [2022] Technogix SARL
# All rights reserved
# -------------------------------------------------------
# Layout container
# -------------------------------------------------------
# Nadège LEMPERIERE, @02 february 2022
# Latest revision: 02 february 2022
# -------------------------------------------------------*/

/* React includes */
import React, { Suspense, useEffect, useState } from 'react';
import { IntlProvider } from 'react-intl';
import { useRoutes } from 'react-router-dom';

/* Website includes */
import { OnlineProvider, CookiesProvider, LocaleProvider, TechnologiesProvider, useMenu, useLocale, useConfig, useHashes } from '../../providers';
import { Mobile, Desktop, Cookies } from '../../components';
import { getLocaleMessages } from '../../utils/locale';
import logMessage from '../../utils/logging';
import Loading from '../../views/loading/Loading';

/* Local includes */
import LayoutContainer from './LayoutContainer';
import appendAllSha  from './LayoutHashes';

function LayoutMode() {

    /* --------- Gather inputs --------- */
    const { toggleThis, isDesktop } = useMenu();
    const componentName = 'LayoutMode';

    /* -- Manage switching from mobile - */
    useEffect(() => {

        logMessage(componentName, 'useEffect[isDesktop] --- BEGIN');
        if (isDesktop) { toggleThis('isMenuOpen', false); }
        logMessage(componentName, 'useEffect[isDesktop] --- END');

    }, [isDesktop]); /* eslint-disable-line react-hooks/exhaustive-deps */


    /* ----------- Define HTML --------- */
    return (
        <Suspense fallback={<Loading />}>
            {(isDesktop) && (<Desktop />)}
            {(!isDesktop) && (<Mobile />)}
        </Suspense>
    );

}

function LayoutContent(props) {

    /* --------- Gather inputs --------- */
    const { appConfig = {} } = props;
    const [messages, setMessages] = useState([]);
    const { routes = [], locale: confLocale } = appConfig || {};
    const { locales, onError } = confLocale || {};
    const { locale = {} } = useLocale();
    const componentName = 'LayoutContent';

    /* ---- Manage language changes ---- */
    useEffect(() => {

        logMessage(componentName, 'useEffect[locale, locales] --- BEGIN');
        const loadMessages = async () => {

            const localMessages = await getLocaleMessages(locale, locales);
            setMessages(localMessages);

        };
        loadMessages();
        logMessage(componentName, 'useEffect[locale, locales] --- END');

    }, [locale, locales]);


    /* ----------- Define HTML --------- */
    return (
        <IntlProvider
            locale={locale}
            key={locale}
            messages={messages}
            onError={onError}
        >
            <LayoutContainer>
                <LayoutMode fallback={<Loading />} />
                <Suspense fallback={<Loading />}>
                    {useRoutes([...routes])}
                </Suspense>
                <Cookies/>
            </LayoutContainer>
        </IntlProvider>
    );

}

function Layout() {

    /* --------- Gather inputs --------- */
    const { appConfig } = useConfig();
    const { locale } = appConfig || {};
    const { defaultLocale, persistKey } = locale || {};
    const { appendSha } = useHashes();
    const componentName = 'Layout';

    /* -- Manage body settings - */
    useEffect(() => {

        logMessage(componentName, 'useEffect --- BEGIN');
        appendAllSha(appendSha);
        logMessage(componentName, 'useEffect --- END');

    }, []); /* eslint-disable-line react-hooks/exhaustive-deps */


    /* ----------- Define HTML --------- */
    return (
        <TechnologiesProvider appConfig={appConfig}>
            <LocaleProvider defaultLocale={defaultLocale} persistKey={persistKey}>
                <OnlineProvider>
                    <CookiesProvider>
                        <LayoutContent appConfig={appConfig} />
                    </CookiesProvider>
                </OnlineProvider>
            </LocaleProvider>
        </TechnologiesProvider>
    );

}

export default Layout;

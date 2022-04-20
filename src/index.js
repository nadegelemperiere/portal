/* -------------------------------------------------------
# TECHNOGIX
# -------------------------------------------------------
# Copyright (c) [2022] Technogix SARL
# All rights reserved
# -------------------------------------------------------
# Rendering portal
# -------------------------------------------------------
# Nadège LEMPERIERE, @01 february 2022
# Latest revision: 01 february 2022
# -------------------------------------------------------*/

/* React includes */
import React from 'react';
import ReactDOM from 'react-dom';

/* Emotion includes */
import createCache from '@emotion/cache'; // eslint-disable-line import/no-extraneous-dependencies
import { CacheProvider } from '@emotion/react'; // eslint-disable-line import/no-extraneous-dependencies

/* Local includes */
import App from './App';
import reportWebVitals, { addToQueue } from './reportWebVitals';

const nonce = Math.random().toString(16).substr(2, 21);
const nonceCache = createCache({
    key: 'technogix',
    nonce: nonce,
    prepend: true,
});

window.__webpack_nonce__ = nonce;
/* global __webpack_nonce__ */ // eslint-disable-line no-unused-vars
__webpack_nonce__ = window.__webpack_nonce__;// eslint-disable-line no-native-reassign, no-global-assign

/* Rendering function */
ReactDOM.render(
    <React.StrictMode>
        <CacheProvider value={nonceCache}>
            <App />
        </CacheProvider>
    </React.StrictMode>,
    document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(addToQueue);

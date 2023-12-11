/* -------------------------------------------------------
# Copyright (c) [2022] Nadege Lemperiere
# All rights reserved
# -------------------------------------------------------
# Web vitals reporting function
# -------------------------------------------------------
# Nadège LEMPERIERE, @01 february 2022
# Latest revision: 01 february 2022
# -------------------------------------------------------*/

/* Other includes */
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

/* Website includes */
import logMessage from './utils/logging';
import { gtag } from './providers/Cookies/Utils';

const componentName = 'reportWebVitals';

const reportWebVitals = (onPerfEntry) => {

    logMessage(componentName, 'reportWebVitals --- BEGIN');
    if (onPerfEntry && onPerfEntry instanceof Function) {

        getCLS(onPerfEntry);
        getFID(onPerfEntry);
        getFCP(onPerfEntry);
        getLCP(onPerfEntry);
        getTTFB(onPerfEntry);

    }
    logMessage(componentName, 'reportWebVitals --- END');

};

const queue = new Set();
export function addToQueue(metric) {

    logMessage(componentName, 'addToQueue --- BEGIN');
    queue.add(metric);
    logMessage(componentName, 'addToQueue --- END');

}

function flushQueue() {

    logMessage(componentName, 'flushQueue --- BEGIN');
    if (queue.size > 0) {

        queue.forEach (function(item) {

            logMessage(componentName, JSON.stringify(item));
            // Assumes the global `gtag()` function exists, see:
            // https://developers.google.com/analytics/devguides/collection/gtagjs
            gtag('event', item.name, {
                value: item.delta, // Use `delta` so the value can be summed.
                metric_id: item.id, // Needed to aggregate events.
                metric_value: item.value, // Optional.
                metric_delta: item.delta, // Optional.
            });

        })
        queue.clear();

    }
    logMessage(componentName, 'flushQueue --- END');

}


// Report all available metrics whenever the page is backgrounded or unloaded.
window.addEventListener('visibilitychange', () => {

    if (document.visibilityState === 'hidden') { flushQueue(); }

});

// NOTE: Safari does not reliably fire the `visibilitychange` event when the
// page is being unloaded. If Safari support is needed, you should also flush
// the queue in the `pagehide` event.
window.addEventListener('pagehide', flushQueue);


export default reportWebVitals;


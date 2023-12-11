/* -------------------------------------------------------
# Copyright (c) [2022] Nadege Lemperiere
# All rights reserved
# -------------------------------------------------------
# Language configuration loading
# -------------------------------------------------------
# Nadège LEMPERIERE, @03 february 2021
# Latest revision: 03 february 2021
# -------------------------------------------------------*/

/* React includes */
import { defineMessages } from 'react-intl';

/* Website includes */
import parseLanguages from '../utils/locale';
import logMessage from '../utils/logging';

/* Local includes */
import English from './data/en.json';
import French from './data/fr.json';

const Locale = {
    locales: [
        {
            locale: 'en',
            messages: defineMessages(English),
        },
        {
            locale: 'fr',
            messages: defineMessages(French),
        }
    ],
    defaultLocale: parseLanguages(['en', 'fr'], 'en'),
    onError: (e) => { logMessage(e, 'warning'); },
};

export default Locale;

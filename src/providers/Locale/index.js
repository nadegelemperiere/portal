/* -------------------------------------------------------
# Copyright (c) [2022] Nadege Lemperiere
# All rights reserved
# -------------------------------------------------------
# Locale provider
# -------------------------------------------------------
# Nadège LEMPERIERE, @02 february 2022
# Latest revision: 02 february 2022
# -------------------------------------------------------*/

/* React includes */
import { useContext } from 'react';

/* Local includes */
import LocaleContext from './Context';
import Provider from './Provider';
import withLocale from './with';

/* eslint-disable padded-blocks */
function useLocale() {
    return useContext(LocaleContext);
}
/* eslint-enable padded-blocks */

export { withLocale, useLocale };
export default Provider;

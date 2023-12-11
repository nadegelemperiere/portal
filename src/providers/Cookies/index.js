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
import { useContext } from 'react';

/* Local includes */
import CookiesContext from './Context';
import Provider from './Provider';
import withCookies from './with';

/* eslint-disable padded-blocks */
function useCookies() {
    return useContext(CookiesContext);
}
/* eslint-enable padded-blocks */

export { withCookies, useCookies };
export default Provider;

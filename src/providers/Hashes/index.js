/* -------------------------------------------------------
# Copyright (c) [2022] Nadege Lemperiere
# All rights reserved
# -------------------------------------------------------
# CSP styles hashes provider
# -------------------------------------------------------
# Nadège LEMPERIERE, @02 february 2022
# Latest revision: 02 february 2022
# -------------------------------------------------------*/

/* React includes */
import { useContext } from 'react';

/* Local includes */
import HashesContext from './Context';
import Provider from './Provider';
import withHashes from './with';

/* eslint-disable padded-blocks */
function useHashes() {
    return useContext(HashesContext);
}
/* eslint-enable padded-blocks */

export { withHashes, useHashes };
export default Provider;

/* -------------------------------------------------------
# TECHNOGIX
# -------------------------------------------------------
# Copyright (c) [2022] Technogix SARL
# All rights reserved
# -------------------------------------------------------
# Technologies provider
# -------------------------------------------------------
# Nadège LEMPERIERE, @02 february 2022
# Latest revision: 02 february 2022
# -------------------------------------------------------*/

/* React includes */
import { useContext } from 'react';

/* Local includes */
import TechnologiesContext from './Context';
import Provider from './Provider';
import withTechnologies from './with';

/* eslint-disable padded-blocks */
function useTechnologies() {
    return useContext(TechnologiesContext);
}
/* eslint-enable padded-blocks */

export { withTechnologies, useTechnologies };
export default Provider;

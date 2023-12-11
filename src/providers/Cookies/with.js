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
import React from 'react';

/* Local includes */
import CookiesContext from './Context';

function withContainer(Component) {

    function ChildComponent(props) {

        /* eslint-disable react/jsx-props-no-spreading */
        return (
            <CookiesContext.Consumer>
                {(contextProps) => <Component {...contextProps} {...props} />}
            </CookiesContext.Consumer>
        );
        /* eslint-enable react/jsx-props-no-spreading */

    }
    return ChildComponent;

}

export default withContainer;

/* -------------------------------------------------------
# Copyright (c) [2022] Nadege Lemperiere
# All rights reserved
# -------------------------------------------------------
# Technologies provider
# -------------------------------------------------------
# Nadège LEMPERIERE, @02 february 2022
# Latest revision: 02 february 2022
# -------------------------------------------------------*/

/* React includes */
import React from 'react';

/* Local includes */
import TechnologiesContext from './Context';

function withContainer(Component) {

    function ChildComponent(props) {

        /* eslint-disable react/jsx-props-no-spreading */
        return (
            <TechnologiesContext.Consumer>
                {(contextProps) => <Component {...contextProps} {...props} />}
            </TechnologiesContext.Consumer>
        );
        /* eslint-enable react/jsx-props-no-spreading */

    }
    return ChildComponent;

}

export default withContainer;

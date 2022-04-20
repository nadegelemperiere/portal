/* -------------------------------------------------------
# TECHNOGIX
# -------------------------------------------------------
# Copyright (c) [2022] Technogix SARL
# All rights reserved
# -------------------------------------------------------
# Theme provider
# -------------------------------------------------------
# Nadège LEMPERIERE, @02 february 2022
# Latest revision: 02 february 2022
# -------------------------------------------------------*/

/* React includes */
import React from 'react';

/* Local includes */
import ThemeContext from './Context';

function withContainer(Component) {

    function ChildComponent(props) {

        /* eslint-disable react/jsx-props-no-spreading */
        return (
            <ThemeContext.Consumer>
                {(contextProps) => (<Component {...contextProps} {...props} />) }
            </ThemeContext.Consumer>
        );
        /* eslint-enable react/jsx-props-no-spreading */

    }
    return ChildComponent;

}

export default withContainer;

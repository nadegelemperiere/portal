/* -------------------------------------------------------
# Copyright (c) [2022] Nadege Lemperiere
# All rights reserved
# -------------------------------------------------------
# Locale provider mock
# -------------------------------------------------------
# Nadège LEMPERIERE, @02 february 2022
# Latest revision: 02 february 2022
# -------------------------------------------------------*/

/* React includes */
import React from 'react';

const mockContextLocale = React.createContext(null);

let mockedValues = {}

function mockWithLocale(Component) {

    function ChildComponent(props) {

        /* eslint-disable react/jsx-props-no-spreading */
        return (
            <mockContextLocale.Consumer> {(contextProps) => <Component {...contextProps} {...props} /> }</mockContextLocale.Consumer>
        );
        /* eslint-enable react/jsx-props-no-spreading */

    }
    return ChildComponent;

}

function MockProvider(props) {

    const { children } = props;

    function mockSetLocale(locale) {}

    /* ----- Define provider values ---- */
    mockedValues = {
        locale: 'en',
        setLocale: mockSetLocale,
        ...props,
    };

    /* ----------- Define HTML --------- */
    return (
        <mockContextLocale.Provider value={mockedValues}>
            {children}
        </mockContextLocale.Provider>
    );

}

function mockUseLocale() {

    return mockedValues;

};

export { mockWithLocale, mockUseLocale, MockProvider };

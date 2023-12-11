/* -------------------------------------------------------
# Copyright (c) [2022] Nadege Lemperiere
# All rights reserved
# -------------------------------------------------------
# Login page
# -------------------------------------------------------
# Nadège LEMPERIERE, @02 february 2022
# Latest revision: 02 february 2022
# -------------------------------------------------------*/

/* React includes */
import React from 'react';
import { useIntl } from 'react-intl';

/* Website includes */
import { Page } from '../../containers';

function Login() {

    /* --------- Gather inputs --------- */
    const intl = useIntl();

    /* ----------- Define HTML --------- */
    return (
        <Page pageTitle={intl.formatMessage({ id: 'login', defaultMessage: 'Login' })}>
            <div>
                <div>
                    <p>
                        { intl.formatMessage({ id: 'login', defaultMessage: 'Login' }) }
                    </p>
                </div>
            </div>
        </Page>
    );

}

export default Login;

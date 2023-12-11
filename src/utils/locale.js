/* -------------------------------------------------------
# Copyright (c) [2022] Nadege Lemperiere
# All rights reserved
# -------------------------------------------------------
# Language management utils
# -------------------------------------------------------
# Nadège LEMPERIERE, @02 february 2022
# Latest revision: 02 february 2022
# -------------------------------------------------------*/

const getUsersPreferredLanguages = () => {

    /* eslint-disable padded-blocks, brace-style */
    let result;
    if (navigator.languages !== undefined) { result = navigator.languages; }
    else if (navigator.language !== undefined) { result = [navigator.language]; }
    /* eslint-enable padded-blocks, brace-style */

    return result;

};

const parseLanguages = (acceptedLangs, defaultLang = false) => {

    const userPref = getUsersPreferredLanguages();

    /* eslint-disable padded-blocks */
    let result = userPref ? userPref.find((lang) => acceptedLangs.includes(lang)) : undefined;
    if (result === undefined && defaultLang !== false) { result = defaultLang; }
    /* eslint-enable padded-blocks */

    return result;

};

const getLocaleMessages = async (l, ls) => {

    /* eslint-disable padded-blocks */
    let result = {};
    if (ls) {
        for (let i = 0; i < ls.length; i += 1) {
            if (ls[i].locale === l) { result = ls[i].messages; }
        }
    }
    /* eslint-enable padded-blocks */

    return result;

};

export { getLocaleMessages };
export default parseLanguages;

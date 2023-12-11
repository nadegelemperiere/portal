/* -------------------------------------------------------
# Copyright (c) [2022] Nadege Lemperiere
# All rights reserved
# -------------------------------------------------------
# Providers exports
# -------------------------------------------------------
# Nadège LEMPERIERE, @02 february 2022
# Latest revision: 02 february 2022
# -------------------------------------------------------*/

export { withConfig, default as ConfigProvider, useConfig } from './Config';
export { withLocale, default as LocaleProvider, useLocale } from './Locale';
export { withMenu, default as MenuProvider, useMenu } from './Menu';
export { withOnline, default as OnlineProvider, useOnline } from './Online';
export { withTheme, default as AppThemeProvider, useTheme as useAppTheme } from './Theme';
export { withTechnologies, default as TechnologiesProvider, useTechnologies } from './Technologies';
export { withCookies, default as CookiesProvider, useCookies } from './Cookies';
export { withHashes, default as HashesProvider, useHashes } from './Hashes';

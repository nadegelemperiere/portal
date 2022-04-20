/* -------------------------------------------------------
# TECHNOGIX
# -------------------------------------------------------
# Copyright (c) [2022] Technogix SARL
# All rights reserved
# -------------------------------------------------------
# Menu configuration loading
# -------------------------------------------------------
# Nadège LEMPERIERE, @03 february 2021
# Latest revision: 03 february 2021
# -------------------------------------------------------*/

/* Material UI includes */
import { Home as HomeIcon, Mouse as MouseIcon, Group as GroupIcon, Work as WorkIcon, Login as LoginIcon, AccountCircle as AccountCircleIcon } from '@mui/icons-material';

/* Local includes */
import MenuConfig from './data/menu.json';

const Menu = MenuConfig;
const initialItemSelected = {};

/* eslint-disable brace-style, padded-blocks */
const array = Object.entries(MenuConfig.content);
for (let i = 0; i < array.length; i += 1) {
    if (array[i][1].selected) { initialItemSelected[array[i][1].id] = true; }
    else { initialItemSelected[array[i][1].id] = false; }
}
/* eslint-enable brace-style, padded-blocks */

Menu.icons = {
    home: HomeIcon,
    skills: AccountCircleIcon,
    team: GroupIcon,
    environment: MouseIcon,
    login: LoginIcon,
    work: WorkIcon,
};
Menu.initialMenuOpen = false;
Menu.initialItemSelected = initialItemSelected;

export default Menu;

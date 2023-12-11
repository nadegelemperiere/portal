/* -------------------------------------------------------
# Copyright (c) [2022] Nadege Lemperiere
# All rights reserved
# -------------------------------------------------------
# Skills grid item styling
# -------------------------------------------------------
# Nadège LEMPERIERE, @02 february 2022
# Latest revision: 02 february 2022
# -------------------------------------------------------*/

/* Material UI includes */
import { Grid } from '@mui/material';
import { styled } from '@mui/system';

const SkillsGridItem = styled(Grid)(() => ({
    position: 'relative',
    width: '100%',
    paddingLeft: '10px',
    paddingRight: '0px',
}));

export default SkillsGridItem;

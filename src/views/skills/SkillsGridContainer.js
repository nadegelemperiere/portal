/* -------------------------------------------------------
# Copyright (c) [2022] Nadege Lemperiere
# All rights reserved
# -------------------------------------------------------
# Skills grid container styling
# -------------------------------------------------------
# Nadège LEMPERIERE, @02 february 2022
# Latest revision: 02 february 2022
# -------------------------------------------------------*/

/* Material UI includes */
import { Grid } from '@mui/material';
import { styled } from '@mui/system';

const SkillsGridContainer = styled(Grid)(() => ({
    marginTop: '0px',
    position: 'relative',
    width: '100%',
    left: '10px',
    paddingLeft: '10px',
    paddingRight: '10px',
}));

export default SkillsGridContainer;

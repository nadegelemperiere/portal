/* -------------------------------------------------------
# Copyright (c) [2022] Nadege Lemperiere
# All rights reserved
# -------------------------------------------------------
# Skills styled containers
# -------------------------------------------------------
# Nadège LEMPERIERE, @02 february 2021
# Latest revision: 02 february 2021
# -------------------------------------------------------*/

/* Material UI includes */
import { Container } from '@mui/material';
import { styled } from '@mui/system';

const SkillsMediaContainer = styled(Container)(({ vertical, paddinglr = '5px', paddingtb = '5px' }) => ({
    '@media': {
        paddingLeft: paddinglr,
        paddingRight: paddinglr,
        paddingTop: paddingtb,
        paddingBottom: paddingtb,
    },
    paddingLeft: paddinglr,
    paddingRight: paddinglr,
    paddingTop: paddingtb,
    paddingBottom: paddingtb,
    marginRight: vertical ? paddinglr : '0px',
    marginLeft: vertical ? paddinglr : '0px',
}));

export { SkillsMediaContainer };
export default SkillsMediaContainer;

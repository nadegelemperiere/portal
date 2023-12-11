/* -------------------------------------------------------
# Copyright (c) [2022] Nadege Lemperiere
# All rights reserved
# -------------------------------------------------------
# Home page
# -------------------------------------------------------
# Nadège LEMPERIERE, @02 february 2021
# Latest revision: 02 february 2021
# -------------------------------------------------------*/

/* React includes */
import React from 'react';
import { useIntl } from 'react-intl';

/* Material UI includes */
import { Stack, Typography, Avatar, Link } from '@mui/material';
import { Circle as CircleIcon } from '@mui/icons-material';

/* Website includes */
import { useTechnologies } from '../../providers';

/* Local includes */
import { HomeGridItem } from './HomeContainers';

function HomeCertifications() {

    /* --------- Gather inputs --------- */
    const intl = useIntl();
    const { technologyCertified } = useTechnologies();
    console.log(technologyCertified)
    // const componentName = 'HomeCertifications';

    /* ----------- Define HTML --------- */
    return (
        <HomeGridItem item xs={12} sm={6} md={6} style={{ bottom: '0px', position: 'relative' }}>
            <Stack direction="column" style={{ marginBottom: '20px', paddingLeft: '0px' }}>
                <Stack direction="row" style={{ marginBottom: '20px', paddingLeft: '0px' }}>
                    <Avatar alt="Picture" style={{ backgroundColor: '#ffffff', marginRight: '0px', maxWidth: '0px', width: '0px', height: '40px' }}>
                        <CircleIcon color="disabled" />
                    </Avatar>
                    <Typography variant="h2" style={{ marginTop: '0px', textAlign: 'left' }}>
                        {intl.formatMessage({ id: 'home_about_me_certifications', defaultMessage: 'Certifications' })}
                    </Typography>
                </Stack>
                <Stack direction="row" alignItems="center">
                    {technologyCertified.map((item) => {

                        return(
                            <Link key={item.name} href={item.certification.url} target="_blank" style={{ paddingRight: '20px' }}>
                                <Avatar src={item.certification.image} alt={item.name} style={{ backgroundColor: '#ffffff', width: '80px', height: '80px', borderRadius: '0px' }} />
                            </Link>
                        );

                    })}
                </Stack>
            </Stack>
        </HomeGridItem>
    );

}

export default HomeCertifications;

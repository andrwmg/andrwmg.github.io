import { Grid, Typography } from "@mui/material";
import React from "react";
import './PortfolioCard.css'

export default function InfoDialogCard({ heading, image, body, background, color, handleClose }) {

    return (
        <Grid container item direction={{xs: 'column', md: 'row'}} xs={10} minWidth={{xs: '95%', md: '63%'}} py={{xs: 2, md: 0}} borderRadius={2} overflow='hidden' bgcolor={background} wrap='nowrap' position='relative'>
            <Grid container item direction='column' justifyContent={{xs: 'center', md: 'flex-start'}} position='relative' alignItems='center' px={{xs: 0, md: 2}} maxHeight={{xs: '50%', md: '100%'}} xs={12} md={6} my={{xs: '12px', md: '7.5%'}}>
                <Grid item container position='absolute' top={0} left={0} right={0} bottom={0} zIndex={10} />
                <img src={image} alt="" style={{ objectFit: 'contain', width: '100%', maxHeight: '100%', zIndex: 1 }} />
            </Grid>
            <Grid item container direction='column' xs={12} md={6} zIndex={1} pl={{xs: '5%', md: '10px'}} pr='5%' pb={1} rowGap={2} color={color} overflow='scroll' wrap='nowrap' my={{xs: '12px', md: '7.5%'}}>
                <Typography fontSize='24px' color={color}>
                    {heading}
                </Typography>
                {body.map(t => (
                    <Typography key={t} fontSize='16px'>
                        {t}
                    </Typography>
                ))}
            </Grid> 
        </Grid>
    )
}
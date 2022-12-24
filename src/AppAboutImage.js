import { Grid } from "@mui/material";
import React from "react";

export default function AppAboutImage ({imageUrl, side}) {
    return(
        <Grid item container justifyContent='center' alignItems='center' height='calc(100vh - 56px)' overflow='hidden'>
        <img src={imageUrl} alt='' height='100%' width='100%' style={{objectFit:'cover', translate: side}} />
        </Grid>
    )
}
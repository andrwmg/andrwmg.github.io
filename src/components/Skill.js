import { Grid, Typography } from "@mui/material";
import React from "react";

export default function Skill({ skill, icon, size }) {
  return (
    <>
      <Grid container item direction='column' xs={12} maxWidth={size} maxHeight={size} borderRadius='10%' alignItems='center'>
        <img src={icon} alt='' style={{padding: 4, objectFit: 'contain', maxHeight: size, width: size, filter: 'grayscale(1)' }} />
      </Grid>
      <Grid item container direction='column' xs={12} alignItems='center'>
      <Typography variant="p">{skill}</Typography>
      </Grid>
      </>
  );
}

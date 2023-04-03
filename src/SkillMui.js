import { Chip, Grid, Typography } from "@mui/material";
import React from "react";

export default function Skill({ skill, icon, size }) {
  return (
    <Grid container item direction='column' rowGap={1} alignItems='center' maxWidth='60px'>
      <Grid container item maxWidth={size} maxHeight={size} borderRadius='10%'>
        <img src={icon} style={{padding: 4, objectFit: 'contain', maxHeight: '100%', width: '100%', filter: 'grayscale(1)' }} />
      </Grid>
      <Typography variant="p">{skill}</Typography>
    </Grid>
  );
}

import { Chip, Grid } from "@mui/material";
import React from "react";

export default function Skill({ skill, icon }) {
  return (
    <Grid container item maxWidth={{ xs: "90px" }}>
      <Chip
        label={skill}
        variant="outlined"
        sx={{ minWidth: "100%" }}
      ></Chip>
    </Grid>
  );
}

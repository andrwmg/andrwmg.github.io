import { Grid, Link, Typography } from "@mui/material";
import React from "react";

export default function About() {
  return (
    <Grid container item justifyContent='center'>
      <Grid container item direction='column' xs={11} md={7} gap={2} textAlign='center'>
        <Typography variant="body1" color='text'>
          I’m a self-taught Software Engineer who reignited my passion for coding after working for 8+ years as a mechanical engineer. One year ago, I dove headfirst into learning web development. I completed a 65+ hour full stack bootcamp, a 45+ hour React bootcamp, and a Harvard University computer science course. I’ve spent 500+ hours working on a variety of projects, from an online marketplace to a role playing game. I enjoy learning new skills and honing them through real-world applications and am excited to hit the ground running in my new career.
        </Typography>
        <Typography variant="body1">
          If you'd like to learn more about my background, <Link color='primary' fontWeight={700} sx={{ textDecoration: 'none' }} href="https://drive.google.com/uc?export=download&id=1MX4ZWU4RNRpj3mL2C9uz_dYX0p7O8GvX" >check out my resume!</Link>
        </Typography>
      </Grid>
    </Grid>
  );
}

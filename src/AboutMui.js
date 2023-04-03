import { GitHub, LinkedIn, MailOutline, PhoneOutlined } from "@mui/icons-material";
import { Grid, IconButton, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { blue } from "material-ui-colors";
import React from "react";

const items = [
  {text: 'andrwmg@gmail.com', icon: <MailOutline />, link: 'mailto: andrwmg@gmail.com'},
  {text: '610-888-4468', icon: <PhoneOutlined />, link: 'tel:6108884468'},
  // {text: 'andrewmichaelgay.com', icon: <WebOutlined />, link: 'https://www.andrewmichaelgay.com'},
  {text: 'linkedin.com/in/andrwmg', icon: <LinkedIn />, link: 'https://www.linkedin.com/in/andrwmg'},
  {text: 'github.com/andrwmg', icon: <GitHub />, link: 'https://github.com/andrwmg'}]

export default function About() {
  return (
    <>
      {/* <Typography fontSize="1.75rem" fontWeight={600} color={blue[600]}>
        About
      </Typography> */}
      <Typography component='h4' fontSize="2.75rem" fontWeight={700} noWrap color='primary'>
        Andrew Gay
      </Typography>
      <Typography fontSize="1.4rem" mb={1}>Software Engineer</Typography>
      {/* <Grid container item direction='row' columnGap={3}>
        {items.map(i => (
          <IconButton href={i.link} color='primary'>
            {i.icon}
          </IconButton>

        ))}
      </Grid> */}
      {/* <Grid container item overflow='hidden' height='300px' width='100%' sx={{borderRadius: "30px"}}>
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/hR86DbukoIE?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen autoplay></iframe>
      </Grid> */}
      <Stack spacing={2}>
        <Typography variant="body1">
          I’m a Software Engineer with 8+ years of product development
          experience as a Senior Mechanical Engineer. I've completed a 65+ hour
          web development bootcamp, which covered HTML5, CSS, JavaScript,
          Node.js, MongoDB, and Express, and a 45+ hour ReactJS bootcamp that
          included ReactJS, MUI, NextJS, and Express. Since then, I've spent
          200+ hours working on my own projects.
        </Typography>
        <Typography variant="body1">
          I enjoy learning new skills and honing them through real-world
          applications. I’m excited to apply my mechanical engineering and
          product development experience to my career as a Software Engineer.
        </Typography>
        <Typography variant="body1">
          If you'd like to learn more about my background, <a href="https://drive.google.com/uc?export=download&id=1s38y5Lz6UtuFUUSC5hcSTVJXa4WKmwn-" >check out my resume!</a>
        </Typography>
      </Stack>
    </>
  );
}

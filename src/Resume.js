import React, { useEffect, useState } from "react";
import cover from "./canyon-min.jpg";
import Skills from "./Skills";
import Experience from "./ExperienceMui";
import Education from "./EducationMui";
import About from "./AboutMui";
import Contact from "./ContactMui";
import { Divider, Grid, IconButton, Link, Typography } from "@mui/material";
import Footer from "./Footer";
// import PortfolioCard from './PortfolioCard';
// import PortfolioCard2 from './PortfolioCard copy';
import { blue } from "material-ui-colors";
// import products from './MechanicalSeeds';
import websites from "./SoftwareSeeds";
// import PortfolioCard3 from './PortfolioCard copy 2';
// import CardContainer from './CardContainer';
import InfoDialog from "./InfoDialog";
import SoftwareCard from "./SoftwareCard3";
import { GitHub, LinkedIn, Mail, MailOutline, Phone, PhoneOutlined } from "@mui/icons-material";
import { Stack } from "@mui/system";

const items = [
    { text: 'andrwmg@gmail.com', icon: <Mail />, link: 'mailto: andrwmg@gmail.com' },
    { text: '610-888-4468', icon: <Phone />, link: 'tel:6108884468' },
    // {text: 'andrewmichaelgay.com', icon: <WebOutlined />, link: 'https://www.andrewmichaelgay.com'},
    { text: 'linkedin.com/in/andrwmg', icon: <LinkedIn />, link: 'https://www.linkedin.com/in/andrwmg' },
    { text: 'github.com/andrwmg', icon: <GitHub />, link: 'https://github.com/andrwmg' }]

export default function Resume() {
    const [open, setOpen] = useState(false);
    const [details, setDetails] = useState(null);
    const [fade, setFade] = useState(false);

    const handleClickOpen = (details) => {
        setDetails(details);
        setOpen(true);
    };

    const handleClose = (evt) => {
        evt.preventDefault();
        setDetails(null);
        setOpen(false);
    };

    useEffect(() => {
        setFade(true)
    }, [])

    return (
        <Grid container direction="column" rowGap={8} sx={{ opacity: fade ? 1 : 0, transition: '1s' }}>
            <Grid
                container
                item
                direction="row"
                alignItems="flex-end"
                justifyContent="center"
                minWidth="100vw"
                height='600px'
                rowGap={4}
                position='relative'
                pb={4}
            >
                <InfoDialog open={open} handleClose={handleClose} details={details} />
                <Grid
                container
                item
                position='absolute'
                left={0}
                right={0}
                top={0}
                bottom={0}
                zIndex={1}
                sx={{backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0,0) 50%, rgba(0, 0, 0,.9))"}}
            />
                <Grid
                    container
                    item
                    position='absolute'
                    left={0}
                    right={0}
                    top={0}
                    bottom={0}
                    zIndex={0}
                >
                    <img
                        src={cover}
                        style={{
                            width: "100%",
                            maxHeight: '600px',
                            objectFit: "cover",
                        }}
                        alt=""
                    />
                </Grid>

                <Grid
                    container
                    item
                    direction="column"
                    xs={12}
                    sm={8}
                    lg={4}
                    minHeight='100%'
                    textAlign='center'
                    alignItems="center"
                    justifyContent='flex-end'
                    zIndex={1}
                    mb={4}
                >
                    <Typography variant='h1' fontWeight={700} noWrap color='white' fontFamily='Poppins'>
                        Andrew Gay
                    </Typography>
                    <Typography variant='h3' mb={1} color='white'>Software Engineer</Typography>
                    <Stack direction='row' gap={1}>
                        {items.map(i => (
                            <IconButton href={i.link} sx={{ color: 'white' }}>
                                {i.icon}
                            </IconButton>

                        ))}
                    </Stack>
                </Grid>
            </Grid>

            <Grid container item justifyContent='center'>
                <Grid container item direction='column' xs={11} md={7} gap={2} textAlign='center'>
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
                            If you'd like to learn more about my background, <Link color="primary" href="https://drive.google.com/uc?export=download&id=1s38y5Lz6UtuFUUSC5hcSTVJXa4WKmwn-" sx={{ textDecoration: 'none' }} >check out my resume!</Link>
                        </Typography>
                </Grid>
            </Grid>

            <Grid
                item
                container
                direction="column"
                px={{ xs: 2, sm: 2, md: 4, xl: 5 }}
                rowGap={4}
                alignItems='center'
            >
                <Typography
                    variant="h2"
                >
                    Projects
                </Typography>
                <Grid item container direction="row" gap={6} justifyContent='center'>
                    {websites.map(
                        (w, index) =>
                            index < 2 && (
                                <SoftwareCard
                                    key={w.title}
                                    dialogState={open}
                                    {...w}
                                    handleClickOpen={handleClickOpen}
                                />
                            )
                    )}
                </Grid>
            </Grid>

            <Grid
                container
                item
                direction="row"
                justifyContent={{
                    xs: "center"
                }}
                rowGap={4}
                bgcolor="white"
                width='100%'
                maxWidth="100vw"
            >
                <Grid
                    container
                    item
                    direction="column"
                    xs={12}
                    md={8}
                    rowGap={4}
                    px={{ xs: 2, sm: 2, md: 4, xl: 5 }}
                >

                    <Skills />
                </Grid>
            </Grid>
            <Footer />
        </Grid>
    );
}

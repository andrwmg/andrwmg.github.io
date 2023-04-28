import React, { useEffect, useState } from "react";
import Skills from "./Skills";
import {  Grid } from "@mui/material";
import Footer from "./Footer";
import Cover from "./Cover";
import About from "./About";
import Projects from "./Projects";
import Backdrop from "./Backdrop";

export default function Main({theme}) {
    const [modalOpen, setModalOpen] = useState(false);
    const [details, setDetails] = useState(null);
    const [fade, setFade] = useState(false);

    const handleClickOpen = (details) => {
        setDetails(details);
        setModalOpen(true);
    };

    const handleClose = (evt) => {
        evt.preventDefault();
        setDetails(null);
        setModalOpen(false);
    };

    useEffect(() => {
        setFade(true)
    }, [])

    return (
        <Grid container direction="column" position='relative' rowGap={8} sx={{ opacity: fade && theme ? 1 : 0, transition: 'opacity 1s ease-in-out' }}>

            <Backdrop open={modalOpen} handleClose={handleClose} details={details} />

            <Cover theme={theme} />
            <About />

            <Projects handleClickOpen={handleClickOpen} modalOpen={modalOpen} theme={theme} />

            <Skills />
            <Footer />
        </Grid >
    );
}

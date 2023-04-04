import React, { useEffect, useState } from "react";
import Skills from "./Skills";
import {  Grid } from "@mui/material";
import Footer from "./Footer";
import Cover from "./Cover";
import About from "./About";
import Projects from "./Projects";
import Backdrop from "./Backdrop";

export default function Main() {
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
        <Grid container direction="column" position='relative' rowGap={8} sx={{ opacity: fade ? 1 : 0, transition: '1s' }}>

            <Backdrop open={modalOpen} handleClose={handleClose} details={details} />

            <Cover />
            <About />

            <Projects handleClickOpen={handleClickOpen} modalOpen={modalOpen} />

            <Skills />
            <Footer />
        </Grid >
    );
}

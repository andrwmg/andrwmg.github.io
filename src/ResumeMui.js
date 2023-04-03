import React, { useEffect, useState } from "react";
import cover from "./canyon-min.jpg";
import Skills from "./SkillsMui";
import Experience from "./ExperienceMui";
import Education from "./EducationMui";
import About from "./AboutMui";
import Contact from "./ContactMui";
import { Divider, Grid, Typography } from "@mui/material";
import Footer from "./Footer";
// import PortfolioCard from './PortfolioCard';
// import PortfolioCard2 from './PortfolioCard copy';
import { blue } from "material-ui-colors";
// import products from './MechanicalSeeds';
import websites from "./SoftwareSeeds";
// import PortfolioCard3 from './PortfolioCard copy 2';
// import CardContainer from './CardContainer';
import InfoDialog from "./InfoDialog";
import SoftwareCard from "./SoftwareCard";

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

    useEffect(()=> {
        setFade(true)
    }, [])

    return (
        <Grid container direction="column" rowGap={6} sx={{opacity: fade ? 1 : 0, transition: '1s'}}>
            <Grid
                container
                item
                direction="row"
                alignItems="flex-start"
                justifyContent="center"
                pt={4}
                // pb={{xs: 5, lg: 6}}
                // bgcolor="#f3f3f3"
                maxWidth="100vw"
                rowGap={4}
            // px={{ xs: 2, sm: 2, md: 4, xl: 5 }}
            >
                <InfoDialog open={open} handleClose={handleClose} details={details} />

                <Grid
                    container
                    item
                    direction="column"
                    xs={12}
                    lg={6}
                    order={1}
                    //   py={2}
                    px={{ xs: 2, sm: 2, md: 4, xl: 5 }}
                    alignItems="flex-start"
                    justifyContent='center'
                    minHeight='100%'
                >
                    <Grid container item width="100%">
                        <img
                            src={cover}
                            style={{
                                borderRadius: ".5rem",
                                width: "100%",
                                maxHeight: '400px',
                                objectFit: "cover",
                            }}
                            alt=""
                        />
                    </Grid>
                    {/* <Typography fontSize="2.75rem" fontWeight={700} noWrap>
                        Andrew Gay
                    </Typography>
                    <Typography fontSize="1.4rem">Software Engineer</Typography> */}
                </Grid>

                {/* <Grid
                    container
                    item
                    direction="column"
                    xs={12}
                    sm={6}
                    lg={4}
                    order={{ xs: 1, lg: 2 }}
                    //   py={2}
                    px={{ xs: 2, sm: 2, md: 4, xl: 5 }}
                    alignItems="flex-start"
                    rowGap={3}
                >
                    <Contact />
                </Grid> */}

                <Grid
                    container
                    item
                    direction="column"
                    xs={12}
                    sm={8}
                    lg={4}
                    order={{ xs: 2, lg: 1 }}
                    textAlign='center'
                    //   py={2}
                    px={{ xs: 2, sm: 2, md: 4, xl: 5 }}
                    alignItems="center"
                >
                    <About />
                </Grid>
            </Grid>
            <Divider variant='middle' />

            {/* <Grid item container direction='column' maxWidth='100vw' px={{ xs: 2, sm: 2, md: 4, xl: 5 }} sx={{ backgroundImage: 'linear-gradient(180deg, #f3f3f3, white)' }} >
                <Typography fontSize='1.75rem' fontWeight={600} mb={3} color={blue[600]}>Mechanical Project Examples</Typography>
                <Grid container item className="Main-Cards" wrap='nowrap' columnGap={2}>
                    {products.map(p => (
                        <PortfolioCard key={p.title} wide={p.wide} src={p.src} company={p.company} title={p.title} body={p.body} bullets={p.bullets} productUrl={p.productUrl} />
                    ))}
                </Grid>
            </Grid> */}

            {/* <Grid item container direction='column' maxWidth='100vw' px={{ xs: 2, sm: 2, md: 4, xl: 5 }} my={4} >
                <Typography fontSize='1.75rem' fontWeight={600} mb={3} color={blue[600]}> Project Examples</Typography>
                <Grid container item wrap='nowrap' columnGap={2} overflow='scroll'>
                    {products.map(p => (
                        <PortfolioCard2 key={p.title} wide={p.wide} src={p.src} company={p.company} title={p.title} body={p.body} bullets={p.bullets} productUrl={p.productUrl} />
                    ))}
                </Grid>
            </Grid>

            <CardContainer handleClickOpen={handleClickOpen} /> */}

            <Grid
                item
                container
                direction="column"
                px={{ xs: 2, sm: 2, md: 4, xl: 5 }}
                rowGap={3}
            >
                <Typography
                    fontSize="1.75rem"
                    fontWeight={600}
                    color={blue[600]}
                >
                    {" "}
                    Project Examples
                </Typography>
                <Grid item container direction="row" gap="16px">
                    {websites.map(
                        (w, index) =>
                            index < 2 && (
                                <SoftwareCard
                                    key={w.title}
                                    wide={w.wide}
                                    src={w.src}
                                    company={w.company}
                                    title={w.title}
                                    body={w.body}
                                    bullets={w.bullets}
                                    productUrl={w.productUrl}
                                    view={w.view}
                                    details={w.details}
                                    github={w.github}
                                    handleClickOpen={handleClickOpen}
                                    chips={w.chips}
                                />
                            )
                    )}
                </Grid>
            </Grid>

            {/* <Grid item container direction='column' maxWidth='100vw' px={{ xs: 2, sm: 2, md: 4, xl: 5 }}>
                <Typography fontSize='1.75rem' fontWeight={600} mb={3} color={blue[600]}>Software Portfolio</Typography>
                <Grid container item direction='row' maxWidth='100vw' height='450px' wrap='nowrap' columnGap={2} overflow='scroll'>
                    {websites.map(w => (
                        <PortfolioCard3 key={w.title} wide={w.wide} src={w.src} company={w.company} title={w.title} body={w.body} bullets={w.bullets} productUrl={w.productUrl} view={w.view} details={w.details} github={w.github} />
                    ))}
                </Grid>
            </Grid> */}

            <Divider variant="middle" />

            <Grid
                container
                item
                direction="row"
                justifyContent={{
                    xs: "center",
                    sm: "space-between",
                    md: "space-evenly",
                }}
                // py={2}
                rowGap={4}
                // px={{ xs: 2, sm: 2, md: 4, xl: 5 }}
                mb={8}
                bgcolor="white"
                maxWidth="100vw"
            >
                <Grid
                    container
                    item
                    direction="column"
                    xs={12}
                    md={12}
                    //   py={2}
                    px={{ xs: 2, sm: 2, md: 4, xl: 5 }}
                >
                    <Grid container item direction="row" rowGap={4}>
                        <Grid container item direction="column" xs={12} sm={10} rowGap={3} minWidth='100%'>
                            <Skills />
                        </Grid>
                        {/* <Grid container item direction="column" xs={12} rowGap={3}>
                            <Education />
                        </Grid> */}
                    </Grid>
                </Grid>
                {/* <Grid
                    container
                    item
                    direction="column"
                    xs={12}
                    md={6}
                    //   py={2}
                    px={{ xs: 2, sm: 2, md: 4, xl: 5 }}
                    rowGap={3}
                >
                    <Experience />
                </Grid> */}
                {/* <Grid container item direction='column' xs={12} md={6} lg={4} py={2} px={{ xs: 2, sm: 2, md: 4, xl: 5 }} display={{ xs: 'inline-block', sm: 'none', lg: 'inline-block' }}>
                    <Education />
                </Grid> */}
            </Grid>
            <Footer />
        </Grid>
    );
}

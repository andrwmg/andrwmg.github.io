import styled from "@emotion/styled";
import { Button, Grid, Paper, Typography, useMediaQuery } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { blue, grey } from "material-ui-colors";
import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from 'framer-motion'

const CardButton = styled(Button)(({ theme }) => ({
    backgroundColor: 'rgba(0, 0, 0, 0.87)',
    color: grey[100],
    '&:hover': {
        backgroundColor: blue[600],
        color: grey[100]
    },
}));

export default function SoftwareCard({
    light,
    dark,
    title,
    body,
    view,
    details,
    github,
    handleClickOpen,
    chips,
    modalOpen,
    theme,
    delay
}) {

    const minWidth = useMediaQuery('(min-width: 900px)')
    const maxWidth = useMediaQuery('(max-width: 900px)')

    const containerRef = useRef(null)
    const controls = useAnimation()

    const [open, setOpen] = useState(false);

    const handleHoverEnter = (e) => {
        e.stopPropagation()
        if (minWidth) {
            setOpen(true);
        }
    };

    const handleHoverLeave = (e) => {
        e.stopPropagation()
        if (minWidth) {
            setOpen(false);
        }
    };

    const handleClick = (e) => {
        e.stopPropagation()
        if (maxWidth) {
            setOpen(!open);
        } else {
            setOpen(false)
        }
    };

    const handleDetailsClick = (evt) => {
        evt.preventDefault();
        evt.stopPropagation()
        setOpen(!open)
        handleClickOpen(details);
    };

    useEffect(() => {
        setOpen(false)
    }, [modalOpen])


    return (
        <Paper elevation={3} sx={{ borderStyle: 'none', bgcolor: 'background.default', borderRadius: 2, maxWidth: '100%' }}>

            <Grid
                container
                item
                xs={12}
                // md={5}
                onMouseEnter={handleHoverEnter}
                onMouseLeave={handleHoverLeave}
                overflow="hidden"
                wrap="nowrap"
                onClick={handleClick}
                justifyContent="space-between"
                fontFamily='Inter'
                position='relative'
                borderRadius={2}
                sx={{
                    borderStyle: 'none',
                    transition: "all .3s ease-in-out",
                }}
            >

                {/* <motion.div initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: .5, delay }}> */}

                <Grid
                    container
                    item
                    direction="column"
                    justifyContent="start"
                    alignItems="center"
                    overflow='hidden'
                    sx={{ borderStyle: 'none', border: 'none' }}
                >
                    <img
                        src={dark}
                        alt=""
                        style={{ borderStyle: 'none', width: '100%', mt: 'auto', transition: '.3s ease-in-out', objectFit: 'cover' }}
                    />
                    <Box sx={{ height: { xs: '64px', lg: '88px' }, bgcolor: theme === 'dark' ? 'black' : 'white', zIndex: 1 }} />

                </Grid>

                <Grid
                    item
                    container
                    direction='column'
                    className="drawer"
                    position='absolute'
                    justifyContent="space-between"
                    textAlign='center'
                    zIndex={2}
                    top={open ? 0 : { xs: 'calc(100% - 62px)', lg: "calc(100% - 88px)" }}
                    bottom={0}
                    wrap='nowrap'
                    p={{ xs: 2, sm: 2, md: 2, lg: 4, xl: 5 }}
                    px={{ xs: 1, lg: 4, xl: 5 }}
                    bgcolor='background.default'
                    sx={{
                        transition: "top .3s ease-in-out"
                    }}
                >
                    <Box sx={{ flexGrow: open ? 1 : 0, transition: '.3s' }} />
                    <Grid container item direction='column' gap={{ xs: 2, sm: 4, md: 2, lg: 4, xl: 5 }} justifyContent='start' width='100%'>
                        <Grid container item width='100%' direction='row' justifyContent='center' alignItems='center'>
                            <Typography className="title" noWrap variant="h4">
                                {title}
                            </Typography>
                        </Grid>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} exit={{ opacity: 0 }}>
                            <Stack spacing={{ xs: 2, sm: 4, md: 2, lg: 4, xl: 5 }} alignItems='center' width='100%'>
                                <Grid container item className='chips' direction="row" spacing={1} wrap="nowrap" justifyContent='center' sx={{ opacity: open ? 1 : 0, transition: '.3s ease-in-out' }}
                                >
                                    {chips &&
                                        chips.map((c) => (
                                            <Grid container item direction='column' rowGap={1} alignItems='center' maxWidth='40px' justifyContent='center'>
                                                <Grid container item maxWidth={{ xs: '25px', lg: '30px' }} maxHeight={{ xs: '25px', lg: '30px' }}>
                                                    <img src={c} alt='' style={{ objectFit: 'contain', maxHeight: '100%', width: '100%', filter: 'grayscale(1)' }} />
                                                </Grid>
                                            </Grid>
                                        ))}
                                </Grid>
                                <Grid container item className='body' direction="row" wrap="nowrap" justifyContent='center'>

                                    {body.map((b) => (
                                        <Typography variant='body2' key={b} fontSize={{ xs: '12px', sm: '18px', md: "12px", lg: '16px' }} maxWidth='80%'
                                        >
                                            {b}
                                        </Typography>
                                    ))}
                                </Grid>
                                <Grid container item className='buttons' direction="row" gap={{ xs: 2, sm: 2 }} justifyContent='center'
                                >
                                    {view ? (
                                        <CardButton
                                            href={view}
                                            variant="contained"
                                            color='primary'
                                        >
                                            View
                                        </CardButton>
                                    ) : null}
                                    {details ?
                                        <CardButton
                                            onClick={handleDetailsClick}
                                            variant="contained"
                                        >
                                            Details
                                        </CardButton>
                                        : null}
                                    {github ? (
                                        <CardButton
                                            href={github}
                                            variant="contained"
                                        >
                                            Github
                                        </CardButton>
                                    ) : null}
                                </Grid>
                            </Stack>
                        </motion.div>
                    </Grid>
                    <Box sx={{ flexGrow: 1 }} />
                </Grid>
                {/* </motion.div> */}
            </Grid>
        </Paper>
    );
}

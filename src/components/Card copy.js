import styled from "@emotion/styled";
import { Button, Grid, Paper, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import { blue, grey } from "material-ui-colors";
import React, { useEffect, useState } from "react";

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
    theme
}) {

    const minWidth = useMediaQuery('(min-width: 900px)')
    const maxWidth = useMediaQuery('(max-width: 900px)')

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
        }
    };

    const handleDetailsClick = (evt) => {
        setOpen(!open)
        evt.preventDefault();
        evt.stopPropagation()
        handleClickOpen(details);
    };

    useEffect(()=> {
        setOpen(false)
    }, [modalOpen])


    return (
        <Paper elevation={3} sx={{ borderStyle: 'none', bgcolor: 'white', borderRadius: 2, overflow: 'hidden', position: 'relative'}}
        >
            <Grid
                container
                item
                direction="column"
                xs
                width={{xs: '100vw', md: "40vw"}}
                flexGrow={1}
                maxHeight={{xs: 'calc(62px + 100vw * 9 / 16)', md: 'calc(88px + 50vw * 9 / 16)'}}
                onMouseEnter={handleHoverEnter}
                onMouseLeave={handleHoverLeave}
                overflow="hidden"
                wrap="nowrap"
                onClick={handleClick}
                justifyContent="space-between"
                fontFamily='Inter'
                sx={{
                    borderStyle:'none',
                    transition: "all .3s ease-in-out",
                }}
            >
                <Grid
                    container
                    item
                    direction="column"
                    justifyContent="start"
                    alignItems="center"
                    maxHeight={{xs: 'calc(100vw * 9 / 16)', md: 'calc(50vw * 9 / 16)'}}
                    overflow='hidden'
                    sx={{borderStyle: 'none', border: 'none'}}
                >
                        <img
                            src={dark}
                            alt=""
                            style={{ borderStyle: 'none', width: '100%', mt: 'auto', transition: '.3s ease-in-out', objectFit: 'cover'}}
                        />
                </Grid>
                <Box sx={{flexGrow: 1}} />
                <Box sx={{height: {xs: '64px', lg: '88px'}, bgcolor: theme === 'dark' ? 'black' : 'white', zIndex: 1}} />
                <Grid
                    item
                    container
                    direction='column'
                    className="drawer"
                    position='absolute'
                    justifyContent="space-between"
                    textAlign='center'
                    width='100%'
                    height= '100%'
                    zIndex={2}
                    left={0}
                    right={0}
                    top={ open ? 0 : { xs: 'calc(100% - 62px)', lg: "calc(100% - 88px)" }}
                    wrap='nowrap'
                    p={{ xs: 2, sm: 2, md: 2, lg: 4, xl: 5 }}
                    bgcolor='background.default'
                    gap={{ xs: 1, sm: 2 }}
                    sx={{
                        transition: "top .3s ease-in-out"
                    }}
                >
                    <Grid container item direction='column' gap={{xs: 2, sm: 4, md: 2, lg: 4, xl: 5}}>
                    <Grid container item width='100%' direction='row' justifyContent='center' alignItems='center'>
                        <Typography className="title" noWrap variant="h4">
                            {title}
                        </Typography>
                    </Grid>
                    <Grid container item className='chips' direction="row" spacing={1} wrap="nowrap" justifyContent='center'
                    >
                        {chips &&
                            chips.map((c) => (
                                <Grid container item direction='column' rowGap={1} alignItems='center' maxWidth='40px' justifyContent='center'>
                                    <Grid container item maxWidth='30px' maxHeight='30px'>
                                        <img src={c} alt='' style={{ objectFit: 'contain', maxHeight: '100%', width: '100%', filter: 'grayscale(1)' }} />
                                    </Grid>
                                </Grid>
                            ))}
                    </Grid>
                    <Grid container item className='body' direction="row" wrap="nowrap" justifyContent='center' maxWidth={{xs: '80%'}}>

                        {body.map((b) => (
                            <Typography variant='body2' key={b} fontSize={{xs: '14px', sm: '20px', md: "16px", lg: '18px'}} maxWidth='90%'
                            >
                                {b}
                            </Typography>
                        ))}
                    </Grid>
                    </Grid>
                    <Grid container item className='buttons' direction="row" gap={{ xs: 1, sm: 2 }} justifyContent='center' 
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
                </Grid>
            </Grid>
        </Paper>
    );
}

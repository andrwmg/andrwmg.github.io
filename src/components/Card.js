import styled from "@emotion/styled";
import { Button, Grid, Paper, Typography, useMediaQuery } from "@mui/material";
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
    src,
    title,
    body,
    view,
    details,
    github,
    handleClickOpen,
    chips,
    modalOpen
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
        <Paper elevation={3} sx={{ height: { xs: "350px", md: "450px" }, width: { xs: 1, md: "40vw" }, borderRadius: 2, overflow: 'hidden' }}>
            <Grid
                container
                item
                direction="column"
                xs
                minHeight='100%'
                onMouseEnter={handleHoverEnter}
                onMouseLeave={handleHoverLeave}
                position="relative"
                overflow="hidden"
                wrap="nowrap"
                onClick={handleClick}
                justifyContent="flex-end"
                fontFamily='Inter'
                sx={{
                    transition: "all .3s ease-in-out",
                    // "&:hover .drawer": { opacity: { md: 1 }, top: {md: 0} },
                    // "&:hover .buttons, &:hover .body, &:hover .chips": { opacity: { md: 1 } },
                    // "&:blur .drawer": { opacity: { md: 0 }, top: {md: 'calc(450px - 26px - 64px)'} }
                }}
            >
                <Grid
                    container
                    item
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    height="100%"
                    width="100%"
                    position='absolute'
                >
                    {src.map((s) => (
                        <img
                            key={s}
                            src={s}
                            alt=""
                            style={{ objectFit: "cover", height: '100%', width: '100%'}}
                        />
                    ))}
                </Grid>
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
                    zIndex={3}
                    left={0}
                    right={0}
                    top={ open ? 0 : { xs: 'calc(100% - 26px - 32px)', md: "calc(450px - 26px - 64px)" }}
                    wrap='nowrap'
                    p={{ xs: 2, sm: 2, md: 4, xl: 5 }}
                    bgcolor='white'
                    gap={{ xs: 1, sm: 2 }}
                    sx={{
                        transition: "all .3s ease-in-out"
                    }}
                >
                    <Grid container item width='100%' direction='row' justifyContent='center' alignItems='center'>
                        <Typography className="title" noWrap variant="h4">
                            {title}
                        </Typography>
                    </Grid>
                    <Grid container item className='chips' direction="row" spacing={1} wrap="nowrap" justifyContent='center' 
                    >
                        {chips &&
                            chips.map((c) => (
                                <Grid container item direction='column' rowGap={1} alignItems='center' maxWidth='40px'>
                                    <Grid container item maxWidth='30px' maxHeight='30px'>
                                        <img src={c} alt='' style={{ objectFit: 'contain', maxHeight: '100%', width: '100%', filter: 'grayscale(1)' }} />
                                    </Grid>
                                </Grid>
                            ))}
                    </Grid>
                    <Grid container item className='body' direction="row" wrap="nowrap" justifyContent='center' 
                    >

                        {body.map((b) => (
                            <Typography variant='body2' key={b} fontSize="16px" maxWidth={{ xs: '400px' }}
                            >
                                {b}
                            </Typography>
                        ))}
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
                        <CardButton
                            onClick={handleDetailsClick}
                            variant="contained"
                        >
                            Details
                        </CardButton>
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

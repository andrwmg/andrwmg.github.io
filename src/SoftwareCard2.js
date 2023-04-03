import styled from "@emotion/styled";
import {
    KeyboardArrowUp,
} from "@mui/icons-material";
import { Button, Chip, Grid, IconButton, Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { blue, grey } from "material-ui-colors";
import React, { useEffect, useState } from "react";
import Skill from "./SkillMui";

const CardButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(grey[100]),
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
    dialogState
}) {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const handleDetailsClick = (evt) => {
        evt.preventDefault();
        setOpen(false)
        handleClickOpen(details);
    };

    useEffect(()=> {
        setOpen(false)
    },[dialogState])

    return (
        <Paper elevation={3} sx={{ height: { xs: "350px", md: "450px" }, width: { xs: 1, md: "40vw" }, borderRadius: 2, overflow: 'hidden' }}>
            <Grid
                container
                item
                direction="column"
                xs
                height='100%'
                // minWidth={{ xs: 1, md: "40vw" }}
                position="relative"
                overflow="hidden"
                wrap="nowrap"
                onClick={handleClick}
                justifyContent="flex-end"
                fontFamily='Inter'
                sx={{
                    transition: "all .3s ease-in-out",
                    "&:hover .drawer": { opacity: { md: 1 }, height: { md: 1 } },
                    "&:hover .buttons, &:hover .body, &:hover .chips": { display: 'flex', opacity: { md: 1 } }
                }}
            >
                <Grid
                    container
                    item
                    position="absolute"
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    height="100%"
                    width="100%"
                >
                    {src.map((s) => (
                        <img
                            key={s}
                            src={s}
                            alt=""
                            style={{ objectFit: "cover", width: "100%", height: "100%" }}
                        />
                    ))}
                </Grid>
                <Grid
                    item
                    container
                    direction='column'
                    className="drawer"
                    justifyContent="space-between"
                    textAlign='center'
                    width='100%'
                    zIndex={1}
                    height={open ? { xs: 1, md: 'calc(26px + 64px)' } : { xs: 'calc(26px + 32px)', md: 'calc(26px + 64px)' }}
                    wrap='nowrap'
                    p={{ xs: 2, sm: 2, md: 4, xl: 5 }}
                    bgcolor='white'
                    gap={{ xs: 1, sm: 2 }}
                    sx={{
                        opacity: 1,
                        transition: "all .3s ease-in-out"
                    }}
                >
                    <Grid container item width='100%' direction='row' justifyContent='center' alignItems='center'>
                        <Typography className="title" noWrap variant="h4">{title}</Typography>
                    </Grid>
                    <Grid container item className='chips' direction="row" spacing={1} wrap="nowrap" justifyContent='center' sx={{ opacity: open ? { xs: 1, md: 0 } : 0, transition: '.3s ease-in-out' }}>
                        {chips &&
                            chips.map((c) => (
                                <Grid container item direction='column' rowGap={1} alignItems='center' maxWidth='40px'>
                                    <Grid container item maxWidth='30px' maxHeight='30px'>
                                        <img src={c} style={{ objectFit: 'contain', maxHeight: '100%', width: '100%', filter: 'grayscale(1)' }} />
                                    </Grid>
                                </Grid>
                            ))}
                    </Grid>
                    <Grid container item className='body' direction="row" wrap="nowrap" justifyContent='center' sx={{ opacity: open ? { xs: 1, md: 0 } : 0, transition: '.3s ease-in-out' }}>

                        {body.map((b) => (
                            <Typography variant='body2' key={b} fontSize="16px" maxWidth={{ xs: '400px' }}
                            >
                                {b}
                            </Typography>
                        ))}
                    </Grid>
                    <Grid container item className='buttons' direction="row" gap={{ xs: 1, sm: 2 }} justifyContent='center' sx={{ opacity: open ? { xs: 1, md: 0 } : 0, transition: '.3s ease-in-out' }}>
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
                {/* <Grid
                container
                item
                px={{ xs: 2, sm: 2, md: 4, xl: 5 }}
                position="relative"
                direction="row"
                zIndex={2}
                py={2}
                justifyContent="space-between"
                wrap="nowrap"
            >
                <Grid
                    item
                    position="absolute"
                    className="buttonBackground"
                    zIndex={0}
                    top={0}
                    bottom={0}
                    right={0}
                    left={0}
                    bgcolor="#fff"
                    sx={{
                        opacity: 1,
                        transition: "all .2s ease-in-out",
                    }}
                />
                <Stack direction="row" gap={{ xs: 1, sm: 2 }}>
                    {view ? (
                        <Button
                            href={view}
                            variant="contained"
                        >
                            View
                        </Button>
                    ) : null}
                    <Button
                        onClick={handleDetailsClick}
                        variant="contained"
                    >
                        Details
                    </Button>
                    {github ? (
                        <Button
                            href={github}
                            variant="contained"
                        >
                            Github
                        </Button>
                    ) : null}
                </Stack>
            </Grid> */}
            </Grid>
        </Paper>
    );
}

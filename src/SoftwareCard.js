import {
    KeyboardArrowUp,
} from "@mui/icons-material";
import { Button, Chip, Grid, IconButton, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import Skill from "./SkillMui";

export default function SoftwareCard({
    src,
    title,
    body,
    view,
    details,
    github,
    handleClickOpen,
    chips,
}) {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const handleDetailsClick = (evt) => {
        evt.preventDefault();
        handleClickOpen(details);
    };

    return (
        <Grid
            container
            item
            direction="column"
            xs
            minHeight={{ xs: "350px", md: "450px" }}
            minWidth={{ xs: "100%", md: "calc(50% - 16px)" }}
            borderRadius={2}
            position="relative"
            overflow="hidden"
            wrap="nowrap"
            justifyContent="flex-end"
            sx={{
                transition: "all .3s ease-in-out",
                "&:hover .drawer": { opacity: { md: 1 }, height: { md: 1 } },
                "&:hover .buttonBackground": { opacity: { md: 0.95 } },
            }}
        >
            <Grid
                container
                item
                position="absolute"
                flexGrow={1}
                direction="column"
                justifyContent="center"
                alignItems="center"
                height="100%"
                width="100%"
                gap="40px"
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
                justifyContent="flex-end"
                height={open ? 1 : 0}
                zIndex={1}
                wrap='nowrap'
                px={{ xs: 2, sm: 2, md: 4, xl: 5 }}
                bgcolor="rgba(0, 0, 0, .95)"
                gap={{ xs: 1, sm: 2 }}
                color="white"
                sx={{
                    opacity: open ? 1 : 0,
                    transition: "all .3s ease-in-out"
                }}
            >
                <Typography fontSize="24px">{title}</Typography>
                <Stack direction="row" spacing={1} wrap="nowrap">
                    {chips &&
                        chips.map((c) => (
                            <Grid container item direction='column' rowGap={1} alignItems='center' maxWidth='40px'>
                                <Grid container item maxWidth='30px' maxHeight='30px'>
                                    <img src={c} style={{ objectFit: 'contain', maxHeight: '100%', width: '100%' }} />
                                </Grid>
                            </Grid>                            
                            // <Chip
                            //     key={c}
                            //     label={c}
                            //     variant="outlined"
                            //     size="small"
                            //     sx={{ color: "white" }}
                            // />
                        ))}
                </Stack>
                {body.map((b) => (
                    <Typography key={b} fontSize="16px" maxWidth={{ xs: '400px' }}
                    >
                        {b}
                    </Typography>
                ))}
            </Grid>
            <Grid
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
                    bgcolor="rgb(0,0,0)"
                    sx={{
                        opacity: open ? 0.95 : 0.65,
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
                <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{
                        transform: open && "rotate(540deg)",
                        color: "white",
                        transition: "all .3s ease-in-out",
                        display: { md: "none" },
                        border: "2px solid white",
                    }}
                >
                    <KeyboardArrowUp />
                </IconButton>
            </Grid>
        </Grid>
    );
}

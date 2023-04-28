import { GitHub, LinkedIn, Mail, Phone } from "@mui/icons-material"
import { Grid, IconButton, Typography } from "@mui/material"
import { Stack } from "@mui/system"
import React from "react"
import cover from "../images/canyon-min.jpg"

const items = [
    { text: 'andrwmg@gmail.com', icon: <Mail />, link: 'mailto: andrwmg@gmail.com' },
    { text: '610-888-4468', icon: <Phone />, link: 'tel:6108884468' },
    { text: 'linkedin.com/in/andrwmg', icon: <LinkedIn />, link: 'https://www.linkedin.com/in/andrwmg' },
    { text: 'github.com/andrwmg', icon: <GitHub />, link: 'https://github.com/andrwmg' }]

export default function Cover({theme}) {

    return (
        <Grid
            container
            item
            height='600px'
            width='100%'
            position='relative'
            alignItems='flex-end'
            justifyContent='center'
            pb={theme === 'dark' ? 0 : 4}
            sx={{transition: '1s ease-in-out'}}
        >
            <Grid
                container
                item
                position='absolute'
                left={0}
                right={0}
                top={0}
                bottom={0}
                zIndex={1}
                sx={{backgroundImage: theme === 'dark' ? "linear-gradient(180deg, rgba(0, 0, 0, 1.0) 5% ,rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1.0) 80%)" : "linear-gradient(180deg, rgba(0, 0, 0,0) 50%, rgba(0, 0, 0,.9))"}}
            />
            <Grid
                container
                item
                position='absolute'
                left={0}
                right={0}
                top={0}
                bottom={0}
                width='100%'
            >
                <img
                    src={cover}
                    style={{
                        width: "100%",
                        maxHeight: '100%',
                        objectFit: "cover"
                    }}
                    alt="Antelope Canyon"
                />
            </Grid>

            <Grid
                container
                item
                direction="column"
                textAlign='center'
                alignItems="center"
                justifyContent='flex-end'
                minHeight='100%'
                borderRadius={{xs: 0, sm: 2}}
                xs={12}
                sm={7}
                md={5}
                lg={3}
                mb={4}
                zIndex={1}
            >
                <Typography variant='h1' noWrap color='white'>
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
    )
}


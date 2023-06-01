import { GitHub, LinkedIn, Mail, Phone } from "@mui/icons-material"
import { Grid, IconButton, Typography } from "@mui/material"
import { Stack } from "@mui/system"
import React from "react"
import cover from "../images/canyon-min.jpg"
import {motion} from 'framer-motion'
import { Parallax } from "react-parallax"

const items = [
    { text: 'andrwmg@gmail.com', icon: <Mail />, link: 'mailto: andrwmg@gmail.com',initial: {scale: .25} },
    { text: '610-888-4468', icon: <Phone />, link: 'tel:6108884468',initial: {scale: .25} },
    { text: 'linkedin.com/in/andrwmg', icon: <LinkedIn />, link: 'https://www.linkedin.com/in/andrwmg', initial: {scale: .25} },
    { text: 'github.com/andrwmg', icon: <GitHub />, link: 'https://github.com/andrwmg', initial: {scale: .25} }]

export default function Cover({ theme }) {

    return (
        <Grid
            container
            item
            height='600px'
            width='100%'
            position='relative'
            alignItems='flex-end'
            justifyContent='center'
            // pb={theme === 'dark' ? 0 : 4}
            sx={{ transition: '1s ease-in-out' }}
        >


                {/* <Grid
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
                </Grid> */}
                <motion.div initial='hidden' animate='visible' transition={{duration: 1.5}} variants={{visible: {opacity: 1, y: 0}, hidden: {opacity: 0, y: -100}}} style={{zIndex: 2}}>
                <Parallax strength={250} bgImage={cover} bgImageStyle={{
    // Adjust the background position to start further down
    backgroundPosition: 'center top',
    marginTop: '-200px', // Adjust the margin-top value as needed
    zIndex: 0
  }}>
                <Grid
                    container
                    item
                    position='absolute'
                    left={0}
                    right={0}
                    top={0}
                    bottom={0}
                    zIndex={0}
                    sx={{ backgroundImage: theme === 'dark' ? "linear-gradient(180deg, rgba(0, 0, 0, 1.0) 0% ,rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 1.0) 80%)" : "linear-gradient(180deg, rgba(0, 0, 0,0) 50%, rgba(0, 0, 0,.9))" }}
                />
            <Grid
                container
                item
                direction="column"
                textAlign='center'
                alignItems="center"
                justifyContent='flex-end'
                minHeight='600px'
                width='100vw'
                borderRadius={{ xs: 0, sm: 2 }}
                xs={12}
                zIndex={4}
            >
                <Typography variant='h1' noWrap color='white' zIndex={2}>
                    Andrew Gay
                </Typography>
                <Typography variant='h3' mb={1} color='white' zIndex={2}>Software Engineer</Typography>
                <Stack direction='row' gap={1}>
                    {items.map((i,index) => (
                        <motion.div initial={{scale: .75, opacity: 0}} animate={{scale: 1, opacity: 1}} transition={{duration: 1.5, delay: (index * .2) + 1}}>
                        <IconButton href={i.link} sx={{ color: 'white' }}>
                            {i.icon}
                        </IconButton>
                        </motion.div>

                    ))}
                </Stack>
            </Grid>
            </Parallax>

            </motion.div>
        </Grid>
    )
}


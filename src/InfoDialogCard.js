import { InfoOutlined } from "@mui/icons-material";
import { Grid, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React, { useEffect, useState } from "react";
import './PortfolioCard.css'

export default function InfoDialogCard({ heading, image, body, background, color }) {

    const [flip, setFlip] = useState(true)

    const handleFlip = (evt) => {
        evt.preventDefault()
        setFlip(!flip)
    }

    const handleEnter = () => {
        setFlip(true)
    }

    const handleLeave = () => {
        setFlip(false)
    }

    useEffect(()=> {
        setFlip(false)
    }, [])

    return (
        <Grid container item direction='column' xs={10} height='100%' width='90vw' minWidth={{xs: '95%', sm: '95%'}} pl={0} pr={2} borderRadius={2} position='relative' overflow='hidden' bgcolor={background} 
        // onMouseEnter={handleEnter} onMouseLeave={handleLeave}
        >
            <IconButton onClick={handleFlip} sx={{ display: { md: 'none' }, zIndex: 10, position: 'absolute', bottom: 0, right: 0 }}>
                <InfoOutlined />
            </IconButton>
            <Grid container item direction='column' justifyContent='center' position='absolute' top={0} bottom={0} left={0} right={{xs: '100%', md: '50%'}} alignItems='center' height='100%' sx={{width: {xs: '100%', md: '55%'}}}>
                <img src={image} alt="" style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
            </Grid>
            <Grid item container direction='column' justifyContent='flex-start' position={{xs: 'absolute'}} width={{xs: '100%', md: '50%'}} top={{xs: flip ? 0 : '91%', md: 0}} bottom={0} left={{xs: 0, md: '50%'}} right={0} zIndex={1} py={2} pl={4} pr={{xs: 4, md: 1}} rowGap={2} color={color} overflow='scroll' wrap='nowrap'
            bgcolor={{xs: background, md: 'transparent'}}
            sx={{ opacity: {xs: flip ? 1 : 1, md: 1}, transition: 'all .3s ease-in-out' }}
            >

                <Typography fontSize='24px' color={color} borderTop='1px solid black'>
                    {heading}
                </Typography>
                {body.map(t => (
                    <Typography key={t} fontSize='16px'>
                        {t}
                    </Typography>
                ))}
            </Grid>
        </Grid>
    )
}

const Card = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'content-box',
    position: 'relative',
    color: 'white',
    minHeight: '400px',
    width: '300px',
    minWidth: '300px',
    alignItems: 'center',
    border: 'none',
    borderRadius: '12px',
    textAlign: 'left',
    backgroundImage: 'linear-gradient(0deg, rgba(100,100,255,.6), rgba(100,100,255,.2))',
})

const Overlay = styled('div')({
    boxSizing: 'border-box',
    position: 'absolute',
    borderRadius: '12px',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.8)',
    opacity: 0,
    transition: 'all .2s ease-in-out',
    zIndex: 1,
})
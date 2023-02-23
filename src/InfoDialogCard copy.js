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
        <Grid container item direction={{xs: 'column', md: 'row'}} xs={10} height='100%' width='90vw' minWidth={{xs: '95%', md: '63%'}} py={{xs: 2, md: 0}} borderRadius={2} overflow='hidden' bgcolor={background} wrap='nowrap'>
            <Grid container item direction='column' justifyContent='center' alignItems='center' height={{xs: '50%', md: '100%'}} xs={12} md={6}>
                <img src={image} alt="" style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
            </Grid>
            <Grid item container direction='column' maxHeight={{xs: '50%', md: '100%'}} xs={12} md={6} zIndex={1} pl={{xs: '5%', md: '10px'}} pr='5%' rowGap={2} color={color} overflow='scroll' wrap='nowrap' my='7.5%'>

                <Typography fontSize='24px' color={color}>
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
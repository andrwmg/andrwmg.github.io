import { Button, Grid, Link, List, ListItem, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React, { useState } from "react";
import './PortfolioCard.css'

export default function PortfolioCard({ src, wide, company, title, body, bullets, productUrl, infoUrl }) {

    const [hover, setHover] = useState(false)

    const handleEnter = () => {
        setHover(true)
    }

    const handleLeave = () => {
        setHover(false)
    }

    const handleClick = (evt) => {
        setHover(!hover)
    }

    // const handleProductClick = (evt) => {
    //     evt.stopPropagation()
    //     evt.preventDefault()

    // }

    return (
        <Grid container height='400px' minWidth={{xs: '85%', sm: '56%', md: wide ? '35%' : '35%', lg: '22%'}} borderRadius={2} position='relative' onMouseEnter={handleEnter} onMouseLeave={handleLeave} onClick={handleClick} overflow='hidden' sx={{ backgroundImage: 
        'linear-gradient(0deg, rgba(30, 136, 229,.75), rgba(30, 136, 229,.15))'
         }}>
            <Grid container item direction='column' justifyContent='center' alignItems='center' height='300px' width='100%' rowGap='40px'>
            <Grid item position='absolute' top={0} bottom={0} left={0} right={0} zIndex={1} bgcolor='rgba(0, 0, 0, .8)' sx={{ opacity: hover ? 1 : 0, transition: 'all .3s ease-in-out'}} />
            {src.map(s => (
                <img key={s} src={s} alt="" style={{ objectFit: 'contain', width: '80%', maxHeight: '80%'}} />
            ))}
            </Grid>
            <Grid container item width='100%' px={3} direction='column' position='absolute' bottom='60px' color='white' zIndex={2}>
                <Typography fontSize='16px' color='rgba(255, 255, 255, .9)'>
                    {company}
                </Typography>
                <Typography fontSize='24px'>
                    {title}
                </Typography>
                {bullets ?
                    <ul style={{ maxHeight: hover ? '300px' : 0, opacity: hover ? 1 : 0, transition: 'all .3s ease-in-out', margin: 0, marginBottom: hover ? '10px' : 0, paddingInlineStart: '15px' }}>
                        {bullets.map(b => (
                            <li key={b}>
                                <Typography fontSize='14px'>
                                    {b}
                                </Typography>
                            </li>
                        ))}
                    </ul> :
                    body || 'Hello there! This is the body of the card that I want to create. It should work, but who the fuck really knows, am I right? Jeez this is getting long. Maybe I should just quit now and go to bed or something.'
                }
            </Grid>
            <Grid container item direction='row' width='100%' px={3} marginBottom={2} columnGap={1} marginTop='auto' justifyContent='space-between' zIndex={2} wrap='nowrap'>
                <Button href={productUrl} color="primary" variant="contained">Product</Button>
                <Button variant="text" color='inherit' sx={{ display: { xs: 'inline-block', md: 'none', color: 'white' } }}>{hover ? 'Less Info' : 'More Info'}</Button>
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
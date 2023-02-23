import { Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";

export default function SoftwareCard({ src, company, title, body, view, details, github, handleClickOpen }) {

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

    return (
        <Grid container item direction='column' xs minHeight={{xs: '350px', md: '450px'}} minWidth={{xs: '100%', md: 'calc(50% - 12px)'}} borderRadius={2} position='relative' onMouseEnter={handleEnter} onMouseLeave={handleLeave} onClick={handleClick} overflow='hidden' wrap="nowrap">
            <Grid item container position='absolute' top={hover ? 0 : '50%'} bottom={hover ? 0 : '50%'} right={0} left={0} zIndex={1} bgcolor='rgba(255, 255, 255, .95)' sx={{ opacity: hover ? 1 : 1, transition: 'all .3s ease-in-out' }} />
            <Grid item container direction='column' flexGrow={1} zIndex={1} p={3} sx={{ opacity: hover ? 1 : 0, transition: 'all .3s ease-in-out' }}>
                <Grid container item direction='column' rowGap={2} my='auto'>
                {company ?
                    <Typography fontSize='14px'>
                        {company}
                    </Typography>
                    : null
                }
                <Typography fontSize='24px' color='primary'>
                    {title}
                </Typography>
                {body.map(b => (
                    <Typography key={b} fontSize='16px'>
                        {b}
                    </Typography>
                ))}
                </Grid>
                <Grid container item columnGap={{xs: 1, sm: 2}} mt='auto' zIndex={1}>
                    {view ? <Button href={view} variant='contained' disabled={!hover}>View</Button> : null}
                    {details ? <Button onClick={handleClickOpen} variant='contained' disabled={!hover}>Details</Button> : null}
                    {github ? <Button href={github} variant='contained' disabled={!hover}>Github</Button> : null}
                </Grid>
            </Grid>

            <Grid container item position='absolute' top={0} bottom={0} left={0} right={0} direction='column' justifyContent='center' alignItems='center' height='100%' width='100%' rowGap='40px'>
                {src.map(s => (
                    <img key={s} src={s} alt="" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                ))}
            </Grid>
        </Grid>
    )
}
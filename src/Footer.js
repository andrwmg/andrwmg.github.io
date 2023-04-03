import { Grid, Typography } from '@mui/material'
import { grey } from 'material-ui-colors'
import React from 'react'

export default function Footer() {
    return (
        <Grid container item bgcolor={grey[900]} width='100%' zIndex={20}>
            <Grid container item justifyContent='space-between' color='white' my={1} mx={3}>
                <Typography variant='body1'>Created with React and MUI</Typography>
                <Typography variant='body1' display={{xs: 'block', md: 'none'}}>&copy;2023 AMG</Typography>
                <Typography variant='body1' display={{xs: 'none', md: 'block'}}>&copy;2023 Andrew Michael Gay</Typography>
            </Grid>
        </Grid>
    )
}
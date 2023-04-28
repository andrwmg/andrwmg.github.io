import { Grid, Typography } from '@mui/material'
import { grey } from 'material-ui-colors'
import React from 'react'

export default function Footer() {
    return (
        <Grid container item bgcolor={grey[900]} width='100%' zIndex={20}>
            <Grid container item justifyContent='center' color='white' my={1} mx={3}>
                <Typography variant='body1'>Designed and built by Andrew Gay &copy;2023</Typography>
                {/* <Typography variant='body1' display={{xs: 'block', md: 'none'}}>&copy;2023 AMG</Typography>
                <Typography variant='body1' display={{xs: 'none', md: 'block'}}>&copy;2023 Andrew Gay</Typography> */}
            </Grid>
        </Grid>
    )
}
import React, { useState } from 'react'
import PortfolioItem from './PortfolioItemMui'
import websites from './PortfolioSeeds'
import { v4 as uuid } from 'uuid'
import './Portfolio.css'
import { CircularProgress, Grid, Typography } from '@mui/material'

export default function Portfolio() {
    const [loading, setLoading] = useState(false)

    console.log(loading)

    const main = websites.map(app => (
        <PortfolioItem key={uuid()} {...app} setLoading={setLoading} />
    ))

    return (
        <>
            <Grid container display={loading ? 'flex' : 'none'} className='overlay'>
                <Grid container item direction='row' xs={8} sm='auto' bgcolor='white' borderRadius={2} p={3} textAlign='center' columnGap={2} rowGap={2} justifyContent='center' alignItems='center'>
                    {/* <div className="spinner-border text-primary me-3 text-center" role="status">
                                <span className='visually-hidden'>Loading...</span>
                            </div> */}
                    <CircularProgress />

                    <Typography color='primary'>Sorry, this web app needs a second to wake up!</Typography>
                </Grid>
            </Grid>
            <Grid container mt={4} width='100%'>
                <Grid container item direction='row' justifyContent='center' p={2}>
                    <Grid container item xs={12} lg={10}>
                        {main}
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
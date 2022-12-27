import React, { useState } from 'react'
import { Button, Card, Grid, Typography } from '@mui/material'

export default function PortfolioItem({ name, url, detailsUrl, github, image, description, setLoading }) {

    const [hover, setHover] = useState(false)

    return (
        <Card sx={{ marginBottom: 5 }}>
            <Grid container direction='row' maxHeight={{ md: '360px' }}>
                <Grid container item xs={12} md={6} height='100%'>
                    <Button onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} sx={{ height: '100%', width: '100%', p: 0, borderRadius: 0, opacity: hover ? .8 : 1.0, transition: '.3s ease-in-out' }} href={url} onClick={() => setLoading(true)}
                    // startIcon={<img className='img-fluid' style={{ objectFit: 'cover', height: { xl: '360px' } }} alt='' src={image} />}
                    >
                        <img className='img-fluid' style={{ objectFit: 'cover', height: { md: '360px' } }} alt='' src={image && image} />
                    </Button>
                </Grid>
                <Grid container item xs={12} md={6} height='100%' p={{xs: 2, md: 3}}>
                    <Grid container item direction='column' xs={12}>
                        <Typography variant='h5' marginBottom={0} color='primary'>{name}</Typography>
                    </Grid>

                    <Grid container item direction='column' wrap={{ xs: 'wrap-reverse', xl: 'wrap' }}>
                        <Grid container item direction='row' xs={12} my={{ xs: 0, md: 2 }} order={{ xs: 3, md: 2 }}>
                            <Typography whiteSpace='break-spaces' variant={{ xs: 'body1', lg: 'h6' }}>{description}</Typography>
                        </Grid>

                        <Grid container item direction='row' xs={12} columnGap={1} my={{ xs: 2, lg: 0 }} mt={{ xs: 2, md: 'auto' }} order={{ xs: 2, md: 3 }}>
                            <Grid container item direction='column' xs='auto' paddingLeft={0}>
                                <Button href={url} variant='outlined' onClick={() => setLoading(true)}>Visit</Button>
                                {/* <div className='btn btn-outline-primary justify-content-center align-items-center'>View WebApp</div> */}
                            </Grid>
                            {detailsUrl ?
                                <Grid container item direction='column' xs='auto'>
                                    <Button href={detailsUrl} variant='outlined'>Details</Button>
                                    {/* <div className='btn btn-outline-info justify-content-center align-items-center'>More Details</div> */}
                                </Grid>
                                :
                                null
                            }
                            {github ?
                                <Grid container item direction='column' xs='auto'>
                                    <Button href={github} variant='outlined'>Github</Button>
                                    {/* <div className='btn btn-outline-info justify-content-center align-items-center'>More Details</div> */}
                                </Grid>
                                :
                                null
                            }
                        </Grid>
                    </Grid>
                    {/* </Grid> */}

                    {/* <div className='btn position-absolute bottom-0 right-0'>View Webapp
                                    </div> */}
                </Grid>
            </Grid>
        </Card>

    )
}
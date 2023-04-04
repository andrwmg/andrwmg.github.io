import { Grid, Typography } from "@mui/material"
import React from "react"
import websites from "../seeds/SoftwareSeeds";
import Card from "./Card"

export default function Projects({handleClickOpen, modalOpen}) {
    return (
        <Grid
            item
            container
            direction="column"
            px={{ xs: 2, sm: 2, md: 4, xl: 5 }}
            rowGap={4}
            alignItems='center'
        >
            <Typography variant='h2'>
                Projects
            </Typography>
            <Grid item container direction="row" gap={6} justifyContent='center'>
                {websites.map((w) => (
                    <Card
                        key={w.title}
                        handleClickOpen={handleClickOpen}
                        modalOpen={modalOpen}
                        {...w}
                    />
                )
                )}
            </Grid>
        </Grid>

    )
}
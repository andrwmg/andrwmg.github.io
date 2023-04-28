import { Grid, Typography } from "@mui/material"
import React from "react"
import websites from "../seeds/SoftwareSeeds";
import Card from "./Card"
import Card2 from './Card copy'

export default function Projects({handleClickOpen, modalOpen, theme}) {
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
            <Grid item container direction="row" gap={4} justifyContent='center' maxWidth='100vw' overflow='hidden' pb={2}>
                {/* {websites.map((w) => (
                    <Card
                        key={w.title}
                        handleClickOpen={handleClickOpen}
                        modalOpen={modalOpen}
                        theme={theme}
                        {...w}
                    />
                )
                )} */}
                {websites.map((w) => (
                    <Card2
                        key={w.title}
                        handleClickOpen={handleClickOpen}
                        modalOpen={modalOpen}
                        theme={theme}
                        {...w}
                    />
                )
                )}
            </Grid>
        </Grid>

    )
}
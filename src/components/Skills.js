import { Grid, Typography } from '@mui/material'
import React from 'react'
import Skill from './Skill'
import react from '../images/react.png'
import html from '../images/html.png'
import css from '../images/css.png'
import javascript from '../images/javascript.png'
import python from '../images/python.png'
import mongodb from '../images/mongodb.png'
import express from '../images/express.png'
import node from '../images/node.png'
import bootstrap from '../images/bootstrap.png'
import mui from '../images/mui.png'
import illustrator from '../images/illustrator.png'
import photoshop from '../images/photoshop.png'
import c from '../images/c.png'
import sql from '../images/sql.png'
import jquery from '../images/jquery.png'

const skills = [
    { name: 'HTML', progress: 80, icon: html },
    { name: 'CSS', progress: 80, icon: css },
    { name: 'JavaScript', progress: 70, icon: javascript },
    { name: 'React', progress: 80, icon: react },
    { name: 'MUI', progress: 80, icon: mui },
    { name: 'Bootstrap', progress: 80, icon: bootstrap },
    { name: 'jQuery', progress: 80, icon: jquery },
    { name: 'Node', progress: 60, icon: node },
    { name: 'MongoDB', progress: 60, icon: mongodb },
    { name: 'Illustrator', progress: 80, icon: illustrator },
    { name: 'Photoshop', progress: 60, icon: photoshop },
    { name: 'Python', progress: 60, icon: python },
    { name: 'Express', progress: 60, icon: express },
    { name: 'C', progress: 60, icon: c },
    { name: 'SQL', progress: 60, icon: sql },

]
export default function Skills() {
    return (
        <Grid
            container
            item
            direction="row"
            justifyContent={{
                xs: "center"
            }}
            rowGap={4}
            width='100%'
            maxWidth="100vw"
        >
            <Grid
                container
                item
                direction="column"
                xs={12}
                md={8}
                rowGap={4}
                px={{ xs: 2, sm: 2, md: 4, xl: 5 }}
            >

                <Grid container item direction='row' justifyContent='center'>
                    <Typography variant='h2'>
                        Skills
                    </Typography>
                </Grid>
                <Grid container item columnGap={{ xs: 2, sm: 4 }} rowGap={4} direction='row' justifyContent='center'>
                    {skills.map((skill, index) => (
                        <Skill key={skill.name} index={index} skill={skill.name} icon={skill.icon} size={{ xs: '40px', sm: '40px' }} />
                    ))}
                </Grid>

            </Grid>
        </Grid>
    )
}
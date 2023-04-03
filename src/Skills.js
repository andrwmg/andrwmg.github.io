import { Grid, Typography } from '@mui/material'
import { blue } from 'material-ui-colors'
import React from 'react'
import Skill from './SkillMui'
import react from './react.png'
import html from './html.png'
import css from './css.png'
import javascript from './javascript.png'
import python from './python.png'
import mongodb from './mongodb.png'
import express from './express.png'
import node from './node.png'
import bootstrap from './bootstrap.png'
import mui from './mui.png'
import illustrator from './illustrator.png'
import photoshop from './photoshop.png'
import c from './c.png'
import sql from './sql.png'


const skills = [
    { name: 'HTML', progress: 80, icon: html },
    { name: 'CSS', progress: 80, icon: css },
    { name: 'JavaScript', progress: 70, icon: javascript },
    { name: 'React', progress: 80, icon: react },
    { name: 'MUI', progress: 80, icon: mui },
    { name: 'Bootstrap', progress: 80, icon: bootstrap },
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
        <>
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
        </>
    )
}
import { Grid, Typography } from '@mui/material'
import { blue } from 'material-ui-colors'
import React from 'react'
import Skill from './SkillMui'
import react from './react.png'

const skills = [
    { name: 'HTML', progress: 80 },
    { name: 'CSS', progress: 80 },
    { name: 'JavaScript', progress: 70 },
    { name: 'React', progress: 80, icon: react },
    { name: 'Bootstrap', progress: 80 },
    { name: 'MUI', progress: 80 },
    { name: 'Node', progress: 60 },
    { name: 'MongoDB', progress: 60 },
    { name: 'Illustrator', progress: 80 },
    { name: 'Photoshop', progress: 60 },
]

export default function Skills() {
    return (
        <>
            <Grid container item direction='row'>
                <Typography fontSize='1.75rem' fontWeight={600} color={blue[600]}>Skills</Typography>
            </Grid>
            <Grid container item rowGap={2} columnGap={2}>
                {skills.map((skill, index) => (
                    <Skill key={skill.name} index={index} skill={skill.name} icon={skill.icon} />
                ))}
            </Grid>
            {/* <Skill skill='HTML/CSS' progress='80' />
        <Skill skill='JavaScript' progress='60' />
        <Skill skill='React' progress='80' />
        <Skill skill='Bootstrap' progress='80' />
        <Skill skill='MUI' progress='80' />
        <Skill skill='Node' progress='60' />
        <Skill skill='MongoDB' progress='60' />
        <Skill skill='Illustrator' progress='80' />
        <Skill skill='Photoshop' progress='60' /> */}
        </>

    )
}
import { Grid, Typography } from '@mui/material'
import { blue, grey } from 'material-ui-colors'
import React from 'react'

const items = [
    {
        company: 'Inseego Corp',
        title: 'Senior Mechanical Engineer',
        info: 'Aug 2020 - Oct 2022',
        details: [
            'Designed 5G wireless device plastic housings and electromechanical assemblies.',
            'Performed environmental and mechanical QA testing to validate production candidates.',
            'Optimized rework process for regulatory testing to increase output by 50%.',
            'Led cross-functional collaboration to simplify designs while maintaining performance.',
            'Managed OEM-designed product development.'
        ]
    },
    {
        company: 'HM Electronics Inc.',
        title: 'Senior Mechanical Engineer',
        info: 'Mar 2014 - Aug 2020',
        details: [
            'Served as Lead Mechanical Engineer on several design and sustaining projects simultaneously.',
            'Conducted cost reduction efforts to reduce BOM by 20% and streamline manufacturing.',
            'Led sustaining efforts with root cause analysis and 50+ design improvements to legacy products.',
            'Managed and trained interns with an 80% success rate retaining them as full-time engineers.',
            'Developed product ID and QA test equipment.'
        ]
    }
]

export default function Experience() {

    return (
        <>
            <Typography fontSize='1.75rem' fontWeight={600} color={blue[600]}>Experience</Typography>
            <Grid container item rowGap={2}>
                {items.map((item, index) => (
                <Grid key={item.company} container item direction='column'>
                    <Typography fontSize='1.4rem' fontWeight={600}>
                        {item.company}
                    </Typography>
                    <Typography variant='subtitle1' fontSize='1rem' fontWeight='400'>
                        {item.title}
                    </Typography>
                    <Typography color={grey[600]} fontSize='1rem' fontWeight='400'>
                        {item.info}
                    </Typography>
                    <ul style={{paddingInlineStart: 16, marginBlockEnd: index === 1 && 0}}>
                        <Grid item container direction='column' rowGap={1.5}>
                            {item.details.map(detail => (
                                <li key={detail} type="circle">{detail}</li>
                            ))}
                        </Grid>

                    </ul>
                </Grid>
            ))}
        </Grid>
            </>
            )
}
import { Divider, Grid, Typography } from '@mui/material'
import { blue } from 'material-ui-colors'
import React from 'react'

export default function Education() {
    const education = [
        {title: 'Udemy', 
    details: 'The Modern React Bootcamp',
    dates: 'Sep 2022 - Nov 2022'
    },
    {title: 'Udemy', 
    details: 'The Web Developer Bootcamp 2022',
    dates: 'Jun 2022 - Aug 2022'
    },
    {title: 'UCSD Extension', 
    details: 'Adobe Illustrator',
    dates: 'Oct 2016 - Dec 2016'
    },
    {title: 'University of Delaware', 
    details: 'B.S. Mechanical Engineering',
    dates: 'Aug 2008 - Dec 2012'
    }
]
    return (
        <>
<h2 className="text-primary">Education</h2>
        <hr className="text-muted"></hr>
        {education.map(item=>(
            <div className="my-4 mt-md-0">
            <h3 className="">{item.title}</h3>
            <h4 className="subTitle">{item.details}</h4>
            <h4 className="text-muted">{item.dates}</h4>
        </div>
        ))}

            {/* <div className="my-4 mt-md-0">
                <h3 className="">Udemy</h3>
                <h4 className="subTitle">The Modern React Bootcamp</h4>
                <h4 className="text-muted">Sep 2022 - Nov 2022</h4>
            </div>
            <div className="my-4">
                <h3 className="">Udemy</h3>
                <h4 className="subTitle">The Web Developer Bootcamp 2022</h4>
                <h4 className="text-muted">Jun 2022 - Aug 2022</h4>
            </div>
            <div className="my-4">
                <h3 className="">UCSD Extension</h3>
                <h4 className="subTitle">Adobe Illustrator</h4>
                <h4 className="text-muted">Oct 2016 - Dec 2016</h4>
            </div>
            <div className="mt-4">
                <h3 className="">University of Delaware</h3>
                <h4 className="subTitle">B.S. Mechanical Engineering</h4>
                <h4 className="text-muted">Aug 2008 - Dec 2012</h4>
            </div> */}
        </>
    )
}
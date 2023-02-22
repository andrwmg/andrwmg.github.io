import { ArrowCircleLeftOutlined, ArrowCircleRightOutlined } from "@mui/icons-material";
import { Grid, IconButton, Typography, useScrollTrigger, Zoom } from "@mui/material";
import { Box } from "@mui/system";
import { blue } from "material-ui-colors";
import React, { useRef, useState } from "react";
import PortfolioCard3 from "./PortfolioCard copy 2";
import websites from "./SoftwareSeeds";

export default function CardContainer({handleClickOpen}) {

    const [scroll, setScroll] = useState(0)
    const scrollRef = useRef(null)

    const handleScroll = (type) => {
        const scrollDistance = 350
        if (type === 'left') {
            scrollRef.current.scrollLeft -= scrollDistance
        } else {
            scrollRef.current.scrollLeft += scrollDistance
        }
        setScroll(scrollRef.current.scrollLeft)
    }

    return (
        <Grid item container position='relative' direction='column' maxWidth='100vw' px={{ xs: 2, sm: 2, md: 4, xl: 5 }} overflow='hidden'>
            <Typography fontSize='1.75rem' fontWeight={600} mb={3} color={blue[600]}>Software Portfolio</Typography>
            <Box display='flex' flexDirection='row' maxWidth='100%' height='450px' wrap='nowrap' columnGap={2} overflow='scroll' ref={scrollRef}>
                {websites.map(w => (
                    <PortfolioCard3 key={w.title} wide={w.wide} src={w.src} company={w.company} title={w.title} body={w.body} bullets={w.bullets} productUrl={w.productUrl} view={w.view} details={w.details} github={w.github} handleClickOpen={handleClickOpen} />
                ))}
            </Box>
            {/* <Grid container item alignItems='center' justifyContent='space-between' position='absolute' top={0} bottom={0} right={0} left={0}>
                {scroll > 0 && (
                    <IconButton onClick={handleScroll('left')}>
                        <ArrowCircleLeftOutlined />
                    </IconButton>
                )}
                {scroll < scrollRef.current?.scrollWidth - scrollRef.current?.clientWidth && (
                    <IconButton onClick={handleScroll('right')}>
                        <ArrowCircleRightOutlined />
                    </IconButton>
                )}
            </Grid> */}
        </Grid>
    )
}


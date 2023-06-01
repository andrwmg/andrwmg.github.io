import { Grid, Typography } from "@mui/material"
import React, {useRef, useEffect, useState} from "react"
import websites from "../seeds/SoftwareSeeds";
import Card from './Card3'
import { motion, useAnimation } from "framer-motion";

export default function Projects({handleClickOpen, modalOpen, theme}) {

    const containerRef = useRef()
    const controls = useAnimation()

    const [animated, setAnimated] = useState(false)

    const animationVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      };
    
      const handleIntersection = (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
          controls.start('visible');
          setAnimated(true)
        } else {
            setAnimated(false)
          controls.start('hidden');
        }
      };

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
          threshold: 0.1, // Adjust the threshold value as needed
        });
    
        if (containerRef.current) {
          observer.observe(containerRef.current);
        }
    
        return () => {
          if (containerRef.current) {
            observer.unobserve(containerRef.current);
          }
        };
      }, []);

    return (
        <Grid
            item
            container
            direction="column"
            px={{ xs: 2, sm: 2, md: 4, xl: 5 }}
            rowGap={4}
            alignItems='center'
            ref={containerRef}
        >
            <Typography variant='h2'>
                Projects
            </Typography>
            <Grid item container gap={4} justifyContent='center' maxWidth='100%' pb={2}>
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
                {websites.map((website, index) => (
                    <Grid container item direction='column' xs={12} md={5.5}
                    >
                    <motion.div initial='hidden' exit='visible' animate={controls} transition={{duration: animated ? .3 : .6, delay: animated ? 0 : .4 * index, type: 'tween'}} variants={animationVariants} style={{width: '100%'}}>
                    <Card
                        key={website.title}
                        handleClickOpen={handleClickOpen}
                        modalOpen={modalOpen}
                        theme={theme}
                        delay={.2 * (index + 1)}
                        {...website}
                    />
                    </motion.div>
                    </Grid>
                )
                )}
            </Grid>
        </Grid>

    )
}
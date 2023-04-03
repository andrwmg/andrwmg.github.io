import styled from "@emotion/styled";
import { Grid, Link, Typography } from "@mui/material";
import { blue, grey } from "material-ui-colors";
import React from "react";

const EducationLink = styled(Link)({
  textDecoration: "none",
  color: "inherit",
});

const education = [
  {
    school: "Harvard University",
    order: { xs: 1 },
    items: [
      {
        title: "CS50 Certificate",
        skills: ["C"],
        dates: "Jan 2023 - March 2023",
      },
    ],
  },

  {
    school: "UC San Diego",
    order: { xs: 3, sm: 2, md: 3, lg: 2 },
    items: [
      {
        title: "Adobe Illustrator",
        skills: ["Illustrator"],
        dates: "Oct 2016 - Dec 2016",
      },
    ],
  },

  {
    school: "Udemy",
    order: { xs: 2, sm: 3, md: 2, lg: 3 },
    items: [
      // {details: 'UI/UX Product Design Bootcamp',
      // dates: 'Jan 2023 - Present'},
      // {details: 'React Native Bootcamp',
      // dates: 'Jan 2023 - Present'},
      {
        title: "React Bootcamp",
        skills: ["React", "MUI", "JavaScript", "Express", "NextJS"],
        dates: "Sep 2022 - Nov 2022",
        link: "https://www.udemy.com/certificate/UC-1f238874-5b9d-42f6-b3ea-c297fc173f6a/",
      },
      {
        title: "Full Stack Web Dev Bootcamp",
        skills: [
          "HTML",
          "CSS",
          "JavaScript",
          "Bootstrap",
          "NodeJS",
          "Express",
          "MongoDB",
        ],
        dates: "Jun 2022 - Aug 2022",
        link: "https://www.udemy.com/certificate/UC-ed7445e1-3715-4dfd-9f9d-ffcc1f16c431/",
      },
    ],
  },

  {
    school: "University of Delaware",
    order: { xs: 4 },
    items: [
      {
        title: "B.S. Mechanical Engineering",
        skills: ["Photoshop", "Illustrator"],
        dates: "Aug 2008 - Dec 2012",
      },
    ],
  },
];

export default function Education() {
  return (
    <>
      <Typography
        fontSize="1.75rem" 
        fontWeight={600}
        width="100%"
        color={blue[600]}
      >
        Education
      </Typography>
      <Grid container item wrap="wrap" columnGap={6} rowGap={4}>
        {education.map((item, index) => (
          <Grid
            container
            item
            key={item.school}
            order={item.order}
            direction="column"
            xs={12}
            sm
            md={12}
            lg
            minWidth="40%"
          >
            <Typography noWrap sx={{ fontSize: "1.4rem", fontWeight: "600" }}>
              {item.school}
            </Typography>
            <Grid container item direction="column" rowGap={2}>
              {item.items.map((item) => (
                <Grid item key={item.title}>
                  {item.link ? (
                    <EducationLink href={item.link}>
                      <Typography
                        variant="subtitle1"
                        noWrap
                        fontSize="1rem"
                        fontWeight="400"
                      >
                        {item.title}
                      </Typography>
                    </EducationLink>
                  ) : (
                    <Typography
                      variant="subtitle1"
                      noWrap
                      fontSize="1rem"
                      fontWeight="400"
                    >
                      {item.title}
                    </Typography>
                  )}
                  <Typography
                    color={grey[600]}
                    fontSize="1rem"
                    fontWeight="400"
                  >
                    {item.dates}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

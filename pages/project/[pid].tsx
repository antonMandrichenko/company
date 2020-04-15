import React, { useState, useEffect } from "react";
import Layer from "../../components/Layer";
import ServicesLayout from "../../components/Services/ServicesLayout";
import { useRouter } from "next/router";
import { projects, IProject } from "../../constants/projects";
import { Typography, Grid } from "@material-ui/core";
import images from "../../assets";
import { makeStyles, createStyles } from "@material-ui/core";
import Margin from "../../components/Projects/Margin";

const useStyles = makeStyles(() =>
  createStyles({
    image: {
      width: "100%",
      height: 700,
      margin: "2rem auto",
      boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",
    },
  })
);

export default function Project(): React.ReactElement {
  const classes = useStyles();
  const router = useRouter();
  const { pid } = router.query;
  const [project, setProject] = useState<IProject | null>(null);
  useEffect(() => {
    const project = projects.find((project) => project.image === pid);
    if (project) {
      setProject(project);
    }
  }, [project, pid]);

  const getImage = (name: string): any => images[name];

  return (
    <Layer>
      <ServicesLayout>
        {project && (
          <React.Fragment>
            <Typography variant="subtitle1" style={{ textAlign: "center" }}>
              {project.title}
            </Typography>
            <Margin size={2} />
            <Typography variant="h5" style={{ textAlign: "center" }}>
              {project.text}
            </Typography>
            <Margin size={2} />
            <img
              src={getImage(project.image)}
              alt={project.image}
              className={classes.image}
            />
            <Margin size={2} />
            <Grid container spacing={4}>
              <Grid item sm={6}>
                <Typography variant="body1" align="justify">{project.mainTextLeft}</Typography>
              </Grid>
              <Grid item sm={6}>
              <Typography variant="body1" align="justify">{project.mainTextRight}</Typography>
              </Grid>
            </Grid>
          </React.Fragment>
        )}
      </ServicesLayout>
    </Layer>
  );
}

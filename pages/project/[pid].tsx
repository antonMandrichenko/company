import React, { useState, useEffect } from "react";
import Layer from "../../components/Layer";
import ServicesLayout from "../../components/Services/ServicesLayout";
import { useRouter } from "next/router";
import { projects, IProject } from "../../constants/projects";
import { Typography, Grid } from "@material-ui/core";
import images from "../../assets";
import { makeStyles, createStyles } from "@material-ui/core";
import Margin from "../../components/Projects/Margin";
import Services from "../../components/Project/Services";
import Challendge from "../../components/Project/Challendge";
import Solution from "../../components/Project/Solution";

const useStyles = makeStyles(() =>
  createStyles({
    image: {
      width: "100%",
      margin: "2rem auto 3rem",
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
              src={getImage(`main_${project.image}`)}
              alt={project.image}
              className={classes.image}
            />
            <Grid container spacing={4}>
              <Grid item sm={6}>
                <Typography variant="h4" align="justify">{project.mainTextLeft}</Typography>
              </Grid>
              <Grid item sm={6}>
              <Typography variant="h4" align="justify">{project.mainTextRight}</Typography>
              </Grid>
            </Grid>
            <Margin size={4} />
            <Services services={project.options}/>
            <Margin size={4} />
            <Challendge data={project.challendge}/>
            <Margin size={4} />
            <Solution data={project.challendge}/>
          </React.Fragment>
        )}
      </ServicesLayout>
    </Layer>
  );
}

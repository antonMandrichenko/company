import React from "react";
import { v4 } from "uuid";
import { makeStyles, createStyles, Grid } from "@material-ui/core";
import HeaderButton from "../../HeaderButton";
import ProjectBlock from "./ProjectBlock";
import images, { ImagesOptions } from "../../../assets";
import { projects } from "../../../constants/projects";


const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "79%",
      padding: "3% 0",
      height: "100vh",
      margin: "0 auto",
    },
    grid :{
      marginTop: 20
    }
  })
);

const SelectedProjects: React.SFC = () => {
  const classes = useStyles();

  const imageSelect = (key: string) => {
    const imagesObject: ImagesOptions = {
      dygma: images.dygma,
      infinity: images.infinity,
    };
    return imagesObject[key];
  };

  return (
    <div className={classes.root}>
      <HeaderButton text="Selected Projects" />
      <Grid container spacing={8} className={classes.grid}>
        {projects.map((project) => (
          <Grid item sm={6} key={v4()}>
            <ProjectBlock
              project={project}
              image={imageSelect(project.image)}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SelectedProjects;

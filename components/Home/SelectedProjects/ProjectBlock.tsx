import React from "react";
import { makeStyles, createStyles, Typography } from "@material-ui/core";
import { IProject } from "../../../constants/projects";
import { v4 } from "uuid";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "100%",
      padding: "1rem 0",
      height: "auto",
      margin: "0 auto",
    },
    image: {
      width: "100%",
      marginBottom: 20,
      boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)"
    },
    title: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 20,
    },
    options: {
      display: "flex",
      alignItems: "center",
    },
    circle: {
      width: 5,
      height: 5,
      borderRadius: "50%",
      background: "black",
      margin: "0 5px",
    },
  })
);
interface IProps {
  project: IProject;
  image: any;
}

const ProjectBlock: React.SFC<IProps> = ({ project, image }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src={image} className={classes.image} />
      <div className={classes.title}>
        <Typography>{project.title}</Typography>
        <div className={classes.options}>
          {project.options.map((option, i, arr) =>
            arr.length === 1 || i === arr.length - 1 ? (
              <Typography key={v4()}>{option}</Typography>
            ) : (
              <React.Fragment key={v4()}>
                <Typography>{option}</Typography>
                <div className={classes.circle} />
              </React.Fragment>
            )
          )}
        </div>
      </div>
      <Typography variant="subtitle1">{project.text}</Typography>
    </div>
  );
};

export default ProjectBlock;

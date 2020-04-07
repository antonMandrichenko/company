import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core";
import FirstProjectReviewBlock from "./FirstProjectReviewBlock";
import SecondProjectReviewBlock from "./SecondProjectReviewBlock";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      width: "79%",
      height: "100vh",
      padding: "3% 0",
      margin: "0 auto",
      position: "relative",
      justifyContent: "space-around",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        height: "auto",
      },
      [theme.breakpoints.down("xs")]: {
        display: "block",
        padding: "10% 0 0",
      },
    },
    block: {
      alignSelf: "flex-start",
      [theme.breakpoints.down("sm")]: {
        alignSelf: "center",
      },
    },
    lastBlock: {
      alignSelf: "flex-end",
      [theme.breakpoints.down("sm")]: {
        alignSelf: "center",
      },
    },
  })
);

const ProjectsPreview: React.SFC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.block}>
        <FirstProjectReviewBlock />
      </div>
      <div className={classes.lastBlock}>
        <SecondProjectReviewBlock />
      </div>
    </div>
  );
};

export default ProjectsPreview;

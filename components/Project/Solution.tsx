import React from "react";
import { makeStyles, createStyles, Grid } from "@material-ui/core";
import OverTitle from "./OverTitle";
import { IChallendge } from "../../constants/projects";
import images from "../../assets";
import AboutText from "./AboutText";

const height = 600;

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height,
    },
    text: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      height: "inherit",
      position: "relative",
    },
    image: {
      width: "100%",
      display: "flex",
      alignItems: "center",
    },
  })
);

interface IProps {
  data: IChallendge;
}

const Solution: React.SFC<IProps> = ({ data }) => {
  const classes = useStyles();

  const getImage = (src: string): any => images[src];
  return (
    <Grid container className={classes.root} spacing={4}>
      <Grid item sm={5} className={classes.image}>
        <img
          src={getImage(data.image)}
          alt={data.image}
          className={classes.image}
        />
      </Grid>
      <Grid item sm={7} className={classes.text}>
        <OverTitle title="Solution" isSolution />
        <AboutText text={data.text} />
      </Grid>
    </Grid>
  );
};

export default Solution;

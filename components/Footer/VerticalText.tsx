import React from "react";
import { makeStyles, createStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      position: "absolute",
      right: -56,
      bottom: 110,
    },
    name: {
      transform: "rotate(270deg)",
    },
  })
);

export default function VerticalText() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.name}>
        &copy; IOT WEB LAB {new Date().getFullYear()}
      </Typography>
    </div>
  );
}

import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "block",
      width: "75%",
      margin: "10% auto",
      [theme.breakpoints.down("md")]: {
        fontSize: 80,
        margin: "15% auto",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: 75,
        margin: "17% auto",
      },
      [theme.breakpoints.down("xs")]: {
        width: "85%",
        fontSize: 58,
        margin: "29% auto",
        wordBreak: "break-all",
      },
    },
  })
);

export default function MainTitle() {
  const classes = useStyles();
  return (
    <Typography variant="h1" className={classes.root}>
      Team of professionals to solve problems and realize your great ideas
    </Typography>
  );
}

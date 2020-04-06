import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      display: "block",
      width: "79%",
      margin: "0 auto 10%",
      [theme.breakpoints.down("md")]: {
        fontSize: 80,
        margin: "0 auto 15%",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: 75,
        margin: "0 auto 12%",
      },
      [theme.breakpoints.down("xs")]: {
        width: "85%",
        fontSize: 58,
        margin: "5% auto 15%",
        wordBreak: "break-all",
      },
    },
  })
);

export default function MainTitle() {
  const classes = useStyles();
  return (
    <Typography variant="h1" className={classes.title}>
      Team of professionals to solve problems and realize your great ideas
    </Typography>
  );
}

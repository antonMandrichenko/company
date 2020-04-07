import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      display: "block",
      width: "80%",
      margin: "0 auto",
      [theme.breakpoints.down("md")]: {
        fontSize: 80,
      },
      [theme.breakpoints.down(1100)]: {
        fontSize: 75,
      },
      [theme.breakpoints.down(760)]: {
        fontSize: 66,
      },
      [theme.breakpoints.down("xs")]: {
        width: "85%",
        fontSize: 58,
        marginTop: "5%",
      },
      [theme.breakpoints.down(450)]: {
        fontSize: 47,
        marginTop: "25%",
      },
      [theme.breakpoints.down(380)]: {
        fontSize: 47,
        marginTop: "10%",
      },
      [theme.breakpoints.down(330)]: {
        fontSize: 38,
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

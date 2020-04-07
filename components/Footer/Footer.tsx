import React from "react";
import Box from "@material-ui/core/Box";
import {
  makeStyles,
  createStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import FooterContent from "./FooterContent";
import VerticalText from "./VerticalText";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: theme.palette.secondary.main,
      color: theme.palette.getContrastText(theme.palette.secondary.main),
      position: "relative",
    },
    layer: {
      width: "80%",
      padding: "3% 0",
      margin: "0 auto",
    },
    title: {
      width: "40%",
      margin: "40px 0 50px",
      [theme.breakpoints.down(1100)]: {
        fontSize: 30,
      },
    },
  })
);

export default function Footer() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <div className={classes.layer}>
        <Typography variant="subtitle2" className={classes.title}>
          Let us bring your great ideas to life! Get in touch.
        </Typography>
        <FooterContent/>
        <VerticalText/>
      </div>
    </Box>
  );
}

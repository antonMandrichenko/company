import React from "react";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "absolute",
      bottom: 30,
      left: "50%",
      transform: "translate(-50%, 0)",
    },
    text: {
      display: "block",
      textAlign: "center",
    },
    arrow: {
      opacity: 0,
      position: "absolute",
      left: "49%",
      top: 20,
      transformOrigin: "0 50%",
      transform: "translate3d(-50%, -50%, 0)",
      [theme.breakpoints.down(700)]: {
        left: "46%",
      },
      "&:before, &:after": {
        content: '""',
        background: "black",
        display: "block",
        height: 3,
        position: "absolute",
        top: 0,
        left: 0,
        width: 30,
      },
      "&:before": {
        transform: "rotate(45deg) translateX(-23%)",
        transformOrigin: "top left",
      },
      "&:after": {
        transform: "rotate(-45deg) translateX(23%)",
        transformOrigin: "top right",
      },
    },
    arrowFirst: {
      animation: "$arrow-movement 2s ease-in-out infinite",
    },
    arrowSecond: {
      animation: "$arrow-movement 2s 1s ease-in-out infinite",
    },
    box: {
      marginTop: "1rem",
      position: "relative",
      height: 40,
    },
    "@keyframes arrow-movement": {
      "0%": {
        opacity: 0,
        top: "0",
      },
      "70%": {
        opacity: 1,
      },
      "100%": {
        opacity: 0,
      },
    },
  })
);

interface iProps {
  onScrollDown: () => void;
}

const LearnMore: React.SFC<iProps> = ({ onScrollDown }) => {
  const classes = useStyles();
  return (
    <div onClick={onScrollDown} className={classes.root}>
      <Typography variant="body1" className={classes.text}>
        Learn More
      </Typography>
      <div className={classes.box}>
        <div className={clsx(classes.arrow, classes.arrowFirst)}></div>
        <div className={clsx(classes.arrow, classes.arrowSecond)}></div>
      </div>
    </div>
  );
};

export default LearnMore;

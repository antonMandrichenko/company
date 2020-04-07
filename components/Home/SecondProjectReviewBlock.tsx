import React from "react";
import { makeStyles, createStyles, Theme, Typography } from "@material-ui/core";
import AppButton from "./AppButton";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 615,
      position: "relative",
      "&:before": {
        content: '""',
        borderTop: `solid 1px ${theme.palette.text.primary}`,
        position: "absolute",
        left: 0,
        top: 0,
        zIndex: 1,
        width: 100,
      },
    },
    margin: {
      padding: "20px 0 10px",
    },
  })
);

const SecondProjectReviewBlock: React.SFC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="body1" className={classes.margin}>
        Our services
      </Typography>
      <Typography variant="subtitle1">Development & Support</Typography>
      <Typography variant="subtitle1">UI/UX Design</Typography>
      <Typography variant="subtitle1">Digital Marketing</Typography>
      <Typography variant="subtitle1">Testing</Typography>
      <Typography variant="subtitle1">
        Project Management & Outsource
      </Typography>
      <Typography variant="subtitle1">Recruting</Typography>
      <AppButton text="More about services"/>
    </div>
  );
};

export default SecondProjectReviewBlock;

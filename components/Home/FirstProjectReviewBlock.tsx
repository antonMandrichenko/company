import React from "react";
import { makeStyles, createStyles, Theme, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingLeft: "10%",
      width: 600,
      position: "relative",
      "&:before": {
        content: '""',
        borderLeft: `solid 1px ${theme.palette.text.primary}`,
        position: "absolute",
        left: 0,
        top: 0,
        zIndex: 1,
        height: 100,
      },
    },
    margin: {
      marginTop: "2rem"
    }
  })
);

const FirstProjectReviewBlock: React.SFC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="subtitle1">
        We like to work on projects and care about creating beautiful and usable
        interfaces. We will ensure that overall application is robust and easy
        to maintain.
      </Typography>
      <Typography variant="body1" className={classes.margin}>
        By hiring us, you'll get a professional work as well as a reliable team
        with high value on personal skills. Contact us and you will not be
        disappointed!
      </Typography>
    </div>
  );
};

export default FirstProjectReviewBlock;

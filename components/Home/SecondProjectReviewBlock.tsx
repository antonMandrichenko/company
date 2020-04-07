import React from "react";
import { makeStyles, createStyles, Typography } from "@material-ui/core";
import AppButton from "./AppButton";
import HeaderButton from "../HeaderButton";
import Link from "next/link";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: 615,
      position: "relative",
    },
    button: {
      position: "absolute",
      bottom: 12,
      left: -250,
    },
  })
);

const SecondProjectReviewBlock: React.SFC = () => {
  const classes = useStyles();

  return (
    <Link href="/services">
      <div className={classes.root}>
        <HeaderButton text="Our services" />
        <Typography variant="subtitle1">Development & Support</Typography>
        <Typography variant="subtitle1">UI/UX Design</Typography>
        <Typography variant="subtitle1">Digital Marketing</Typography>
        <Typography variant="subtitle1">Testing</Typography>
        <Typography variant="subtitle1">
          Project Management & Outsource
        </Typography>
        <Typography variant="subtitle1">Recruting</Typography>
        <div className={classes.button}>
          <AppButton text="More about services" href="/services" />
        </div>
      </div>
    </Link>
  );
};

export default SecondProjectReviewBlock;

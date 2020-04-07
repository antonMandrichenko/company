import React from "react";
import { makeStyles, createStyles, Typography, Theme } from "@material-ui/core";
import AppButton from "./AppButton";
import HeaderButton from "../HeaderButton";
import Link from "next/link";
import { services } from "../../constants/services";
import { v4 } from "uuid";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 615,
      position: "relative",
      [theme.breakpoints.down(1100)]: {
        width: 400,
      },
      [theme.breakpoints.down("xs")]: {
        width: "95%",
      },
    },
    button: {
      position: "absolute",
      bottom: 12,
      left: -250,
      [theme.breakpoints.down(1100)]: {
        position: "relative",
        bottom: 0,
        left: 0,
        marginTop: "2rem"
      },
    },
    title: {
      [theme.breakpoints.down(1100)]: {
        fontSize: 29,
      },
    },
  })
);

const SecondProjectReviewBlock: React.SFC = () => {
  const classes = useStyles();

  const renderTypography = (text: string) => (
    <Typography variant="subtitle1" className={classes.title}>
      {text}
    </Typography>
  );

  return (
    <Link href="/services">
      <div className={classes.root}>
        <HeaderButton text="Our services" />
        <React.Fragment>
          {services.map((service) => (
            <React.Fragment key={v4()}>
              {renderTypography(service)}
            </React.Fragment>
          ))}
        </React.Fragment>

        <div className={classes.button}>
          <AppButton text="More about services" href="/services" />
        </div>
      </div>
    </Link>
  );
};

export default SecondProjectReviewBlock;

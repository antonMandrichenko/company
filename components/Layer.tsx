import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Footer from "./Footer";
import MainAppBar from "./MainAppBar";

const useStyles = makeStyles(() =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
  })
);

interface IProps {}

export default function Layer({
  children,
}: React.PropsWithChildren<IProps>) {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <MainAppBar />
      {children}
      <Footer />
    </div>
  );
}

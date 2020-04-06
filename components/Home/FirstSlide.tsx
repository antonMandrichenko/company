import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: theme.palette.background.paper,
      padding: "10% 0 8%",
      height: "90vh"
    },
  })
);
interface IProps {}

export default function FirstSlide({
  children,
}: React.PropsWithChildren<IProps>) {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
}

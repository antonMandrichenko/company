import React from "react";
import { makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      padding: "10% 0 8%",
      width: "80%",
      margin: "0 auto",
    },
  })
);
interface IProps {}

export default function ServicesLayout({
  children,
}: React.PropsWithChildren<IProps>) {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
}

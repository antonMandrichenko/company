import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    root: {},
  })
);

interface IProps {
  text: string;
}

export default function MainPageTitle({ text }: IProps): React.ReactElement {
  const classes = useStyles();

  return (
    <Typography variant="h2" className={classes.root}>
      {text}
    </Typography>
  );
}

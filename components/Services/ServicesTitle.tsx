import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const height = 100;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      paddingLeft: "2rem",
      marginBottom: "4rem",
      height,
      "&:before": {
        content: '""',
        borderLeft: `solid 1px ${theme.palette.text.primary}`,
        position: "absolute",
        left: 0,
        top: 0,
        zIndex: 1,
        height,
      },
    },
  })
);

interface IProps {
  text: string;
}

export default function ServicesTitle({ text }: IProps): React.ReactElement {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h3">{text}</Typography>
    </div>
  );
}

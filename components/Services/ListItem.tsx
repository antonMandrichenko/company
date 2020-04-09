import React from "react";
import { makeStyles, createStyles, Typography, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      paddingLeft: "2.5rem",
      marginBottom: "1rem",
      "&:before": {
        content: '""',
        borderBottom: `solid 1px ${theme.palette.text.primary}`,
        position: "absolute",
        left: 0,
        top: 15,
        width: 20,
      },
    },
  })
);
interface IProps {
  text: string;
}

export default function ListItem({ text }: IProps): React.ReactElement {
  const classes = useStyles();
  return (
    <Typography variant="body1" className={classes.root}>
      {text}
    </Typography>
  );
}

import React from "react";
import { makeStyles, createStyles, Typography, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      width: "auto",
      transform: "rotate(270deg)",
      position: "absolute",
      bottom: "30%",
      right: 0,
      "&:before": {
        content: '""',
        borderBottom: `solid 1px ${theme.palette.text.primary}`,
        position: "absolute",
        left: 250,
        top: "50%",
        width: 200,
      },
    },
  })
);

interface IProps {
  title: string;
}

const OverTitle: React.SFC<IProps> = ({ title }) => {
  const classes = useStyles();
  return (
    <Typography variant="subtitle2" className={classes.title}>
      {title}
    </Typography>
  );
};

export default OverTitle;

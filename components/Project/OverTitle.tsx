import React from "react";
import { makeStyles, createStyles, Typography, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      width: "auto",
      transform: "rotate(270deg)",
      position: "absolute",
      bottom: "20%",
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
  isSolution: boolean;
}

const OverTitle: React.SFC<IProps> = ({ title, isSolution }) => {
  const classes = useStyles();
  return (
    <Typography
      variant="subtitle2"
      className={classes.title}
      style={{ left: isSolution ? "" : -180, right: isSolution ? -140 : "" }}
    >
      {title}
    </Typography>
  );
};

export default OverTitle;

import React from "react";
import { makeStyles, createStyles, Theme, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      "&:before": {
        content: '""',
        borderTop: `solid 1px ${theme.palette.text.primary}`,
        position: "absolute",
        left: 0,
        top: 0,
        zIndex: 1,
        width: 250,
      },
    },
    margin: {
      padding: "20px 0 10px",
    },
  })
);

interface IProps {
  text: string;
}

const HeaderButton: React.SFC<IProps> = ({ text }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="body1" className={classes.margin}>
        {text}
      </Typography>
    </div>
  );
};

export default HeaderButton;

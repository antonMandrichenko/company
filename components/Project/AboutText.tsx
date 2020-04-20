import React, { useEffect, useState } from "react";
import { makeStyles, createStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    text: {
      marginBottom: "1rem",
    },
  })
);

interface IProps {
  text: string;
}

const even = (n: number) => !(n % 2);

const AboutText: React.SFC<IProps> = ({ text }) => {
  const classes = useStyles();
  const [sentencies, setSentencies] = useState<string[]>([]);

  useEffect(() => {
    setSentencies(
      text.split(". ").reduce((acc: string[], item, i, arr) => {
        if (even(i)) {
          return acc;
        } else {
          return [...acc, arr[i-1] + '. ' + item];
        }
      }, [])
    );
  }, []);

  return (
    <React.Fragment>
      {sentencies.map((sentence) => (
        <Typography key={sentence} align="justify" className={classes.text}>
          {sentence}
        </Typography>
      ))}
    </React.Fragment>
  );
};

export default AboutText;

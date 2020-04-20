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

const AboutText: React.SFC<IProps> = ({ text }) => {
  const classes = useStyles();
  const [sentencies, setSentencies] = useState<string[]>([]);

  useEffect(() => {
    setSentencies(text.split(". "));
  }, []);

  // const even = n => !(n % 2);

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

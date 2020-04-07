import React from "react";
import { v4 } from "uuid";
import {
  makeStyles,
  createStyles,
  Typography,
  Grid,
} from "@material-ui/core";
import { content } from "../../constants/footerContent";

const useStyles = makeStyles(() =>
  createStyles({
    contentTitle: {
      marginBottom: "1rem",
    },
    link: {
      color: "inherit",
      textDecoration: "none",
    },
  })
);

export default function FooterContent() {
  const classes = useStyles();
  return (
    <Grid container>
      {content.map((contentItem) => (
        <Grid item sm={3} key={v4()}>
          <Typography variant="body1" className={classes.contentTitle}>
            {contentItem.title}
          </Typography>
          <React.Fragment>
            {contentItem.links &&
              contentItem.links.map((link) => (
                <a
                  key={v4()}
                  href={link.link}
                  target="_blank"
                  className={classes.link}
                >
                  <div>{link.text}</div>
                </a>
              ))}
          </React.Fragment>
          <React.Fragment>
            {contentItem.mainText &&
              contentItem.mainText.map((text) => (
                <Typography key={v4()} variant="body2">
                  {text}
                </Typography>
              ))}
          </React.Fragment>
        </Grid>
      ))}
    </Grid>
  );
}

import React from "react";
import { makeStyles, createStyles, Grid, Typography } from "@material-ui/core";
import ServicesTitle from "./ServicesTitle";
import {
  developmentServices,
  IDevelopmentServices,
} from "../../constants/developmentServices";
import ListItem, { EnumVariant } from "./ListItem";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      padding: "10% 0 8%",
    },
    title: {
      marginBottom: "2rem",
    },
  })
);
interface IProps {}

export default function Development(): React.ReactElement<IProps> {
  const classes = useStyles();
  const renderService = (service: IDevelopmentServices) => (
    <React.Fragment>
      <Typography variant="h4" className={classes.title}>
        {service.title}
      </Typography>
      {service.services.map((item) => (
        <ListItem key={item} text={item} variant={EnumVariant.body1} />
      ))}
    </React.Fragment>
  );
  return (
    <div className={classes.root}>
      <ServicesTitle text="Development & Support" />
      <Grid container spacing={6}>
        {developmentServices.map((service) => (
          <Grid item sm={4} key={service.title}>
            {renderService(service)}
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

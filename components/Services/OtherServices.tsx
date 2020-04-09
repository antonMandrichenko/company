import React from "react";
import { makeStyles, createStyles, Grid } from "@material-ui/core";
import ServicesTitle from "./ServicesTitle";
import { otherServices, IOtherServices } from "../../constants/otherServices";
import ListItem from "./ListItem";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      // padding: "10% 0 8%",
    },
    title: {
      marginBottom: "2rem",
    },
  })
);
interface IProps {}

export default function OtherServices(): React.ReactElement<IProps> {
  const classes = useStyles();
  const renderService = (service: IOtherServices) => (
    <React.Fragment>
      <ServicesTitle text={service.title} />
      {service.services.map((item) => (
        <ListItem key={item} text={item} />
      ))}
    </React.Fragment>
  );
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {otherServices.map((service) => (
          <Grid item sm={4} key={service.title}>
            {renderService(service)}
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

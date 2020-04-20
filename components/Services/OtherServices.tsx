import React from "react";
import { Grid } from "@material-ui/core";
import ServicesTitle from "./ServicesTitle";
import { otherServices, IOtherServices } from "../../constants/otherServices";
import ListItem, { EnumVariant } from "./ListItem";

interface IProps {}

export default function OtherServices(): React.ReactElement<IProps> {
  const renderService = (service: IOtherServices) => (
    <React.Fragment>
      <ServicesTitle text={service.title} />
      {service.services.map((item) => (
        <ListItem key={item} text={item} variant={EnumVariant.body1} />
      ))}
    </React.Fragment>
  );
  return (
    <div>
      <Grid container spacing={2}>
        {otherServices.map((service) => (
          <Grid item lg={4} md={6} key={service.title}>
            {renderService(service)}
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

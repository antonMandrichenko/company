import React from "react";
import { makeStyles, createStyles, Typography, Grid } from "@material-ui/core";
import { IOption } from "../../constants/projects";
import ListItem, { EnumVariant } from "../Services/ListItem";
import Margin from "../Projects/Margin";

const useStyles = makeStyles(() =>
  createStyles({
    item: {
      marginBottom: ".6rem",
    },
  })
);

interface IProps {
  services: IOption[];
}

const Services: React.SFC<IProps> = ({ services }) => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="subtitle2">Services</Typography>
      <Margin size={3} />
      <Grid container spacing={4}>
        {services.map((service) => (
          <Grid item key={service.name} sm={3}>
            <ListItem text={service.name} variant={EnumVariant.h4}/>
            <React.Fragment>
              {service.skills.map((skill) => (
                <Typography key={skill} variant="body1" className={classes.item}>
                  {skill}
                </Typography>
              ))}
            </React.Fragment>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Services;

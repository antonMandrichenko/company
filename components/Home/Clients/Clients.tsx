import React from "react";
import { v4 } from "uuid";
import { makeStyles, createStyles, Grid, Theme } from "@material-ui/core";
import HeaderButton from "../../HeaderButton";
import images, { ImagesOptions } from "../../../assets";
import { clients } from "../../../constants/clients";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "79%",
      padding: "3% 0",
      margin: "0 auto",
      position: "relative",
      [theme.breakpoints.down("xs")]: {
        marginTop: 20,
      },
    },
    item: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    grid: {
      [theme.breakpoints.down("sm")]: {
        marginTop: 20,
      },
    }
  })
);

const Clients: React.SFC = () => {
  const classes = useStyles();

  const imageSelect = (key: string): any => {
    const imagesObject: ImagesOptions = {
      dygmaLogo: images.dygmaLogo,
      infinityLogo: images.infinityLogo,
    };
    return imagesObject[key];
  };

  return (
    <div className={classes.root}>
      <HeaderButton text="Our happy clients" />
      <Grid container spacing={8}  className={classes.grid}>
        {clients.map((client) => (
          <Grid item key={v4()} md={3} sm={6} xs={12} className={classes.item}>
            <img src={imageSelect(client.image)} alt={client.image} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Clients;

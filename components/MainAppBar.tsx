import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { useRouter, NextRouter } from "next/router";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import HeaderMenu from "./HeaderMenu";
import Link from "next/link";
const Logo = require("../assets/main_title.png");

const useStyles = (router: NextRouter) =>
  makeStyles((theme: Theme) =>
    createStyles({
      grow: {
        flexGrow: 1,
        background:
          router.pathname === "/"
            ? theme.palette.background.paper
            : theme.palette.background.default,
        height: "10vh",
      },
      menuButton: {
        display: "none",
        [theme.breakpoints.down("sm")]: {
          display: "block",
          marginRight: theme.spacing(2),
        },
      },
    })
  );

export default function MainAppBar() {
  const router = useRouter();
  const classes = useStyles(router)();

  return (
    <div className={classes.grow}>
      <Toolbar>
        <Link href="/">
          <a>
            <img src={Logo} alt="Logo" />
          </a>
        </Link>
        <div className={classes.grow} />
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="open drawer"
        >
          <MenuIcon />
        </IconButton>
        <HeaderMenu />
      </Toolbar>
    </div>
  );
}

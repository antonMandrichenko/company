import * as React from "react";
import { v4 } from "uuid";
import { makeStyles, createStyles, Theme } from "@material-ui/core";
import Link from "next/link";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "block",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    ul: {
      listStyleType: "none",
      margin: 0,
      textAlign: "center",
    },
    li: {
      display: "inline-block",
      margin: "0 20px",
    },
    link: {
      fontSize: 20,
      color: theme.palette.text.primary,
      position: "relative",
      textDecoration: "none",
      paddingBottom: 8,
      "&:before, &:after": {
        content: '""',
        position: "absolute",
        bottom: -5,
        left: 0,
        right: 0,
        height: 3,
        backgroundColor: theme.palette.primary.main,
      },
      "&:before": {
        opacity: 0,
        transform: "translateY(8px)",
        transition:
          "transform 0s cubic-bezier(0.175, 0.885, 0.320, 1.275), opacity 0s",
      },
      "&:after": {
        opacity: 0,
        transform: "translateY(4px)",
        transition:
          "transform .2s cubic-bezier(0.175, 0.885, 0.320, 1.275), opacity .2s",
      },
      "&:hover, &:focus": {
        "&:before, &:after": {
          opacity: 1,
          transform: "translateY(0)",
        },
        "&:before": {
          transition:
            "transform .2s cubic-bezier(0.175, 0.885, 0.320, 1.275), opacity .2s",
        },
        "&:after": {
          transition:
            "transform 0s .2s cubic-bezier(0.175, 0.885, 0.320, 1.275), opacity 0s .2s",
        },
      },
    },
  })
);

interface MenuItemProps {
  text: string;
  href: string;
}
const MenuItem = ({ text, href }: MenuItemProps) => {
  const classes = useStyles();
  return (
    <li className={classes.li}>
      <Link href={href}>
        <a className={classes.link}>{text}</a>
      </Link>
    </li>
  );
};

const menuItems = [
  { text: "Services", href: "/services" },
  { text: "Projects", href: "/projects" },
  { text: "About", href: "/about" },
  { text: "Contacts", href: "/contacts" },
];

const HeaderMenu = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ul className={classes.ul}>
        {menuItems.map((item) => (
          <MenuItem key={v4()} text={item.text} href={item.href} />
        ))}
      </ul>
    </div>
  );
};

export default HeaderMenu;

import * as React from "react";
import { v4 } from "uuid";
import { makeStyles, createStyles, Link, withStyles } from "@material-ui/core";
import MuiLink from "@material-ui/core/Link";

const useStyles = makeStyles(() =>
  createStyles({
    ul: {
      listStyleType: "none",
      margin: 0,
      textAlign: "center",
      marginTop: "10%"
    },
    li: {
      display: "inline-block",
      margin: "0 20px"
    },
    link: {
      fontSize: 20,
      color: "green",
      position: "relative",
      textDecoration: "none",
      paddingBottom: 8,
      "&::before, &::after": {
        content: "''",
        position: "absolute",
        bottom: 2,
        left: 0,
        right: 0,
        height: 2,
        backgroundColor: "blue"
      },
      "&::before": {
        opacity: 0,
        transform: "translateY(8px)",
        transition:
          "transform 0s cubic-bezier(0.175, 0.885, 0.320, 1.275), opacity 0s"
      },
      "&::after": {
        opacity: 0,
        transform: "translateY(4px)",
        transition:
          "transform .2s cubic-bezier(0.175, 0.885, 0.320, 1.275), opacity .2s"
      },
      "&::hover, &::focus": {
        "&::before, &::after": {
          opacity: 1,
          transform: "translateY(0)"
        },
        "&::before": {
          transition:
            "transform .2s cubic-bezier(0.175, 0.885, 0.320, 1.275), opacity .2s"
        },
        "&::after": {
          transition:
            "transform 0s .2s cubic-bezier(0.175, 0.885, 0.320, 1.275), opacity 0s .2s"
        }
      }
    }
  })
);

const StyledLink = withStyles({
  root: {
    fontSize: 20,
    color: "green",
    position: "relative",
    textDecoration: "none",
    paddingBottom: 8,
    "&::before, &::after": {
      content: "''",
      position: "absolute",
      bottom: 2,
      left: 0,
      right: 0,
      height: 2,
      backgroundColor: "red"
    },
    "&::before": {
      opacity: 0,
      transform: "translateY(8px)",
      transition:
        "transform 0s cubic-bezier(0.175, 0.885, 0.320, 1.275), opacity 0s"
    },
    "&::after": {
      opacity: 0,
      transform: "translateY(4px)",
      transition:
        "transform .2s cubic-bezier(0.175, 0.885, 0.320, 1.275), opacity .2s"
    },
    "&::hover, &::focus": {
      "&::before, &::after": {
        opacity: 1,
        transform: "translateY(0)"
      },
      "&::before": {
        transition:
          "transform .2s cubic-bezier(0.175, 0.885, 0.320, 1.275), opacity .2s"
      },
      "&::after": {
        transition:
          "transform 0s .2s cubic-bezier(0.175, 0.885, 0.320, 1.275), opacity 0s .2s"
      }
    }
  }
})(MuiLink);
interface MenuItemProps {
  text: string;
  href: string;
}
const MenuItem = ({ text, href }: MenuItemProps) => {
  const classes = useStyles();
  return (
    <li className={classes.li}>
      <Link href={href} className={classes.link} component={StyledLink}>
        {text}
      </Link>
    </li>
  );
};

const menuItems = [
  { text: "Services", href: "/services" },
  { text: "Services", href: "/services" },
  { text: "Services", href: "/services" },
  { text: "Services", href: "/services" }
];

const HeaderMenu = () => {
  const classes = useStyles();
  return (
    <div>
      <ul className={classes.ul}>
        {menuItems.map(item => (
          <MenuItem key={v4()} text={item.text} href={item.href} />
        ))}
      </ul>
    </div>
  );
};

export default HeaderMenu;

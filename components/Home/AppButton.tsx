import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core";
import Link from "next/link";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      color: theme.palette.text.primary,
      cursor: "pointer",
      fontWeight: 400,
      textDecoration: "none",
      display: "inline-block",
      height: "2rem",
      lineHeight: "2rem",
      "&:hover": {
        color: theme.palette.primary.main,
      }
    },
    arrowIcon: {
      position: "relative",
      top: -1,
      transition: "transform 0.3s ease",
      verticalAlign: "middle",
      marginLeft: 10,
      "&:hover": {
        transform: "translate3d(7px, 0, 0)",
      },
    },
  })
);

interface IProps {
  text: string;
  href: string;
  as?: string;
}

const AppButton: React.SFC<IProps> = ({ text, href, as }) => {
  const classes = useStyles();
  return (
    <Link href={href} as={as}>
      <a className={classes.link}>
        {text}
        <svg
          className={classes.arrowIcon}
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <g
            fill="none"
            stroke="#000"
            strokeWidth="1.5"
            strokeLinejoin="round"
            strokeMiterlimit="10"
          >
            <circle cx="16" cy="16" r="15.12"></circle>
            <path d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
          </g>
        </svg>
      </a>
    </Link>
  );
};

export default AppButton;

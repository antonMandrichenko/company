import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core";
import Link from "next/link";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      position: "absolute",
      bottom: 12,
      left: -250,
      color: theme.palette.text.primary,
      cursor: "pointer",
      fontWeight: 400,
      textDecoration: "none",
      display: "inline-block",
      height: "2rem",
      lineHeight: "2rem",
      "&:hover": {
        outlineWidth: 0,
      },
    },
    arrowCircle: {
      transition: "stroke-dashoffset .3s ease",
      strokeDasharray: 95,
      strokeDashoffset: 95,
      zIndex: 3,
      "&:hover": {
        strokeDashoffset: 0,
      },
    },
    arrowIcon: {
      position: "relative",
      top: -1,
      transition: "transform 0.3s ease",
      verticalAlign: "middle",
      "&:hover": {
        transform: "translate3d(7px, 0, 0)",
      },
    },
  })
);

const MoreServices: React.SFC = () => {
  const classes = useStyles();
  return (
    <Link href="/services">
      <a className={classes.link}>
        More about sevices
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
            stroke-width="1.5"
            stroke-linejoin="round"
            stroke-miterlimit="10"
          >
            <circle
              className={classes.arrowCircle}
              cx="16"
              cy="16"
              r="15.12"
            ></circle>
            <path
              // className={classes.arrowIconArrow}
              d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"
            ></path>
          </g>
        </svg>
      </a>
    </Link>
  );
};

export default MoreServices;

import React from "react";

interface IProps {
  size: number;
}

const Margin: React.SFC<IProps> = ({ size }) => {
  return <div style={{ marginTop: `${size}rem` }} />;
};

export default Margin;

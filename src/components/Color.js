import React from "react";
import styles from "./Color.module.css";

const Color = (props) => {
  const color = `rgb(${props.red}, ${props.green}, ${props.blue})`;
  return (
    <div className={styles.color} style={{ backgroundColor: color }}></div>
  );
};

export default Color;

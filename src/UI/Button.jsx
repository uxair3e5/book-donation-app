import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  const { btnHeight, btnWidth, btnBackground, btnColor, holder, btnBorder } =
    props;

  const height = btnHeight;
  const width = btnWidth;
  const backgroundColor = btnBackground;
  const color = btnColor;
  const border = btnBorder;

  const buttonStyleValues = {
    height,
    width,
    backgroundColor,
    color,
    border,
  };

  return (
    <button className={styles.buttonDesign} style={buttonStyleValues}>
      {holder}
    </button>
  );
};

export default Button;

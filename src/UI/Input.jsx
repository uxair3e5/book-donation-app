import React from "react";
import styles from "./Input.module.css";

const Input = (props) => {
  const {
    inputHeight,
    inputWidth,
    inputMargin,
    inputMarginTop,
    inputMarginBottom,
    inputMarginLeft,
    inputMarginRight,
    inputPadding,
    inputPaddingLeft,
    inputPaddingRight,
    inputColor,
  } = props;

  const height = inputHeight;
  const width = inputWidth;
  const margin = inputMargin;
  const marginTop = inputMarginTop;
  const marginBottom = inputMarginBottom;
  const marginLeft = inputMarginLeft;
  const marginRight = inputMarginRight;
  const padding = inputPadding;
  const paddingLeft = inputPaddingLeft;
  const paddingRight = inputPaddingRight;
  const color = inputColor;

  const inputStyles = {
    height,
    width,
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    padding,
    paddingLeft,
    paddingRight,
    color,
  };

  return (
    <input
      type={props.type}
      name={props.name}
      className={styles.inputSetting}
      style={inputStyles}
      placeholder={props.placeholder}
    />
  );
};

export default Input;

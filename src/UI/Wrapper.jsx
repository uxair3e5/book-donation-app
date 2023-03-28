import React from "react";
import styles from "./Wrapper.module.css";

const Wrapper = (props) => {
  return (
    <div style={props.style} className={styles.elementSpacing}>
      {props.children}
    </div>
  );
};

export default Wrapper;

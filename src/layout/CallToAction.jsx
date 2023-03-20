import React from "react";
import styles from "./CallToAction.module.css";
import Button from "../UI/Button";
import Wrapper from "../UI/Wrapper";

const CallToAction = () => {
  return (
    <Wrapper>
      <div className={styles.container}>
        <h2>Directly Donate a Book</h2>
        <p>The book donation process is a 2 step process.</p>
        <Button holder={"DONATE NOW"} btnHeight={"3.55em"} btnWidth={"15%"} />
      </div>
    </Wrapper>
  );
};

export default CallToAction;

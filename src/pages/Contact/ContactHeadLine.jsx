import React from "react";
import styles from "./ContactHeadLine.module.css";
import image from "../../assets/messaging-image.svg";

const ContactHeadLine = () => {
  return (
    <div>
      <div className={styles.headlineContainer}>
        <h1>
          We’d Love to Hear From <span>You.</span>
        </h1>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img src={image} alt="lady throwing paper airplane" />
      </div>
    </div>
  );
};

export default ContactHeadLine;

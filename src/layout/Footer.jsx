import React from "react";
import styles from "./Footer.module.css";
import twitterIcon from "../assets/twitter-icon.svg";
import instaIcon from "../assets/insta-icon.svg";
import facebookIcon from "../assets/fb-icon.svg";
import Wrapper from "../UI/Wrapper";

const Footer = () => {
  return (
    <Wrapper>
      <div className={styles.footer}>
        <p>2021 © bookdonation | All Rights Reserved</p>
        <div className={styles.icons}>
          <img src={twitterIcon} alt="" />
          <img src={instaIcon} alt="" />

          <img src={facebookIcon} alt="" />
        </div>
        <div className={styles.colorBar}></div>
      </div>
    </Wrapper>
  );
};

export default Footer;

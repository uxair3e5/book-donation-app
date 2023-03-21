import React from "react";
import Wrapper from "../../UI/Wrapper";
import Grid from "../../UI/Grid";
import ContactHeadLine from "./ContactHeadLine";
import ContactForm from "./ContactForm";
import styles from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <Wrapper>
      <Wrapper />
      <div className={styles.contactContainer}>
        <Grid
          gridColumns={"repeat(auto-fit, minmax(250px, 1fr))"}
          justifyGridItems={"center"}
        >
          <ContactHeadLine />
          <ContactForm />
        </Grid>
      </div>
      <Wrapper />
    </Wrapper>
  );
};

export default ContactUs;

import React from "react";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <div className={styles.formWrap}>
      <div>
        <label htmlFor="name" className={styles.label}>
          Name
        </label>
        <Input
          type="text"
          name="name"
          placeholder="Enter your name"
          inputWidth={"88%"}
        />
      </div>

      <div>
        <label htmlFor="email" className={styles.label}>
          E-mail
        </label>
        <Input
          type="text"
          name="name"
          placeholder="@mail.com"
          inputWidth={"88%"}
        />
      </div>

      <div className={styles.message}>
        <label htmlFor="msg" className={styles.label}>
          Your message
        </label>
        <textarea
          name="msg"
          cols="30"
          rows="10"
          placeholder="Type here..."
        ></textarea>
      </div>

      <Button holder={"SEND MESSAGE"} btnWidth={"88%"} btnHeight={"3.4em"} />
    </div>
  );
};

export default ContactForm;

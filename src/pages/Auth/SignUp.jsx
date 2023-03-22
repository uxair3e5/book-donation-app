import React from "react";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import styles from "./SignUp.module.css";
import Wrapper from "../../UI/Wrapper";

const SignUp = () => {
  const labelStyle = {
    display: "block",
    fontSize: "16px",
    marginTop: "2em",
    marginBottom: "0.8em",
    fontWeight: 500,
  };

  return (
    <Wrapper>
      <div className={styles.signupForm}>
        <label htmlFor="email" style={labelStyle}>
          Full name
        </label>
        <Input
          type="text"
          name="name"
          placeholder="Jhon doe"
          inputWidth={"100%"}
        />
        <label htmlFor="email" style={labelStyle}>
          E-mail
        </label>
        <Input
          type="text"
          name="emai"
          placeholder="@mail.com"
          inputWidth={"100%"}
        />
        <label htmlFor="password" style={labelStyle}>
          Password
        </label>
        <Input
          type="password"
          name="password"
          placeholder="*********"
          inputWidth={"100%"}
        />
        <label htmlFor="confirmpass" style={labelStyle}>
          Confirm password
        </label>
        <Input
          type="password"
          name="confirmpass"
          placeholder="*********"
          inputWidth={"100%"}
        />
        <p>Forgot Password?</p>
        <Button holder={"SIGN UP"} btnWidth={"100%"} btnHeight={"40px"} />
      </div>
    </Wrapper>
  );
};

export default SignUp;

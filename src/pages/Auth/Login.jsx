import React from "react";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import styles from "./Login.module.css";
import Wrapper from "../../UI/Wrapper";

const Login = () => {
  const labelStyle = {
    display: "block",
    fontSize: "16px",
    marginTop: "2em",
    marginBottom: "0.8em",
    fontWeight: 500,
  };

  return (
    <Wrapper>
      <Wrapper />
      <div className={styles.loginForm}>
        <label style={labelStyle} htmlFor="email">
          E-mail
        </label>
        <Input
          type="text"
          name="emai"
          placeholder="@mail.com"
          inputColor={"var(--color-blackish)"}
          inputWidth={"100%"}
        />
        <label style={labelStyle} htmlFor="password">
          Password
        </label>
        <Input type="password" name="password" placeholder="*********" />
        <p>Forgot Password?</p>
        <Button holder={"LOGIN"} />
      </div>
    </Wrapper>
  );
};

export default Login;

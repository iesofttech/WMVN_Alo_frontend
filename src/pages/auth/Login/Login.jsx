import React, { useState } from "react";
import Logo from "../../../assets/images/Logo.png";
import Close from "../../../assets/images/Close.png";
import SignUp from "../../../assets/images/Login-page/SignUp.png";
import EyeOpen from "../../../assets/images/Login-page/Eye-open.png";
import EyeClose from "../../../assets/images/Login-page/Eye-closed.png";
import Check from "../../../assets/images/Login-page/Check.png";
import styles from "./Login.module.css";

import { notification, Tooltip } from "antd";

const Login = ({ close }) => {
  const [visible, setVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ username: "", password: "" });

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  const validate = () => {
    let valid = true;
    const errors = { username: "", password: "" };

    if (!username) {
      errors.username = "Username is required.";
      valid = false;
    }
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/;
    if (!password) {
      errors.password = "Password is required.";
      valid = false;
    } else if (!passwordRegex.test(password)) {
      errors.password =
        "Password must be 8-12 chars, include uppercase, lowercase, number, and special char.";
      valid = false;
    }
    setErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: username,
      password: password,
    };
    if (validate()) {
      // console.log(data);
      close();
      // console.log("Login successful");
      // notification.success("Login successful")
      setUsername("");
      setPassword("");
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    if (errors.username) {
      setErrors((prevErrors) => ({ ...prevErrors, username: "" }));
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (errors.password) {
      setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
    }
  };

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.closeWrapper}>
        <img
          className={styles.closeIcon}
          src={Close}
          alt="Close"
          onClick={() => close()}
        />
      </div>
      <div className={styles.logoWrapper}>
        <img className={styles.logoStyle} src={Logo} alt="Logo" />
      </div>
      <form onSubmit={handleSubmit} className={styles.formWrapper}>
        <div className={styles.labelWrapper}>
          <label className={styles.label}>Username</label>
          <div className={styles["input-container"]}>
            <input
              className={styles.input1}
              value={username}
              onChange={handleUsernameChange}
            />
            <Tooltip title="Remember me" color={"#2F3133"}>
              <img
                src={Check}
                alt="Toggle Visibility"
                className={styles.icon}
                onClick={toggleVisibility}
              />
            </Tooltip>
          </div>
          {errors.username && (
            <div className={styles.errorText}>{errors.username}</div>
          )}
        </div>
        <div className={styles.labelWrapper}>
          <label className={styles.label}>Password</label>
          <div className={styles["input-container"]}>
            <input
              type={visible ? "text" : "password"}
              className={styles.input1}
              value={password}
              onChange={handlePasswordChange}
            />
            <img
              src={visible ? EyeOpen : EyeClose}
              alt="Toggle Visibility"
              className={styles.icon}
              onClick={toggleVisibility}
            />
          </div>
          {errors.password && (
            <div className={styles.errorText}>{errors.password}</div>
          )}
        </div>
        <div className={styles.forgotPassText}>Forget Password?</div>
        <div className={styles.buttonContainer}>
          <button type="submit" className={styles.submitButton}>
            Login
          </button>
        </div>
        <div className={styles.signUpWrapper}>
          <button className={styles.signUpButton}>
            <img className={styles.signUpStyle} src={SignUp} alt="Sign Up" />
            <span>Sign Up</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import Logo from "../../assets/images/Logo.png";
import Close from "../../assets/images/Close.png";
import SignUp from "../../assets/images/Login-page/SignUp.png";
import EyeOpen from "../../assets/images/Login-page/Eye-open.png";
import EyeClose from "../../assets/images/Login-page/Eye-closed.png";
import Check from "../../assets/images/Login-page/Check.png";
import styles from "./Login.module.css";
import { Tooltip } from "antd";

const Login = ({ close }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
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
      <div className={styles.formWrapper}>
        <div className={styles.labelWrapper}>
          <label className={styles.label}>Username</label>
          <div className={styles["input-container"]}>
            <input className={styles.input1} />
            <Tooltip title="Remember me" color={"#2F3133"}>
              <img
                src={Check}
                alt="Toggle Visibility"
                className={styles.icon}
                onClick={toggleVisibility}
              />
            </Tooltip>
          </div>
        </div>
        <div className={styles.labelWrapper}>
          <label className={styles.label}>Password</label>

          <div className={styles["input-container"]}>
            <input
              type={visible ? "text" : "password"}
              className={styles.input1}
            />
            <img
              src={visible ? EyeOpen : EyeClose}
              alt="Toggle Visibility"
              className={styles.icon}
              onClick={toggleVisibility}
            />
          </div>
        </div>
        <div className={styles.forgotPassText}>Forget Password?</div>
        <div className={styles.buttonContainer}>
          <button className={styles.submitButton}>Login</button>
        </div>
        <div className={styles.signUpWrapper}>
          <button className={styles.signUpButton}>
            <img className={styles.signUpStyle} src={SignUp} alt="Logo" />
            <span>Sign Up</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

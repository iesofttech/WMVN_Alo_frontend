import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import styles from "./Register.module.css"; // Import the CSS module

const Register = () => {
  // State variables for form values
  const [loginName, setLoginName] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  // State variables for validation
  const [errors, setErrors] = useState({
    loginName: "",
    fullName: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    email: "",
  });

  // Function to handle form submission
  const onFinish = (values) => {
    console.log("Form values:", values);
    // Optionally, send the values to a backend API or save them
  };

  // Function to handle form submission failure
  const onFinishFailed = (errorInfo) => {
    console.log("Form submission failed:", errorInfo);
  };

  // Function to validate each field
  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "loginName":
        const loginNamePattern = /^[a-z0-9]{8,12}$/;
        if (!loginNamePattern.test(value)) {
          error =
            "Username must be 8-12 characters long and contain only lowercase letters and numbers.";
        }
        break;
      case "fullName":
        if (value.trim().length < 3) {
          error = "Name must be at least 3 characters long.";
        }
        break;
      case "password":
        if (value.length < 6 || value.length > 16) {
          error = "Password must be 6-16 characters long.";
        } else if (
          !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+{}\[\]:;"\'<>,.?/]{6,16}$/.test(
            value
          )
        ) {
          error =
            "Password can include letters, numbers, and special characters.";
        }
        break;
      case "confirmPassword":
        if (value !== password) {
          error = "The two passwords that you entered do not match!";
        }
        break;
      case "phoneNumber":
        const phonePattern = /^\d{10}$/;
        if (!phonePattern.test(value)) {
          error = "Phone number must be exactly 10 digits.";
        }
        break;
      case "email":
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value)) {
          error = "Please enter a valid email address.";
        }
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  return (
    <div className={styles.container}>
      <Form
        name="register"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item className={styles.formItem}>
          <span className={styles.label} style={{paddingLeft:"10px"}}>Contact Name:</span>
          <span className={styles.labelHighlighted}> SV388</span>
        </Form.Item>

        <Form.Item
          name="loginName"
          className={styles.inputGroup}
          validateStatus={errors.loginName ? "error" : ""}
          help={
            <div
              style={{
                display: "flex",
                color: "red",
                fontSize: "12px",
                // set the width to match the input field
                marginTop: "4px",
                marginLeft: "17%",
                wordWrap: "break-word",
                width: "75%", // ensures long messages wrap
              }}
            >
              {errors.loginName}
            </div>
          }
          // rules={[
          //   { required: true, message: 'Username is required.' },
          //   {
          //     pattern: /^[a-z0-9]{8,12}$/,
          //     message: 'Username must be 8-12 characters long and contain only lowercase letters and numbers.',
          //   },
          // ]}
        >
          <div className={styles.inputLabel}>Login Name</div>
          <div className={styles.inputWrapper}>
            <div className={styles.iconWrapper}>
              <UserOutlined style={{ color: "black" }} />
            </div>
            <Input
              value={loginName}
              onChange={(e) => {
                setLoginName(e.target.value);
                validateField("loginName", e.target.value);
              }}
              placeholder="8-12 characters, lowercase letters and numbers only"
              className={styles.input}
              required
            />
          </div>
        </Form.Item>

        <Form.Item
          name="fullName"
          className={styles.inputGroup}
          validateStatus={errors.fullName ? "error" : ""}
         
          help= {<div
          style={{
            display: "flex",
            color: "red",
            fontSize: "12px",
            // set the width to match the input field
            marginTop: "4px",
            marginLeft: "17%",
            wordWrap: "break-word",
            width: "75%", // ensures long messages wrap
          }}
        >{errors.fullName}</div>}
          rules={[
            { required: true, message: "Full Name is required." },
            { min: 3, message: "Name must be at least 3 characters long." },
          ]}
        >
          <div className={styles.inputLabel}>Full Name</div>
          <div className={styles.inputWrapper}>
            <Input
              style={{ marginLeft: "44px" }}
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
                validateField("fullName", e.target.value);
              }}
              placeholder="Full Name"
              className={styles.input}
              required
            />
          </div>
        </Form.Item>

        <Form.Item
          name="password"
          className={styles.inputGroup}
          validateStatus={errors.password ? "error" : ""}
          help= {<div
            style={{
              display: "flex",
              color: "red",
              fontSize: "12px",
              // set the width to match the input field
              marginTop: "4px",
              marginLeft: "17%",
              wordWrap: "break-word",
              width: "75%", // ensures long messages wrap
            }}
          >{errors.password}</div>}
          rules={[
            { required: true, message: "Password is required." },
            {
              min: 6,
              max: 16,
              message: "Password must be 6-16 characters long.",
            },
            {
              pattern:
                /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+{}\[\]:;"\'<>,.?/]{6,16}$/,
              message:
                "Password can include letters, numbers, and special characters.",
            },
          ]}
        >
          <div className={styles.inputLabel}>Password</div>
          <div className={styles.inputWrapper}>
            <div className={styles.iconWrapper}>
              <LockOutlined style={{ fontSize: "18px", color: "#BFBFBF" }} />
            </div>
            <Input.Password
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                validateField("password", e.target.value);
              }}
              placeholder="6-16 characters, letters, numbers, and special characters"
              className={styles.input}
              required
            />
          </div>
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          className={styles.inputGroup}
          validateStatus={errors.confirmPassword ? "error" : ""}
          help={<div
            style={{
              display: "flex",
              color: "red",
              fontSize: "12px",
              // set the width to match the input field
              marginTop: "4px",
              marginLeft: "17%",
              wordWrap: "break-word",
              width: "75%", // ensures long messages wrap
            }}
          >{errors.confirmPassword}</div>}
          rules={[
            { required: true, message: "Please confirm your password!" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <div className={styles.inputLabel}>Confirm Password</div>
          <div className={styles.inputWrapper}>
            <div className={styles.iconWrapper}>
              <LockOutlined style={{ fontSize: "18px", color: "#BFBFBF" }} />
            </div>
            <Input.Password
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                validateField("confirmPassword", e.target.value);
              }}
              placeholder="Confirm your password"
              className={styles.input}
              required
            />
          </div>
        </Form.Item>

        <Form.Item
          name="phoneNumber"
          className={styles.inputGroup}
          validateStatus={errors.phoneNumber ? "error" : ""}
          help={<div
            style={{
              display: "flex",
              color: "red",
              fontSize: "12px",
              // set the width to match the input field
              marginTop: "4px",
              marginLeft: "17%",
              wordWrap: "break-word",
              width: "75%", // ensures long messages wrap
            }}
          >{errors.phoneNumber}</div>}
          rules={[
            { required: true, message: "Phone Number is required." },
            {
              pattern: /^\d{10}$/,
              message: "Phone number must be exactly 10 digits.",
            },
          ]}
        >
          <div className={styles.inputLabel}>Phone Number</div>
          <div className={styles.inputWrapper}>
            <div className={styles.iconWrapper}>
              <PhoneOutlined style={{ fontSize: "18px", color: "#BFBFBF" }} />
            </div>
            <Input
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
                validateField("phoneNumber", e.target.value);
              }}
              placeholder="10 digits"
              className={styles.input}
              required
            />
          </div>
        </Form.Item>

        {/* <Form.Item
          name="email"
          className={styles.inputGroup}
          validateStatus={errors.email ? "error" : ""}
          help={errors.email}
          rules={[
            { required: true, message: "Email is required." },
            { type: "email", message: "Please enter a valid email address." },
          ]}
        >
          <div className={styles.inputLabel}>Email</div>
          <div className={styles.inputWrapper}>
            <div className={styles.iconWrapper}>
              <MailOutlined style={{ fontSize: "18px", color: "#BFBFBF" }} />
            </div>
            <Input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validateField("email", e.target.value);
              }}
              placeholder="Enter your email"
              className={styles.input}
              required
            />
          </div>
        </Form.Item> */}

        {/* <div style={{ display: "flex", flexDirection: "row" }}> */}
          <Form.Item>
            <Button type="primary" htmlType="submit" className={styles.button}>
              Submit
            </Button>
          </Form.Item>

          <Form.Item style={{ textAlign: "center", marginBottom: "20px" }}>
            <Button type="link" className={styles.buttonLink}>
              <HomeOutlined />
            </Button>
          </Form.Item>
        {/* </div> */}

        <div>
          <ul>
            <li>
              <p>
                By clicking "Submit", you agree to GA368 Terms of Use and
                Privacy Policy.
              </p>
            </li>
            <li>
              <p>
                You consent to receive phone call, SMS, and email messages from
                GA368 to provide updates on your order and/or for marketing
                purposes.
              </p>
            </li>
          </ul>
        </div>
      </Form>
    </div>
  );
};

export default Register;

import React from "react";
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
  // Function to handle form submission
  const onFinish = (values) => {
    console.log('Form values:', values);
    // Handle the form values here
  };

  // Function to handle form submission failure
  const onFinishFailed = (errorInfo) => {
    console.log('Form submission failed:', errorInfo);
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
          <span className={styles.label}>Contact Name:</span>
          <span className={styles.labelHighlighted}> SV388</span>
        </Form.Item>

        <Form.Item
          name="loginName"
          className={styles.inputGroup}
          rules={[
            {
              required: true,
              type: "regexp",
              pattern: new RegExp("[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"),
              message: 'Please enter a valid existing channel ID',
            },
            
          ]}
        >
          <div className={styles.inputLabel}>Login Name</div>
          <div className={styles.inputWrapper}>
            <div className={styles.iconWrapper}>
              <UserOutlined style={{ color: "black" }} />
            </div>
            <Input
              placeholder="8-12 characters, letters and numbers only"
              className={styles.input}
            />
          </div>
        </Form.Item>

        <Form.Item
          name="fullName"
          className={styles.inputGroup}
          rules={[
            {
              required: true,
              message: 'Full Name is required',
              whitespace: true,
            },
          ]}
        >
          <div className={styles.inputLabel}>Full Name</div>
          <div className={styles.inputWrapper}>
            <Input
              placeholder="Full Name"
              className={styles.input}
            />
          </div>
        </Form.Item>

        <Form.Item
          name="password"
          className={styles.inputGroup}
          rules={[
            {
              required: true,
              min: 8,
              max: 15,
              message: 'Password must be between 8 and 15 characters.',
            },
            {
              pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/,
              message: 'Password must contain letters and numbers.',
            },
          ]}
        >
          <div className={styles.inputLabel}>Password</div>
          <div className={styles.inputWrapper}>
            <div className={styles.iconWrapper}>
              <LockOutlined style={{ fontSize: "18px", color: "#BFBFBF" }} />
            </div>
            <Input.Password
              placeholder="8-15 characters, letters and numbers"
              className={styles.input}
            />
          </div>
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          className={styles.inputGroup}
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("The two passwords that you entered do not match!"));
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
              placeholder="Confirm your password"
              className={styles.input}
            />
          </div>
        </Form.Item>

        <Form.Item
          name="phoneNumber"
          className={styles.inputGroup}
          rules={[
            {
              required: true,
              message: 'Phone Number is required',
            },
            {
              pattern: /^[\d\s\+\-]{10,15}$/,
              message: 'Enter a valid phone number.',
            },
          ]}
        >
          <div className={styles.inputLabel}>Phone Number</div>
          <div className={styles.inputWrapper}>
            <div className={styles.iconWrapper}>
              <PhoneOutlined style={{ fontSize: "18px", color: "#BFBFBF" }} />
            </div>
            <Input
              placeholder="91 234 56 78"
              addonBefore={
                <img
                  src="path/to/flag.png"
                  alt="flag"
                  style={{ width: "20px", marginRight: "5px" }}
                />
              }
              className={styles.input}
            />
          </div>
        </Form.Item>

        <Form.Item
          name="email"
          className={styles.inputGroup}
          rules={[
            {
              required: true,
              message: 'Email is required',
            },
            {
              type: 'email',
              message: 'Please enter a valid email address.',
            },
          ]}
        >
          <div className={styles.inputLabel}>Email</div>
          <div className={styles.inputWrapper}>
            <div className={styles.iconWrapper}>
              <MailOutlined style={{ fontSize: "18px", color: "#BFBFBF" }} />
            </div>
            <Input placeholder="Enter your email" className={styles.input} />
          </div>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>

        <Form.Item style={{ textAlign: "center", marginBottom: "20px" }}>
          <Button type="link" className={styles.buttonLink}>
            <HomeOutlined />
          </Button>
        </Form.Item>

        <div className={styles.footer}>
          <p>
            By clicking "Submit", you agree to GA368 Terms of Use and Privacy
            Policy.
          </p>
          <p>
            You consent to receive phone call, SMS, and email messages from
            GA368 to provide updates on your order and/or for marketing
            purposes.
          </p>
        </div>
      </Form>
    </div>
  );
};

export default Register;

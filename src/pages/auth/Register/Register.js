import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, PhoneOutlined, HomeOutlined } from '@ant-design/icons';

const Register = () => {
  return (
    <div style={{ 
      background: '#FFFFFF',
      padding: '20px',
      borderRadius: '15px',
      width: '350px',
      margin: 'auto',
      marginTop: '50px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
    }}>
     
      <Form
        name="register"
        initialValues={{ remember: true }}
        style={{ textAlign: 'left' }}
      >
        <Form.Item
          name="contactName"
          label="Contact Name :"
          labelCol={{ span: 24 }}
          style={{ marginBottom: '15px' }}
        >
          <span style={{ fontWeight: 'bold', color: '#6E1F10' }}>SV388</span>
        </Form.Item>
        <Form.Item
          name="loginName"
          rules={[{ required: true, message: 'Please input your login name!' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Contain a-z, 0-9, 4-20 characters" />
        </Form.Item>
        <Form.Item
          name="fullName"
          rules={[{ required: true, message: 'Please input your full name!' }]}
        >
          <Input placeholder="Full Name" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Contain A-z, 0-9, 8-15 characters" />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          rules={[{ required: true, message: 'Please confirm your password!' }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Input Password again" />
        </Form.Item>
        <Form.Item
          name="phoneNumber"
          rules={[{ required: true, message: 'Please input your phone number!' }]}
        >
          <Input prefix={<PhoneOutlined />} addonBefore={<img src="path/to/flag.png" alt="flag" style={{ width: '20px' }} />} placeholder="91 234 56 78" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input prefix={<MailOutlined />} placeholder="Enter your email" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%', marginBottom: '10px', backgroundColor: '#FFA500', borderColor: '#FFA500' }}>
            Submit
          </Button>
          <Button type="link" style={{ width: '100%' }}>
            <HomeOutlined />
          </Button>
        </Form.Item>
        <div style={{ fontSize: '12px', textAlign: 'left', color: '#6E1F10' }}>
          <p>By clicking "Submit", you agree to GA368 Terms of Use and Privacy Policy.</p>
          <p>You consent to receive phone call, SMS, and email messages from GA368 to provide updates on your order and/or for marketing purposes.</p>
        </div>
      </Form>
    </div>
  );
};

export default Register;

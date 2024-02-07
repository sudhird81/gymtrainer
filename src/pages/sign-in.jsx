import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import Header from '@/components/Header';



export async function getServerSideProps({ locale }) {
    const apiUrl = 'https://dummyjson.com/auth/login';
    const headers = {
        'Content-Type': 'application/json',

    };
    const bodyData = {
        username: 'kminchelle',
        password: '0lelplR',
    };
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(bodyData),
    });
    const data = await response.json();
    console.log("data", data)
    localStorage.setItem('token', 'value');

    return {
        props: {
            ...(await serverSideTranslations(locale, ['about', 'common'])),
            data
        },
    };
}



const SignIn = () => {
    

    const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  

  
  return(
    <>


        <Form
            name="basic"
            labelCol={{
            span: 8,
            }}
            wrapperCol={{
            span: 16,
            }}
            style={{
            maxWidth: 600,
            }}
            initialValues={{
            remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
            label="Username"
            name="username"
            rules={[
                {
                required: true,
                message: 'Please input your username!',
                },
            ]}
            >
            <Input />
            </Form.Item>

            <Form.Item
            label="Password"
            name="password"
            rules={[
                {
                required: true,
                message: 'Please input your password!',
                },
            ]}
            >
            <Input.Password />
            </Form.Item>

            <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
                offset: 8,
                span: 16,
            }}
            >
            <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
            wrapperCol={{
                offset: 8,
                span: 16,
            }}
            >
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
            </Form.Item>
        </Form>
</>
)
    };
export default SignIn;
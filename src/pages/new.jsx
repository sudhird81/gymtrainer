import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import { useTranslation } from 'next-i18next';


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

const New = () => {
    const { t } = useTranslation('about');
    const router = useRouter()


    const onFinish = (values) => {
        console.log('Success:', values);
        router.push('/dashboard');

    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <Header />
            {/* <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 flex flex-col items-center justify-center">
                <div className="text-white text-center space-y-4">
                    <h1 className="text-4xl font-bold mb-4">Sign in Page</h1>
                    <p className="text-lg">hello signin</p>

                </div>
            </div> */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>

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
            </div>
        </>

    )

};
export default New;
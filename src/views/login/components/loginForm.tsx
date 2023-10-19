import { Button, Checkbox, Form, Input, Layout } from "antd";
import React, { useEffect } from "react";
import { login } from "@/https/login";
import usePromise from "@/hooks/usePromise";

const onFinishFailed = (errorInfo: Record<string, any>) => {
  console.log("Failed:", errorInfo);
};

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const LoginForm = () => {
  const { result, refresh, setResultCallback } = usePromise(
    (values: Record<string, string>) => login(values)
  );
  const onFinish = async (values: Record<string, any>) => {
    // console.log("Success:", values);
    await refresh(values);
  };
  // 在组件中设置回调函数
  useEffect(() => {
    setResultCallback((newResult) => {
      console.log(newResult); // 这里将输出最新的 result 值
    });
  }, []);
  // 监听result的变化
  useEffect(() => {
    console.log("result", result);
  }, [result]);
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="用户名"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="密码"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item<FieldType>
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default LoginForm;

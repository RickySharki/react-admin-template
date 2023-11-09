import { Button, Checkbox, Form, Input } from "antd";
import { useEffect } from "react";
import { login } from "@/https/login";
import { useRequest } from "ahooks";
import { userAtom } from "@/store/user";
import { useAtom } from "jotai";
import CryptoJS from "crypto-js";

const onFinishFailed = (errorInfo: Record<string, any>) => {
  console.log("Failed:", errorInfo);
};

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const LoginForm = () => {
  const [_, setUser] = useAtom(userAtom);
  //获取表单实例
  const [form] = Form.useForm();
  const { data, loading, run } = useRequest(login, {
    manual: true,
  });
  // const getUserInfoToLogin = (userInfo: User) => {
  //   Modal.confirm({
  //     content: "是否使用本地缓存的用户信息登录？",
  //     centered: true,
  //     onOk: () => {
  //       run(userInfo);
  //     },
  //     onCancel: () => {
        // form.setFieldsValue(userInfo);
  //     },
  //   });
  // };
  const onFinish = async (values: Record<string, any>) => {
    if (values.remember) {
      localStorage.setItem(
        "userInfo",
        CryptoJS.AES.encrypt(JSON.stringify(values), "UserInfoKey").toString()
      );
    }
    run(values);
  };
  useEffect(() => {
    debugger;
    const encryptedData = localStorage.getItem("userInfo");
    if (encryptedData) {
      const bytes = CryptoJS.AES.decrypt(encryptedData, "UserInfoKey");
      const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      if (decryptedData.remember) {
        // getUserInfoToLogin(decryptedData);
        form.setFieldsValue(decryptedData);
      }
    }
  }, []);
  // 监听result的变化
  useEffect(() => {
    console.log("result", data);
    //@ts-expect-error
    setUser(data);
  }, [data]);
  return (
    <>
      <h1>{loading}</h1>
      <Form
        name="basic"
        form={form}
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
    </>
  );
};
export default LoginForm;

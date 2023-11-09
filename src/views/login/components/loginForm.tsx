import { Button, Checkbox, Form, Input } from "antd";
import { useEffect } from "react";
import { login } from "@/https/login";
import { useRequest } from "ahooks";
import { userAtom } from "@/store/user";
import { useAtom } from "jotai";
import CryptoJS from "crypto-js";
import { useTranslation } from "react-i18next";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const LoginForm = () => {
  // 获取国际化翻译函数
  const { t } = useTranslation();
  const [_, setUser] = useAtom(userAtom);
  //获取表单实例
  const [form] = Form.useForm();
  const { data, loading, run } = useRequest(login, {
    manual: true,
  });

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
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label={t("login.username")}
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label={t("login.password")}
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
          <Checkbox>{t("login.remember")}</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            {t("button.login")}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default LoginForm;

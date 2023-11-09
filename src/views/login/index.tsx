import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import LoginForm from "./components/loginForm";
import React, { useEffect } from "react";
import { useAtom } from "jotai";
import { userAtom } from "@/store/user";

const Login = () => {
  const [userInfo, _] = useAtom(userAtom);
  const navigate = useNavigate();
  const to404 = () => {
    navigate("/404");
  };
  const toContent = () => {
    navigate("/content");
  };
  useEffect(() => {
    if (userInfo?.userInfo && userInfo?.token) {
      toContent();
    }
  }, [userInfo]);
  return (
    <>
      <div className="w-full h-full flex justify-center items-center flex-col">
        <div className="flex justify-start">
          <LoginForm />
        </div>
      </div>
    </>
  );
};
export default Login;

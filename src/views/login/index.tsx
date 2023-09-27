import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import LoginForm from "./components/loginForm";
const Login = () => {
  const navigate = useNavigate();
  const to404 = () => {
    navigate("/404");
  };
  const toContent = () => {
    navigate("/content");
  };
  return (
    <>
      <div className="w-full h-full">
        <LoginForm />
        <span>这是登录页</span>
        <Button onClick={to404}>to 404 Page</Button>
        <Button onClick={toContent}>to SubContent Page</Button>
      </div>
    </>
  );
};
export default Login;

import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const to404 = () => {
    navigate("/404");
  };
  return (
    <>
      <div className="w-full h-full">
        <span>这是登录页</span>
        <Button onClick={to404}>to 404 Page</Button>
      </div>
    </>
  );
};
export default Login;

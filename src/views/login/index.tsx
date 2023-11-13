import { useNavigate } from "react-router-dom";
import LoginForm from "./components/loginForm";
import { useAtom, useStore } from "jotai";
import { userAtom } from "@/store/user";
import { TbLanguage } from "react-icons/tb";
// import { languageAtom } from "@/store/global";
// import i18n from "@/lang/i18n/config";
import { useTranslation } from "react-i18next";
import { toggleLanguage } from "@/hooks/useToggleLanguage";

const Login = () => {
  const { t } = useTranslation();
  // 获取全局store
  const globalStore = useStore();
  const [userInfo, _] = useAtom(userAtom);
  const navigate = useNavigate();

  const toContent = useCallback(() => {
    navigate("/content");
  }, [navigate]);

  useEffect(() => {
    if (userInfo?.userInfo && userInfo?.token) {
      toContent();
    }
    return () => {};
  }, [userInfo, toContent]);
  return (
    <>
      <div className="login h-full w-full flex flex-col">
        <div className="login-top h-50px flex items-center justify-end pr-20">
          <Tooltip title={t("Tooltip.languageToggleTip")}>
            <Button
              shape="circle"
              icon={<TbLanguage />}
              onClick={() => toggleLanguage(globalStore)}
            ></Button>
          </Tooltip>
        </div>
        <div className="login-content w-full flex-1 flex justify-center items-center flex-col">
          <div className="flex justify-start">
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;

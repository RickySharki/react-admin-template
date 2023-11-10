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

  const toContent = () => {
    navigate("/content");
  };

  // const toggleLanguage = () => {
  //   const currentLanguage = globalStore.get(languageAtom);
  //   const toToggleLanguage = currentLanguage === "cn" ? "en" : "cn";
  //   globalStore.set(languageAtom, toToggleLanguage);
  //   i18n.changeLanguage(toToggleLanguage);
  // };

  useEffect(() => {
    if (userInfo?.userInfo && userInfo?.token) {
      toContent();
    }
  }, [userInfo]);
  return (
    <>
      <div className="login h-full w-full flex flex-col">
        <div className="login-top h-50px flex items-center justify-end pr-4">
          <Tooltip
            title={t("Tooltip.languageToggleTip")}
            trigger="click"
            defaultOpen
          >
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

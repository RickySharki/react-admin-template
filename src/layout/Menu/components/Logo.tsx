import logo from "@/assets/images/logo.png";
import { useTranslation } from "react-i18next";

const Logo = () => {
  const { t } = useTranslation();
  return (
    <div className="logo-box">
      <img src={logo} alt="logo" className="logo-img" />
      <h2 className="logo-text">{t("Header.title")}</h2>
    </div>
  );
};

export default Logo;

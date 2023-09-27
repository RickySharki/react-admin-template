import logo from "@/assets/images/logo.png";

const Logo = () => {
  return (
    <div className="logo-box">
      <img src={logo} alt="logo" className="logo-img" />
      <h2 className="logo-text">Vue Admin</h2>
    </div>
  );
};

export default Logo;

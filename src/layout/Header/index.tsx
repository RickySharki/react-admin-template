import UserDropDownMenu from "./components/User";

const LayoutHeader = () => {
  return (
    <div className="layout-header w-full h-full flex justify-end items-center">
      <UserDropDownMenu />
    </div>
  );
};

export default LayoutHeader;

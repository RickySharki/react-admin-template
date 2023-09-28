import UserDropDownMenu from "./components/User";
import React from "react";

const LayoutHeader = () => {
  return (
    <div className="layout-header w-full h-full flex justify-end items-center">
      <UserDropDownMenu />
    </div>
  );
};

export default LayoutHeader;

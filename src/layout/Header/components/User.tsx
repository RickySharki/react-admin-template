import type { MenuProps } from "antd";
import { message } from "antd";
import UserIcon from "@/assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { userAtom } from "@/store/user";
import { useAtom } from "jotai";
const UserDropDownMenu = () => {
  const navigate = useNavigate();
  const [_, setUser] = useAtom(userAtom);
  // 退出登录
  const logout = () => {
    Modal.confirm({
      title: "温馨提示 🧡",
      icon: <ExclamationCircleOutlined />,
      content: "是否确认退出登录？",
      okText: "确认",
      cancelText: "取消",
      centered: true,
      onOk: () => {
        setUser({ userInfo: null, token: null});
        message.success("退出登录成功！");
        navigate("/login");
      },
    });
  };
  // TODO: 后期需要做成根据权限配置的菜单,这里考虑从共享状态中统一处理获取
  const items: MenuProps["items"] = [
    {
      key: "logout",
      label: "退出登录",
      onClick: logout,
    },
  ];
  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <Avatar src={<img src={UserIcon} alt="avatar" />} />
    </Dropdown>
  );
};

export default UserDropDownMenu;

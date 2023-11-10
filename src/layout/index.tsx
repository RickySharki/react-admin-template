import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import LayoutMenu from "./Menu";
import LayoutHeader from "./Header";
import "./index.scss";

const LayoutContainer = () => {
  const { Header, Footer, Sider, Content } = Layout;
  return (
    <Layout className="layout-container h-full w-full">
      <Sider trigger={null} collapsible>
        <LayoutMenu />
      </Sider>
      <Layout>
        <Header>
          <LayoutHeader />
        </Header>
        <Content>
          <Outlet />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutContainer;

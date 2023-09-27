import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import LayoutMenu from "./Menu";
const LayoutContainer = () => {
  const { Header, Footer, Sider, Content } = Layout;
  return (
    <Layout className="h-full w-full">
      <Sider trigger={null} collapsible>
        <LayoutMenu />
      </Sider>
      <Layout>
        <Header style={{ height: "55px" }}>Header</Header>
        <Content>
          <Outlet />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutContainer;

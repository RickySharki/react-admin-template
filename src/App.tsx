import { HashRouter } from "react-router-dom";
import Router from "@/routers/index";
import { ConfigProvider } from "antd";

import "./App.css";

const App = () => {
  return (
    <HashRouter>
      <ConfigProvider>
        <Router />
      </ConfigProvider>
    </HashRouter>
  );
};

export default App;

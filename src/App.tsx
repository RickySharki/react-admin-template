import { HashRouter } from "react-router-dom";
import Router from "@/routers/index";
import { ConfigProvider } from "antd";
import React from "react";

import "./App.scss";
// import * as echarts from 'echarts';

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

import { HashRouter } from "react-router-dom";
import Router from "@/routers/index";
import { DevTools } from "jotai-devtools";
import { Provider, atom } from "jotai";

import globalStore from "@/store/global";
import "./App.scss";
import "./lang/i18n/config";
// import * as echarts from 'echarts';
const App = () => {
  return (
    <>
      <Provider store={globalStore}>
        <DevTools></DevTools>
        <HashRouter>
          <ConfigProvider>
            <Router />
          </ConfigProvider>
        </HashRouter>
      </Provider>
    </>
  );
};

export default App;

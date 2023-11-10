import { BrowserRouter } from "react-router-dom";
import Router from "@/routers/index";
import { DevTools } from "jotai-devtools";
import { Provider } from "jotai";
import enUS from "antd/locale/en_US";
import zhCN from "antd/locale/zh_CN";
import globalStore from "@/store/global";
import "./App.scss";
import "./lang/i18n/config";
import { languageAtom } from "@/store/global";
import { Locale } from "antd/es/locale";

const App = () => {
  const [locale, setLocale] = useState<Locale>(zhCN);

  // 订阅languageAtom的变化
  globalStore.sub(languageAtom, () => {
    setLocale(globalStore.get(languageAtom) === "en" ? enUS : zhCN);
  });

  return (
    <>
      <Provider store={globalStore}>
        <DevTools></DevTools>
        <BrowserRouter>
          <ConfigProvider locale={locale}>
            <Router />
          </ConfigProvider>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;

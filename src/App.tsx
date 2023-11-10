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
import { ThemeProvider } from "antd-style";
import lightTheme from "@/assets/style/lightTheme.json";
import darkTheme from "@/assets/style/darkTheme.json";
import { themeModeAtom, customToken } from "@/store/theme";

const App = () => {
  const [locale, setLocale] = useState<Locale>(zhCN);

  // 订阅languageAtom的变化
  globalStore.sub(languageAtom, () => {
    setLocale(globalStore.get(languageAtom) === "en" ? enUS : zhCN);
  });

  const [themeMode, setThemeMode] = useState("light");
  globalStore.sub(themeModeAtom, () => {
    setThemeMode(globalStore.get(themeModeAtom) === "light" ? "light" : "dark");
  });
  return (
    <>
      <Provider store={globalStore}>
        <DevTools></DevTools>
        <BrowserRouter>
          <ThemeProvider
            customToken={customToken}
            theme={() => (themeMode === "light" ? lightTheme : darkTheme)}
            appearance={themeMode}
          >
            <ConfigProvider locale={locale}>
              <Router />
            </ConfigProvider>
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;

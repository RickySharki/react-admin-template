import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
// unocss
import UnoCSS from "unocss/vite";
import presetAttributify from "@unocss/preset-attributify";
import presetIcons from "@unocss/preset-icons";
import presetUno from "@unocss/preset-uno";
// mock
import { viteMockServe } from "vite-plugin-mock";
import { resolve } from "path";
//jotai
import jotaiDebugLabel from "jotai/babel/plugin-debug-label";
import jotaiReactRefresh from "jotai/babel/plugin-react-refresh";
// auto-importer
import AutoImport from "unplugin-auto-import/vite";
import { AntDesignResolver } from "./build/antd";
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd(), "");
  const isDev = mode === "development";
  return {
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"),
      },
    },
    plugins: [
      react({ babel: { plugins: [jotaiDebugLabel, jotaiReactRefresh] } }),
      UnoCSS({
        shortcuts: [
          {
            logo: "w-6em h-6em transform transition-800 hover:rotate-180",
          },
        ],
        presets: [
          presetUno(),
          presetAttributify(),
          presetIcons({
            extraProperties: {
              display: "inline-block",
              "vertical-align": "middle",
            },
          }),
        ],
      }),
      viteMockServe({
        mockPath: "./src/service/mock",
        // 本地、生产都使用mock
        localEnabled: true,
        prodEnabled: true,
      }),
      AutoImport({
        imports: ["react"],
        dts: true,
        resolvers: [
          // 使用编写的解析器，处理antd的组件
          AntDesignResolver({
            resolveIcons: true,
          }),
        ],
      }),
    ],
    server: {
      host: "0.0.0.0",
      port: 9901,
      open: true,
      proxy: {
        "/api": "http://localhost:9901",
      },
    },
  };
});

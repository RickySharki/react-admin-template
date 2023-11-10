import { createStore, atom } from "jotai";
import { themeModeAtom } from "./theme";
const globalStore = createStore();
export const languageAtom = atom("cn");
// 初始化设置语言
globalStore.set(languageAtom, "cn");
// 初始化设置主题
globalStore.set(themeModeAtom, "light");
export default globalStore;

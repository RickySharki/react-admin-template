import { createStore,atom } from "jotai";

const globalStore = createStore();
export const languageAtom = atom("cn");
// 初始化设置语言
globalStore.set(languageAtom, "cn");
export default globalStore;
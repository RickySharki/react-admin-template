import { createStore, atom } from "jotai";

const globalStore = createStore();

globalStore.set(atom("light"), "light");
globalStore.set(atom("zh-CN"), "zh-CN");

export default globalStore;
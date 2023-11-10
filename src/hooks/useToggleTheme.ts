import { themeModeAtom } from "@/store/theme";
import { useStore } from "jotai";

type Store = ReturnType<typeof useStore>;

export const toggleTheme = (store: Store) => {
  const currentMode = store.get(themeModeAtom);
  const toToggleTheme = currentMode === "light" ? "dark" : "light";
  store.set(themeModeAtom, toToggleTheme);
};

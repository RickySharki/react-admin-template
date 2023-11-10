import { languageAtom } from "@/store/global";
import i18n from "@/lang/i18n/config";
import { useStore } from "jotai";

type Store = ReturnType<typeof useStore>;

export const toggleLanguage = (store: Store) => {
  const currentLanguage = store.get(languageAtom);
  const toToggleLanguage = currentLanguage === "cn" ? "en" : "cn";
  store.set(languageAtom, toToggleLanguage);
  i18n.changeLanguage(toToggleLanguage);
};

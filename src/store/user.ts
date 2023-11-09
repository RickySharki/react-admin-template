import { atom } from "jotai";
import { User } from "@/model/user";

export const userAtom = atom<User>({
  token: null,
  userInfo: null,
});

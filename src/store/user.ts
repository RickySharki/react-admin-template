import { atom, useAtom } from "jotai";
import { UserInfo, MaybeIsNull, User } from "@/model/user";

export const userAtom = atom<User>({
  token: null,
  userInfo: null,
});

import { userAtom } from "@/store/user";
import { useAtom } from "jotai";
import CryptoJS from "crypto-js";
import { User } from "@/model/user";

export const useUserInfo = (): User => {
  const [userInfo, _] = useAtom(userAtom);
  const encryptedData = localStorage.getItem("userInfo");
  const bytes = CryptoJS.AES.decrypt(encryptedData || "", "UserInfoKey");
  const localUserInfo = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  return userInfo || localUserInfo;
};

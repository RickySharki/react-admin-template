import type { MockMethod } from "vite-plugin-mock";
// import { Random, mock } from 'mockjs'
import { resultSuccess } from "../../interface/index";

const tokenInfo = {
  token: "1234567890",
  userInfo: {
    userName: "Ricky",
    userId: 1001,
  },
};
export default [
  {
    url: "/api/login",
    method: "post",
    response: () => resultSuccess(tokenInfo),
  },
] as MockMethod[];

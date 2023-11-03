// import { create } from "zustand";
// import { User } from "@/model/user";
// const initData: User = {
//   userInfo: null,
//   token: null,
// };
// type Actions = {
//   setUserInfo: (userInfo: { userName: string; userId: number }) => void;
//   setToken: (token: string) => void;
// };

// export const useUserStore = create<User & Actions>((set) => ({
//   ...initData,
//   setUserInfo: (userInfo: { userName: string; userId: number }) =>
//     set(() => ({ userInfo: userInfo })),
//   setToken: (token: string) => set(() => ({ token: token })),
// }));

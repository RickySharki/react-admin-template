export interface User {
  token: MaybeIsNull<string>;
  userInfo: MaybeIsNull<UserInfo>;
}

export interface UserInfo {
  userName: string;
  userId: number;
}

export type MaybeIsNull<T> = T | null;

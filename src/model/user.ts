export interface User {
  token: MaybeIsNull<string>;
  userInfo: MaybeIsNull<UserInfo>;
}

interface UserInfo {
  userName: string;
  userId: number;
}

export type MaybeIsNull<T> = T | null;

export interface RootState {
  /** 获取验证码的sid */
  sid: string;
  /** 当前用户信息 */
  userInfo: UserInfo;
}

export enum UserType {
  /** 游客 */
  unknow = 'unknow',
  /** 普通用户 */
  primary = 'primary',
}

/** 游客（未登录） */
interface Visitor {
  type: UserType.unknow;
}

/** 普通用户（已登陆） */
interface User {
  type: UserType.primary;
}

/** 用户信息 */
export type UserInfo = Visitor | User;

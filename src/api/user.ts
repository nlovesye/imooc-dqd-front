import { request } from "@/utils";

interface ForgetParams {
  code: string;
  userName: string;
  email: string;
}

export async function forget(sendInfo: ForgetParams) {
  return await request.post<
    { data: string; message: string; code: number },
    ForgetParams
  >("/user/forget", sendInfo);
}

export async function login(
  loginInfo: Record<"username" | "password" | "code" | "sid", string>
) {
  return await request.post<{ data: string; msg: string; code: number }>(
    "/user/login",
    loginInfo
  );
}

export async function reg(
  regInfo: Record<"username" | "nickName" | "password" | "code" | "sid", string>
) {
  return await request.post<{ data: string; msg: string; code: number }>(
    "/user/reg",
    regInfo
  );
}

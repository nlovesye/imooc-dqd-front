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

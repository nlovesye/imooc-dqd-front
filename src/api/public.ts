import { request } from "@/utils";

// 获取图形验证码
export async function getCaptcha(params: Record<"sid", string>) {
  return await request.get("/public/getCaptcha", { params });
}

import axios from "axios";

interface ForgetParams {
  code: string;
  userName: string;
  email: string;
}

export async function forget(
  sendInfo: ForgetParams
): Promise<{
  data: { data: string; message: string; code: number };
  status: number;
}> {
  return await axios.post("http://localhost:7000/user/forget", sendInfo);
}

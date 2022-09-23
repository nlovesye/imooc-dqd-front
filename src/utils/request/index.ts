import HttpRequest from "./axios";
import { REQUEST_BASE_URL } from "@/config";

const baseUrl =
  import.meta.env.VITE_NODE_ENV !== "default"
    ? REQUEST_BASE_URL.prod
    : REQUEST_BASE_URL.dev;

const request = new HttpRequest(baseUrl);

export default request;

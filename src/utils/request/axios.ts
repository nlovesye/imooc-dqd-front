import axios from "axios";
import type { AxiosRequestConfig, AxiosInstance } from "axios";

import errorHandle from "./errorHandle";

class HttpRequest {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  // 获取配置
  private getBseConfig<R = any>(): AxiosRequestConfig<R> {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      timeout: 1000 * 30,
    };
    return config;
  }

  // 设置拦截器
  private interceptors(instance: AxiosInstance) {
    // 请求拦截器
    instance.interceptors.request.use(
      function (config) {
        // Do something before request is sent
        return config;
      },
      function (error) {
        // Do something with request error
        errorHandle(error);
        return Promise.reject(error);
      }
    );

    // 请求的响应拦截器
    instance.interceptors.response.use(
      function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        if (response.status === 200) {
          return Promise.resolve(response.data);
        } else {
          errorHandle(response);
          return Promise.reject(response);
        }
      },
      function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        errorHandle(error);
        return Promise.reject(error);
      }
    );
  }

  // 创建实例
  public request<R = any, D = any>(config: AxiosRequestConfig<D>): Promise<R> {
    const instance = axios.create();
    const newConfig = Object.assign(this.getBseConfig(), config);
    this.interceptors(instance);
    return instance.request(newConfig);
  }

  public get<R = any, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<R> {
    const newConfig = Object.assign(
      {
        method: "get",
        url,
      },
      config
    );
    return this.request<R, D>(newConfig);
  }

  public post<R = any, D = any>(url: string, data: D): Promise<R> {
    return this.request<R, D>({
      method: "post",
      url,
      data,
    });
  }

  public put<R = any, D = any>(url: string, data: D): Promise<R> {
    return this.request<R, D>({
      method: "put",
      url,
      data,
    });
  }

  public delete<R = any, D = any>(url: string, data: D): Promise<R> {
    return this.request<R, D>({
      method: "delete",
      url,
      data,
    });
  }
}

export default HttpRequest;

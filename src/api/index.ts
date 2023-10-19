import axios, {
  AxiosInstance,
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { defaults } from "lodash";
import { message } from "antd";

const config = {
  // 默认地址请求地址，可在 .env 开头文件中修改
  baseURL: "/api",
  // 设置超时时间（10s）
  timeout: 10000,
  // 跨域时候允许携带凭证
  withCredentials: true,
};

class RequestHttp {
  service: AxiosInstance;
  public constructor(config: AxiosRequestConfig) {
    // 实例化axios
    this.service = axios.create(config);
    // 请求拦截器
    this.service.interceptors.request.use((config) => {
      return config;
    });

    // 响应拦截器
    this.service.interceptors.response.use((response) => {
      if (response.type !== "ok" && config.showError) {
        message.error(response.message);
      }
      return response.data.data;
    });
  }
  public get<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.request(url, config);
  }

  public post<T>(
    url: string,
    data: Record<string, any>,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.request(url, defaults({ data, method: "POST" }, config));
  }

  patch<T>(
    url: string,
    data: Record<string, any>,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.request(url, defaults({ data, method: "PATCH" }, config));
  }

  public update<T>(
    url: string,
    data: Record<string, any>,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.request(url, defaults({ data, method: "POST" }, config));
  }

  public delete<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.request(url, defaults({ method: "DELETE" }, config));
  }

  public request<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    const headers = config?.headers ?? ({} as Record<string, any>);

    const option = defaults<AxiosRequestConfig, AxiosRequestConfig>(
      config || {},
      {
        url,
        method: "GET",
        headers,
        timeout: 20 * 1000
      }
    );

    return this.service.request(option);
  }
}

export default new RequestHttp(config);

/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import Cookies from "js-cookie";
import { transData } from "./util";
import router from "@/router";
import qs, { IStringifyOptions } from "qs";
import { IR } from "@/model/common";
import { message } from "ant-design-vue";

// axios 配置
axios.defaults.timeout = 6000;
axios.defaults.baseURL = process.env.VUE_APP_SERVER_URL;
axios.defaults.withCredentials = true;

// 返回状态判断
axios.interceptors.response.use(
  (res: any) => {
    if (res.data.code === 403 || res.data.code === 206) {
      Cookies.remove("accessRouter");
      Cookies.remove("accessToken");
      router.push({
        name: "login"
      });
    }

    if (res.status === 200) {
      if (res.headers.authorization) {
        Cookies.set("accessToken", res.headers.authorization);
      }

      // 对返回值进行数据处理
      res.data = transData(res.data);
      return res;
    }

    return Promise.reject(res);
  },
  error => {
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      Cookies.remove("accessRouter");
      Cookies.remove("accessToken");
      router.push({
        name: "login"
      });
    }
    return Promise.reject(error);
  }
);

export function post<T>(
  url: string,
  params?: any,
  config?: object,
  qsConfig?: IStringifyOptions
): Promise<IR<T>> {
  const token: string | undefined = Cookies.get("accessToken");
  let headers = { "Content-Type": "application/x-www-form-urlencoded" };
  // let headers: object = { "Content-Type": "application/json" };
  // let headers: object = { 'Content-Type':'multipart/form-data' };
  // params = qs.stringify(params, qsConfig || { arrayFormat: "repeat" });

  // if (token) {
  //   headers = Object.assign(headers, { Authorization: token });
  // }

  if (config) {
    headers = Object.assign(headers, config);
  }

  if (headers["Content-Type"] === "application/x-www-form-urlencoded") {
    params = qs.stringify(params, qsConfig || { arrayFormat: "repeat" });
  }
  headers = Object.assign(headers, { "cloud-auth": "bearer 15ffd2e5-2b3b-4a25-8be5-7d2699c7845b" });

  return new Promise((resolve, reject) => {
    axios
      .post(url, params, {
        headers: headers,
        timeout: 600000
      })
      .then(res => {
        // if (res.data.code !== 200) {
        //   message.error(res.data.message);
        //   return;
        // }
        resolve(res.data);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export function get(url: string, params?: any): Promise<any> {
  const token: string | undefined = Cookies.get("accessToken");
  let headers: object = {};
  // if (token) {
  //   headers = Object.assign(headers, { Authorization: token });
  // }
  headers = Object.assign(headers, { "cloud-auth": "bearer 15ffd2e5-2b3b-4a25-8be5-7d2699c7845b" });

  if (params) {
    params = Object.assign(params, { _t: new Date().getTime() });
  } else {
    params = { _t: new Date().getTime() };
  }

  return new Promise((resolve, reject) => {
    axios
      .get(url, { params: params, headers: headers })
      .then(res => {
        if (res.data.code != 206) {
          resolve(res.data);
        }
      })
      .catch(error => {
        reject(error);
      });
  });
}

export function upload(
  url: string,
  formData: any,
  config?: Record<string, any>
): Promise<any> {
  const token: string | undefined = Cookies.get("accessToken");
  let headers: object = { "Content-Type": "multipart/form-data" };
  if (token) {
    headers = Object.assign(headers, { Authorization: token });
  }

  return new Promise((resolve, reject) => {
    axios
      .post(url, formData, {
        headers: headers,
        timeout: 120000,
        ...config
      })
      .then(res => {
        if (res.data.code != 206) {
          resolve(res.data);
        }
      })
      .catch(error => {
        reject(error);
      });
  });
}

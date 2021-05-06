/*
 * @Author: 汤波
 * @Date: 2020-10-20 09:52:48
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2020-10-25 19:06:19
 * @FilePath: \web\src\model\common.ts
 */
import { Message } from "ant-design-vue/types/message";
import { Router } from "vue-router";
import { IStringifyOptions } from "qs";

export interface IR<T> {
  code: number;
  msg: string;
  data: T;
}

export interface IPage<T> {
  current: number;
  pages: number;
  total: number;
  size: number;
  records: T[];
}

export interface IResPage {
  current: string;
  pages: string;
  total: string;
  size: string;
  records: object[];
}

export interface IPagination {
  current: number;
  pageSize: number;
  total?: number;
}

export interface IModal<T> {
  showModal: (value?: T) => void;
}

export interface IGlobalProperties {
  post: <T>(
    url: string,
    params: any,
    config?: object,
    qsConfig?: IStringifyOptions
  ) => Promise<IR<T>>;
  get: (url: string, params?: any) => Promise<any>;
  upload: (
    url: string,
    formData: any,
    config?: Record<string, any>
  ) => Promise<any>;
  message: Message;
  router: Router;
}

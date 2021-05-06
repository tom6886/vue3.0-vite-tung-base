/*
 * @Author: 汤波
 * @Date: 2020-10-19 14:40:09
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2020-10-25 20:19:07
 * @FilePath: \web\src\utils\util.ts
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { IR, IResPage, IPage } from "@/model/common";

function isR(object: any): object is IR<any> {
  return "code" in object && "message" in object && "data" in object;
}

function isPage(object: any): object is IResPage {
  return (
    "current" in object &&
    "pages" in object &&
    "total" in object &&
    "size" in object &&
    "records" in object
  );
}

export function transData(data: any) {
  if (!isR(data) || typeof data.data !== "object") {
    return data;
  }

  const _data = data.data;

  if (_data && isPage(_data)) {
    const _page: IPage<any> = {
      current: parseInt(_data.current),
      pages: parseInt(_data.current),
      total: parseInt(_data.total),
      size: parseInt(_data.size),
      records: _data.records
    };

    data.data = _page;
    return data;
  }

  return data;
}

/*
 * @Author: Jiang Junjie
 * @Date: 2021-04-28 10:10:34
 * @Description: 使用表单字段的组合式 API
 * @LastEditors: Jiang Junjie
 * @LastEditTime: 2021-04-28 13:10:33
 * @FilePath: /csxt-ui-system/src/utils/useFormFields.ts
 */

import { reactive } from "vue";
import { cloneDeep } from "lodash";

/**
 * 使用表单字段的组合式 API
 */
export default function useFormFields<T extends object>(fields: T) {
  /**
   * 原始表单字段
   */
  const originalFields = cloneDeep(fields);

  /**
   * 表单字段
   */
  const formFields = reactive<T>(fields);

  /**
   * 重置表单字段
   */
  const resetFormFields = () => {
    for (const key in formFields) {
      if (Object.prototype.hasOwnProperty.call(formFields, key)) {
        if (key in originalFields) {
          formFields[key] = originalFields[key as string];
        }
      }
    }
  };

  return { formFields, resetFormFields };
}

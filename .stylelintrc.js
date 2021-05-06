/*
 * @Author: 汤波
 * @Date: 2021-04-30 16:38:29
 * @Description:
 * @LastEditors: 汤波
 * @LastEditTime: 2021-04-30 16:38:42
 * @FilePath: \jrcs-manage\.stylelintrc.js
 */
module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-rational-order"],
  plugins: ["stylelint-order"],
  rules: {
    "selector-pseudo-class-no-unknown": null,
    "no-descending-specificity": null,
    "at-rule-no-unknown": null,
    "font-family-no-missing-generic-family-keyword": null,
    "selector-type-no-unknown": null,
  },
};

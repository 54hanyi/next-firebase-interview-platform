/* eslint-disable no-undef */
/* eslint-env node */
module.exports = {
  root: true,
  env: {
    browser: true, // 瀏覽器全域變數
    node: true, // Node.js 全域變數
    es2021: true, // 支援 ES2021 語法
  },
  parser: '@typescript-eslint/parser', // 如果是純 JS 可以拿掉這行
  parserOptions: {
    ecmaVersion: 'latest', // 允許最新 ECMAScript 語法
    sourceType: 'module', // 啟用 import/export
    ecmaFeatures: {
      jsx: true, // 啟用 JSX 語法檢查
    },
  },
  settings: {
    react: {
      version: 'detect', // 自動偵測已安裝的 React 版本
    },
  },
  plugins: [
    'react',
    'react-hooks',
    'prettier',
    '@typescript-eslint', // 如果是純 JS 可以拿掉
  ],
  extends: [
    'eslint:recommended', // ESLint 推薦規則
    'plugin:react/recommended', // React 推薦規則
    'plugin:@typescript-eslint/recommended', // TS 推薦規則，可不需要
    'plugin:prettier/recommended', // 整合 Prettier，並關閉與 Prettier 衝突的規則
  ],
  rules: {
    // 把 Prettier 格式錯誤當作 ESLint error
    'prettier/prettier': 'error',

    // React 17+ 已自動引入 JSX，不需 import React
    'react/react-in-jsx-scope': 'off',

    // 其他自訂規則：
    'react/prop-types': 'off', // 若使用 TS 可以關掉 prop-types
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
};

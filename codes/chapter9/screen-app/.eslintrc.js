module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prettier/prettier": "off",
    "vue/no-unused-components": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "no-irregular-whitespace": "off", //禁止掉空格报错检查
    "@typescript-eslint/no-explicit-any":"off",
    "@typescript-eslint/no-empty-function":"off",
    "@typescript-eslint/no-inferrable-types": "off", // 关闭类型推断
    '@typescript-eslint/no-var-requires': "off",
    "@typescript-eslint/ban-ts-comment": "off",
  },
};

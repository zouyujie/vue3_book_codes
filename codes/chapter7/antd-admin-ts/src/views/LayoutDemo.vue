<template>
  <a-layout>
    <a-layout-header>Header</a-layout-header>
    <a-layout-content>Content</a-layout-content>
    <a-layout-footer>Footer</a-layout-footer>
  </a-layout>
  <hr />
  <a-layout>
    <a-layout-header>Header</a-layout-header>
    <a-layout>
      <a-layout-sider>Sider</a-layout-sider>
      <a-layout-content>Content</a-layout-content>
    </a-layout>
    <a-layout-footer>Footer</a-layout-footer>
  </a-layout>
  <hr />
  <a-layout>
    <a-layout-header>Header</a-layout-header>
    <a-layout>
      <a-layout-content>Content</a-layout-content>
      <a-layout-sider>Sider</a-layout-sider>
    </a-layout>
    <a-layout-footer>Footer</a-layout-footer>
  </a-layout>
  <hr />
  <a-layout>
    <a-layout-sider>Sider</a-layout-sider>
    <a-layout>
      <a-layout-header>Header</a-layout-header>
      <a-layout-content>Content</a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<style lang="scss" scoped>
.code-box-demo {
  text-align: center;
}
.ant-layout-header,
.ant-layout-footer {
  color: #fff;
  background: #7dbcea;
}
[data-theme="dark"] .ant-layout-header {
  background: #6aa0c7;
}
[data-theme="dark"] .ant-layout-footer {
  background: #6aa0c7;
}
.ant-layout-footer {
  line-height: 1.5;
}
.ant-layout-sider {
  color: #fff;
  line-height: 120px;
  background: #3ba0e9;
}
[data-theme="dark"] .ant-layout-sider {
  background: #3499ec;
}
.ant-layout-content {
  min-height: 120px;
  color: #fff;
  line-height: 120px;
  background: rgba(16, 142, 233, 1);
}
[data-theme="dark"] .ant-layout-content {
  background: #107bcb;
}
.code-box-demo > .ant-layout + .ant-layout {
  margin-top: 48px;
}
</style>
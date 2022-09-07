<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo" />
      <a-menu theme="dark" v-model:selectedKeys="selectedKeys" mode="inline">
        <a-menu-item key="1">
          <pie-chart-outlined />
          <span>统计报表</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <template #title>
            <span>
              <user-outlined />
              <span>权限管理</span>
            </span>
          </template>
          <a-menu-item key="3"><icon-font type="icon-yonghu"></icon-font>用户管理</a-menu-item>
          <a-menu-item key="4">角色管理</a-menu-item>
          <a-menu-item key="5">菜单管理</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="9">
          <file-outlined />
          <span>文件管理</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: lightblue; padding: 0" />
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>权限管理</a-breadcrumb-item>
          <a-breadcrumb-item>用户管理</a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
           <router-view />
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import {
  PieChartOutlined,
  UserOutlined,
  FileOutlined,
  createFromIconfontCN
} from '@ant-design/icons-vue';
const IconFont=createFromIconfontCN({scriptUrl:'//at.alicdn.com/t/font_2155726_mp6hgha7b2g.js'});

import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    PieChartOutlined,
    UserOutlined,
    FileOutlined,
    IconFont
  },

  data() {
    return {
      collapsed: ref(false),
      selectedKeys: ref(['1']),
    };
  },
});
</script>
<style lang="scss" scoped>
 .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>
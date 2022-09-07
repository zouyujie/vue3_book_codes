<template>
  <div class="locale-box">
    <span style="margin-right: 16px">选择语言</span>
    <a-radio-group v-model:value="locale">
      <a-radio-button key="en" :value="enUS.locale">英文</a-radio-button>
      <a-radio-button key="cn" :value="zhCN.locale">中文</a-radio-button>
    </a-radio-group>
    <a-config-provider :locale="locale === 'en' ? enUS : zhCN">
      <div>
        <a-transfer
          :data-source="[]"
          show-search
          :target-keys="[]"
          :render="(item) => item.title"
        />
      </div>
      <div>
        <a-table :data-source="[]" :columns="columns" />
      </div>
    </a-config-provider>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import enUS from "ant-design-vue/es/locale/en_US";
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import moment from "moment";
import "moment/dist/locale/zh-cn";
moment.locale("en");

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    filters: [
      {
        text: "filter1",
        value: "filter1",
      },
    ],
  },
  {
    title: "Age",
    dataIndex: "age",
  },
];
export default defineComponent({
  setup() {
    const locale = ref(enUS.locale);
    watch(locale, (val) => {
      moment.locale(val);
    });
    return { locale, enUS, zhCN, moment, columns };
  },
});
</script>

<style scoped>
.locale-box{
  width: 420px;
}
</style>
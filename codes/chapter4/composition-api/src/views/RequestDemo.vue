<template>
<div class="about">
  <h3 v-if="loading">正在加载中....</h3>
  <h3 v-else-if="errorMsg">错误信息:{{ errorMsg }}</h3>
  <ul v-for="p in result" :key="p.id">
    <li>id: {{p.id}}</li>
    <li>title: {{p.title}}</li>
    <li>price: {{p.price}}</li>
  </ul>
</div>
</template>

<script lang="ts">
import {
  watch
} from "vue"
import useRequest from '../hooks/useRequest';

// 产品数据接口，定义接口约束数据类型
interface ProductResult {
  id: string;
  title: string;
  price: number;
}

export default {
  setup() {
    const {loading, result, errorMsg} = useRequest<ProductResult[]>('/data/products.json');
    watch(result, () => {
      if (result.value) {
        console.log(result.value.length) // 有提示
      }
    })
    return {
      loading,
      result, 
      errorMsg
    }
  }
}
</script>
<template>
  <b-btn>登 录</b-btn>
  <b-btn><i>@</i>注 册</b-btn>
  <b-btn></b-btn>
  <b-btn class="warn">删 除</b-btn>
  <b-btn>
    <label>图标删除</label>
    <!-- 旧语法 -->
    <!-- <template slot="icon"> <img src="../assets/imgs/del.png"/></template> -->
    <!-- 新语法 -->
    <template v-slot:icon>
      <img src="../assets/imgs/del.png" />
    </template>
  </b-btn>
  <b-btn>
    <!-- 旧语法 -->
    <!-- <template slot="other" slot-scope="list">
      古代名阵{{ list.data }}
    </template> -->
    <!-- 新语法 -->
    <template v-slot:other="list"> 古代名阵{{ list.data }} </template>
  </b-btn>
</template>

<script>
import MyButton from "../components/MyButton";
export default {
  components: {
    "b-btn": MyButton,
  },
};
</script>
<style scoped>
button {
  margin: 5px;
}
img {
  width: 15px;
  height: 15px;
  display: inline-block;
}
</style>

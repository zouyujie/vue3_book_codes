<template>
  <!-- 迭代普通数组 -->
  <ul>
    <li v-for="(item, index) in list" :key="index">{{ ++index }}.{{ item }}</li>
  </ul>
  <!-- 迭代对象数组 -->
  <ul>
    <li v-for="(item, index) in users" :key="index">
      {{ index++ }}.[{{ item.title }}]{{ item.name }}
    </li>
  </ul>
  <!-- 迭代对象中的属性 -->
  <!-- 注意：在遍历对象身上的键值对的时候，除了有
val 、key ,在第三个位置还有一个索引index -->
  <p v-for="(val, key, index) in userInfo" :key="index">
    键是：{{ key }} ，值是：{{ val }} ，索引：{{ index }}
  </p>
  <!-- 迭代数字 -->
  <p v-for="i in 3" :key="i">这是第 {{ i }} 个p标签</p>
</template>

<script>
export default {
  data () {
    return {
      list: ['《水浒传》', '《三国演义》', '《西游记》', '《红楼梦》'],
      users: [{ name: '段延庆', title: '恶贯满盈' }, { name: '叶二娘', title: '无恶不做' }, { name: '南海鳄神', title: '凶神恶煞' }, { name: '云中鹤', title: '穷凶极恶' }],
      userInfo: {
        username: '张三丰',
        age: 100,
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
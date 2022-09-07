<template>
    <!-- 单个元素 -->
    <span v-once>天长地久，海枯石烂， {{ msg }}</span>
    <!-- 有子元素 -->
    <div v-once>
      <h1>只因为在人群中多看了一眼</h1>
      <p>{{ msg }}</p>
    </div>
    <button @click="onChange">改变</button>
</template>

<script>
export default {
    data(){
        return {
            msg:'我爱你'
        }
    },
    methods:{
        onChange(){
            this.msg="我不再爱你了";
            console.log(this.msg);
        }
    }
};
</script>

<style lang="scss" scoped></style>

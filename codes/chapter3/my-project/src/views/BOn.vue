<template>
  <h3>{{ msg }}</h3>
  <!-- 调用无参方法时可以省略() -->
  <button v-on:click="getMsg">获取信息</button>
  <button @click="setMsg()">设置信息</button>
  <h3 v-text="title"></h3>
  <button @click="setTitle('海阔天空')">设置Title</button>
  <!-- $event是固定写法 -->
  <!-- data-自定义属性 -->
  <button data-cid="9547" @click="onBtnClick($event)">获取事件对象</button>
  <a href="http://www.cnblogs.com/jiekzou" @click="show('沉默是金',$event)">点歌</a>
</template>

<script>
export default {
  data () {
    return {
      msg: '真的爱你',
      title: '',
    }
  },
  methods: {
    getMsg () {
      alert(this.msg);
    },
    setMsg () {
      this.msg = '喜欢你';
    },
    setTitle (title) {
      this.title = title;
    },
    onBtnClick (event) {
      console.log(event);
      // event.srcElement：获取当前button
      event.srcElement.style.color = 'blue';
      console.log(event.srcElement.dataset.cid); //9547
      event.preventDefault(); //取消事件的默认动作。
      event.stopPropagation();//阻止事件冒泡
    },
    show(msg,event){
        if(event){
            event.preventDefault();//不加的话会默认跳转到href所指定的地址
        }
        alert(msg);
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
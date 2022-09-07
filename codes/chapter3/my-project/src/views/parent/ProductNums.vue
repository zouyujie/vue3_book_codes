<template>
    <input type="number" class="nums" v-model="productNums" @input="changeNums" min="0"/>
</template>

<script>
    export default {
        props:{
            id:{
                 type:Number,
            },
            nums:{
                type:Number,
                default:0
            }
        },
        data(){
            return {
                productNums:this.nums
            }
        },
        methods:{
            changeNums(event){
                this.$emit('updateNums',this.id,event.target.value);
                //另一种调用方式
                // this.$parent.$parent.updatedList(this.id,event.target.value);
                //直接调用根组件的方法
                this.$root.say(); //我是一代目
            }
        }
    }
</script>

<style lang="scss" scoped>
.nums{
    width: 60px;
}
</style>
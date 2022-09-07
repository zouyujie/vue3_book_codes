<template>
    <div>
           <div class="row">
                姓名（文本）：<input type="text" v-model="name">
           </div>
             <div class="row">
            种族（单选按钮）：
            <input type="radio" name="race" value="1" v-model="race">汉人
            <input type="radio" name="race" value="0" v-model="race">契丹人
             </div>
           <div class="row">
            武功（多选框）：
            <input type="checkbox" name="skills" value="1" v-model="skills">擒龙功
            <input type="checkbox" name="skills" value="2" v-model="skills">降龙十八掌
            <input type="checkbox" name="skills" value="3" v-model="skills">打狗棒法
            </div>
            <div class="row">
            职位（下拉框）：
            <select name="jobs" v-model="job">
                <option v-for="(item,index) in jobs" :key="index" :value="item.code">{{item.name}}</option>
            </select>
             </div>
             <div class="row">
            奋斗目标（多行文本）:<br/>
            <textarea id="" cols="30" rows="3" v-model="desc"></textarea>
             </div>
            <div class="row">
            <button type="button" @click="submitForm">提交</button>
            </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                name: '乔峰',
                race: '0',  // 默认值为0，它就会选中值为0的，也就是契丹人。
                skills: ['2'], // 复选框被勾选之后会获得数组形式,默认选中降龙十八掌
                jobs: [
                    { code: 'bz', name: '丐帮帮主' },
                    { code: 'dw', name: '南院大王' },
                ],
                job: 'bz',
                desc: ''
                }
        },
        methods:{
              submitForm: function () {
                    // 获取表单数据
                    console.log(this.name + ',' + this.race + ',' + this.skills + ',' + this.job + ',' + this.desc);
                }
            }
    }
</script>

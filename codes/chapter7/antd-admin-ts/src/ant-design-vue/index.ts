import {Form,Input,Button,Layout,Menu,Breadcrumb} from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
const components=[Form,Input,Button,Layout,Menu,Breadcrumb];

export function setupAntd(app:any){
   components.forEach(component=>{
       app.use(component);
   })
}
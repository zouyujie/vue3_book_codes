import ElementPlus from "element-plus"; //引入ElementPlus
import 'element-plus/theme-chalk/src/index.scss'//引入样式
export default function loadComponent(app:any):void {
  app.use(ElementPlus, {
    size: 'small', zIndex: 3000 
  });
}

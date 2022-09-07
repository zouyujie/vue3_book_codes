import JieHeader from "../components/header/index.vue";
import JieCharts from "../components/echarts/index.vue";
export default function loadComponent(app: any):void {
    app.component(JieHeader.name,JieHeader);
    app.component(JieCharts.name,JieCharts);
}
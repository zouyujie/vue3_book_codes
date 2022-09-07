import { computed, toRef, toRaw } from "vue";
import { useStore } from "vuex";

export default function ():any {
  const store = useStore();
  //获取当前日期类型
  const screenDataType = computed(() => {
    return store.getters['app-global/GET_DATATYPE'];
  });
  //获取当前标题
  const getTitle:any = (props) => {
    return toRef(props, "title").value;
  };
  //初始化echart的样式
  const chartStyle = toRaw({
    width: "100%",
    "min-height": "60px",
    height: "100%",
  });
  return {
    screenDataType,
    getTitle,
    chartStyle,
  };
}

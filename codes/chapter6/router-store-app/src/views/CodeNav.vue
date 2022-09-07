<template>
  <div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();
    // 字符串
    router.push("/book");
    // 对象
    router.push({ path: "/book" });
    // 命名的路由
    router.push({ name: "book", params: { bookId: 1 } });
    // 带查询参数，变成 /book?id=1
    router.push({ path: "book", query: { id: 1 } });
    // 带 hash，结果是 /book#vue
    router.push({ path: "/book", hash: "#vue" });

    const bookId = 1;
    router.push({ name: "book", params: { bookId } }); // -> /book/1
    router.push({ path: `/book/${bookId}` }); // -> /book/1
    // 这里的 params 不生效
    router.push({ path: "/book", params: { bookId } }); // -> /book

    return {};
  },
});
</script>

<style scoped>
</style>
<template>
  <div></div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    //--------------get请求--------------
    // 为给定 ID 的 user 创建请求
    axios
      .get("/user?ID=1127")
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });

    // 可选地，上面的请求可以这样做
    axios
      .get("/user", {
        params: {
          ID: 1127,
        },
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    //--------------post请求--------------
    axios
      .post("/user", {
        firstName: "邹",
        lastName: "玉杰",
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    //-------------- 执行多个并发请求--------------
    function getUserAccount() {
      return axios.get("/user/1127");
    }
    function getUserPermissions() {
      return axios.get("/user/1127/permissions");
    }
    axios.all([getUserAccount(), getUserPermissions()]).then(
      axios.spread(function(acct, perms) {
        // 两个请求现在都执行完成
      })
    );
  },
};
</script>

<style lang="scss" scoped></style>

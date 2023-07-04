<template>
  <!-- 组件结构 -->
  <div class="demo">
    <h2>学生姓名：{{ name }}</h2>
  </div>
</template>

<script lang="ts">
//组件交互
export default {
  name: "MyStudent",
  data() {
    return {
      name: "小a"
    };
  },
};
</script>

<style scoped>
/* 组件样式 */
.demo {
  background-color: red;
}
</style>
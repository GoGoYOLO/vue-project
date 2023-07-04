<template>
  <!-- 组件结构 -->
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
  </div>
</template>

<script lang="ts">
//组件交互
export default {
  name: "MySchool",
  data() {
    return {
      name: "xxx中学",
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
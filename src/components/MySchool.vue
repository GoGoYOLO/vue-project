<template>
  <!-- 组件结构 -->
  <div class="demo">
    <h2>学校名称：{{ schoolName }}</h2>
  </div>
</template>

<script setup lang="ts">
//组件交互
export default {
  // name:'MySchool',
  data() {
    return {
      schoolName: "xxx中学",
      address: "xxx号",
    };
  },
};
</script>

<style lang="" scoped>
/* 组件样式 */
.demo {
  background-color: red;
}
</style>
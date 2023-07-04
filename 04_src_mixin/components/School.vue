<template>
  <div>
    <h2 @click="showName">学校姓名：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
import mixin from "../mixin";

export default {
  name: "Student",
  data() {
    return {
      name: "xxx中学",
      address: "xxx号",
    };
  },
  mixins: [mixin],
};
</script>

<style>
</style>
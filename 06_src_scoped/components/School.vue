<template>
  <div class="demo">
    <h2>学校姓名：{{ name }}</h2>
    <h2 class="qq">学校地址：{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "xxx中学",
      address: "xxx号",
    };
  },
};
</script>

<style lang='less' scoped>
.demo {
  background-color: blue;
  .qq {
    color: red;
  }
}
</style>
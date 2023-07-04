<template>
  <div>
    <h2>学校姓名：{{ name | mySlice }}</h2>
    <h2>学校地址：{{ address }}</h2>
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

<style>
</style>
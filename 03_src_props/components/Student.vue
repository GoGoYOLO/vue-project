<template>
  <div>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>学生年龄：{{ myAge }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      myAge: this.age,//修改props接收过来的数据
    };
  },
  // 简单接收
  props: ["name", "sex", "age"],

  //接收的同时并限制类型
  // props: {
  //   name: String,
  //   sex: String,
  //   age: Number,
  // },

  //接收的同时：限制类型+默认值的指定+必要性的限制
  // props: {
  //   name: {
  //     type: String, //类型
  //     required: true, //是否必传
  //   },
  //   sex: {
  //     type: String,
  //     required: false,
  //     default: "男", //不传时的默认值
  //   },
  //   age: {
  //     type: Number,
  //     required: true,
  //   },
  // },
};
</script>

<style>
</style>
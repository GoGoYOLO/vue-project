<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendStudentName">send</button>
    <button @click="unbind">解绑</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "小a",
      sex: "男",
    };
  },methods:{
     sendStudentName(){
      this.$emit('send',this.name)
    },
    unbind(){
      this.$off(['send'])
    }
  }
};
</script>

<style scoped>
.student {
  background-color: red;
  padding: 5px;
  margin-top: 5px;
}
</style>
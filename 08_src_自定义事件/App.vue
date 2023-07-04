<template>
  <div class="app">
    <h1>{{ msg }},{{studentName}}</h1>
    <!-- props 子组件给父组件传数据 -->
    <School :getSchoolName="getSchoolName"></School>

    <!-- emit 子组件给父组件传数据 -->
    <!-- <Student @send="getStudentName"></Student> -->
    
    <Student ref="student" />
  </div>
</template>

<script>
import School from "./components/School.vue";
import Student from "./components/Student.vue";

export default {
  name: "App",
  components: {
    Student,
    School,
  },
  data() {
    return {
      msg: "ddd",
      studentName:''
    };
  },
  methods: {
    getSchoolName(name) {
      console.log(name);

    },
    getStudentName(name) {
      console.log(name);
    }
  },
  mounted(){
    this.$refs.student.$on('send',this.getStudentName)
  }
};
</script>

<style>
.app {
  background-color: gray;
  padding: 5px;
}
</style>
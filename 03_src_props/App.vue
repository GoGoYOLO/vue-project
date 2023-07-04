<template>
  <div>
    <Student name="aa" :age="18" sex="男"></Student>
  </div>
</template>

<script>
import Student from "./components/Student.vue";

export default {
  name: "App",
  components: {
    Student,
  },
};
</script>

<style>
</style>
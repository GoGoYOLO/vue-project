<template>
  <div class="school">
    <h2>学校姓名：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="sendSchoolName">send</button>
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
  props:['getSchoolName'],
  methods:{
    sendSchoolName(){
      this.getSchoolName(this.name)
    }
  }
};
</script>

<style  scoped>
.school {
  background-color: blue;
  padding: 5px;
}
</style>
<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="show" ref="btn">点击</button>
    <School ref="sch"></School>
  </div>
</template>

<script>
import School from "./components/School.vue";

export default {
  name: "App",
  data(){
    return{
      msg:'欢迎'
    }
  },
  components: {
    School,
  },
  methods:{
    show(){
      console.log(this.$refs);
    }
  }
};
</script>

<style>
</style>
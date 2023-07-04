<template>
 
</template>

<script>
import axios from 'axios'
export default {
  name: "App",
  methods:{
    getInfo(){
      axios.get('http://localhost:8080/api/students').then(
        Response=>{

        },
        Error=>{

        }
      )
    }
  }

};
</script>

<style scoped>

</style>
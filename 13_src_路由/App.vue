<template>
  <div>
    <Banner />
    <div>
      <router-link replace active-style="color:red" :to="{name:'guanyu'}">About</router-link>
      <router-link replace to="/home">Home</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Banner from "./components/Banner";

export default {
  name: "App",
  components: {
    Banner,
  },
};
</script>

<style>
</style>
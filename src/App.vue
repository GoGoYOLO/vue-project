<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import LoginPhone from "./components/LoginPhone.vue";
export default {
  name: "App",
  components: {
    LoginPhone,
  },
};
</script>

<style>
</style>
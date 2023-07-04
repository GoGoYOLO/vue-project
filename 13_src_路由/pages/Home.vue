<template>
  <div>
    <h4>Home</h4>
    <div>
      <router-link active-style="color:red" to="/home/message"
        >Message</router-link
      >
      <router-link to="/home/news">News</router-link>
    </div>
    <keep-alive include="News">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
</style>
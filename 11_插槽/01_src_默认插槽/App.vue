<template>
  <div class="container">
    <Category title="美食" :listData="foods">
      <h2>xxxxx</h2>
    </Category>
    <Category title="游戏" :listData="games" >
       <ul>
      <li v-for="(index,item) in games" :key="index">{{item}}</li>
    </ul>
    </Category>
    <Category title="电影" :listData="films" />
  </div>
</template>

<script>
import Category from "./components/Category";

export default {
  name: "App",
  components: {
    Category,
  },
  data() {
    return {
      foods: ["1", "2", "3"],
      games: ["4", "5", "6"],
      films: ["7", "8", "9"],
    };
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: space-around;
}
</style>
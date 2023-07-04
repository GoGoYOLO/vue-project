<template>
  <div class="category">
    <h3>{{ title }}</h3>
    <slot :games="games"></slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
  data() {
    return {
      games: ["1", "2", "3"],
    };
  },
};
</script>

<style>
.category {
  background-color: pink;
  width: 200px;
  height: 300px;
}
h3 {
  text-align: center;
  background-color: orange;
}
</style>
<template>
  <div class="category">
    <h3>{{title}}</h3>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props:['listData','title']
};
</script>

<style>
.category {
  background-color: pink;
  width: 200px;
  height: 300px;
  
}
h3{
  text-align: center;
  background-color: orange;
}
</style>
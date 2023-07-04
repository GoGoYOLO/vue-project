<template>
  <div>
    <!-- <div>编号：{{$route.query.id}}</div>
    <div>内容：{{$route.query.title}}</div> -->

    <div>编号：{{$route.params.id}}</div>
    <div>内容：{{$route.params.title}}</div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  mounted(){

  }
};
</script>

<style>
</style>
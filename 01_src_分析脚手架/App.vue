<template>
  <div>
    <MySchool></MySchool>
    <MyStudent></MyStudent>
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
//引入组件
import MySchool from "./components/MySchool";
import MyStudent from "./components/MyStudent";
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    MySchool,
    MyStudent,
    HelloWorld,
  },
};
</script>
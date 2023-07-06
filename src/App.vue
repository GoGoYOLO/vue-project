<template>
  <div>
    <router-view></router-view>
    <div v-show="$store.state.userAbout.isLogin" class="navi">
      <div class="text">{{ $store.state.userAbout.currentUser.currentMusic }}</div>
      <div class="link">
        <router-link replace active-class="red" to="/home">Home</router-link>
        <router-link replace active-class="red" to="/user">User</router-link>
      </div>
    </div>
  </div>
</template>

<script>
// import LoginPhone from "./components/LoginPhone.vue";
export default {
  name: "App",
  components: {
    // LoginPhone,
  },
};
</script>

<style>
.body {
  height: 100%;
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
}
.content {
  flex: 1;
  overflow-y: auto;
}

.foot {
  height: 100px;
  width: 100%;
}

.container {
  height: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0%);
  /* background-color: red; */
}
.row {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.column {
  display: flex;
  flex-direction: column;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
}
input[type='number'] {
  -moz-appearance: textfield;
}


.red {
  color: red;
}

.navi {
  width: 100%;
  position: fixed;
  bottom: 0;
  margin-top: 10px;
  background-color: white;
}

.text {
  line-height: 50px;
  border-top: 1px solid black;
}
.link {
  line-height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-top: 1px solid black;
}
</style>
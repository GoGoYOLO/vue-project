<template>
  <div class="total">
    <router-view class="content"></router-view>
    <div v-show="$store.state.userAbout.isLogin" class="navi">
      <div class="text">
        {{ $store.state.userAbout.currentUser.currentMusic }}
      </div>
      <div class="link">
        <router-link replace active-class="red" to="/home">Home</router-link>
        <router-link replace active-class="red" to="/user">User</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  beforeCreate() {
    document
      .querySelector("html")
      .setAttribute("style", "height: 100%;  width: 100%; margin: 0; overflow-y: scroll");
    document
      .querySelector("body")
      .setAttribute("style", "height: 100%;  width: 100%; margin: 0; overflow-y: hidden");
  },
};
</script>

<style>
.total {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
  overflow-y: auto;
}

.container {
  height: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0%);
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
input[type="number"] {
  -moz-appearance: textfield;
}

.red {
  color: red;
}

.navi {
  height: 80px;
  width: 100%;
  margin-top: 10px;
}

.text {
  line-height: 50px;
  padding-left: 10px;;
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
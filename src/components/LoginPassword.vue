<template>
  <div class="container">
    <div class="header">
      <h2>请输入登录密码</h2>
      <h4 style="color: grey">使用手机号密码登录</h4>
    </div>
    <div class="phoneInput">
      <input
        class="input"
        type="text"
        v-model="password"
        placeholder="请输入密码"
      />
    </div>
    <el-row>
      <el-button type="warning" round class="next" @click="login"
        >立即登录</el-button
      >
    </el-row>
    <div></div>
  </div>
</template>

<script>
import { nanoid } from "nanoid";

export default {
  name: "LoginPassword",
  data() {
    return {
      password: "",
    };
  },
  methods: {
    login() {
      this.userList = this.$store.state.userAbout.userList;
      if (this.password !== "") {
        this.userList.forEach((user) => {
          if (user.phone === this.$route.query.phone) {
            if (this.password == user.password) {
              this.$router.push({
                name: "home",
              });
              this.password = "";
            } else {
              alert("密码不正确");
            }
          } else {
            const userObj = {
              id: nanoid(),
              phone: this.$route.query.phone,
              password: this.password,
            };
            this.$store.commit("userAbout/addUser", userObj);
            this.$router.push({
              name: "home",
            });
            this.password = "";
          }
        });
      } else {
        alert("请输入密码");
      }
    },
  },
};
</script>

<style scoped>
.container {
  height: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0%);
}
.header {
  height: auto;
}
.phoneInput {
  border-bottom: 1px solid orange;
}
.input {
  border: 0;
  outline: none;
}
.next {
  border-style: none;
  outline: none;
}
.next {
  width: 100%;
  margin-top: 50px;
}
</style>
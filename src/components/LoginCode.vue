<template>
  <div class="container">
    <div>
      <h2>请输入12345</h2>
      <h4 style="color: grey">
        验证码已发送至您的手机 +86 {{ $route.query.phone }}
      </h4>
    </div>

    <input
      type="number"
      maxlength="5"
      v-model="code"
      placeholder="请输入验证码"
    />
    <br />
    <el-button
      type="warning"
      round
      class="btn"
      @click="again"
      :disabled="sec !== ''"
      >重新获取{{ sec }}</el-button
    >
    <el-row>
      <el-button type="warning" round class="btn" @click="login"
        >立即登录</el-button
      >
    </el-row>
  </div>
</template>

<script>
import { nanoid } from "nanoid";

export default {
  name: "LoginCode",
  data() {
    return {
      code: "",
      sec: 5,
    };
  },
  methods: {
    again() {
      this.sec = 5;
      let time = window.setInterval(() => {
        if (this.sec < 6) {
          this.sec--;
        }
        if (this.sec == 0) {
          window.clearInterval(time);
          this.sec = "";
        }
      }, 1000);
    },
    login() {
      this.userList = this.$store.state.userAbout.userList;
      if (this.code !== "") {
        this.userList.forEach((user) => {
          if (user.phone === this.$route.query.phone) {
            if (this.code == "12345") {
              this.$store.commit("userAbout/updateLoginStatus", user);
              this.$router.replace({
                name: "user",
              });
              this.code = "";
            } else {
              alert("验证码不正确");
            }
          } else {
            if (this.code == "12345") {
              const userObj = {
                id: nanoid(),
                phone: this.$route.query.phone,
                password: this.code,
                nickName: "用户" + nanoid(),
              };
              this.$store.commit("userAbout/addUser", userObj);
              this.$store.commit("userAbout/updateLoginStatus", userObj);
              this.$router.replace({
                name: "user",
              });
              this.code = "";
            } else {
              alert("验证码不正确");
            }
          }
        });
      } else {
        alert("请输入密码");
      }
    },
  },
  mounted() {
    let time = window.setInterval(() => {
      if (this.sec < 6) {
        this.sec--;
      }
      if (this.sec == 0) {
        window.clearInterval(time);
        this.sec = "";
      }
    }, 1000);
  },
};
</script>

<style>
.btn {
  width: 100%;
  margin-top: 20px;
}
</style>
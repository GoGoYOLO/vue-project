<template>
  <div class="container">
    <div>
      <h2 v-pre>请输入12345</h2>
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
import mixin from "../mixin";

export default {
  name: "LoginCode",
  data() {
    return {
      user: {},
      code: "",
      sec: 5,
    };
  },
  mixins: [mixin],
  methods: {
    again() {
      this.sec = 6;
      let time = window.setInterval(() => {
        if (this.sec <= 6) {
          this.sec--;
        }
        if (this.sec == 0) {
          window.clearInterval(time);
          this.sec = "";
        }
      }, 1000);
    },

    login() {
      if (this.code !== "") {
        this.user = this.$store.state.userAbout.userList.filter((user) => {
          return user.phone === this.$route.query.phone;
        });

        if (this.user.length == 1) {
          if (this.code == "12345") {
            this.$store.commit("userAbout/updateLoginStatus", this.user[0]);
            this.toUser();
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
              currentMusic: "默认",
              typeList: [],
              songList: [],
            };
            this.$store.commit("userAbout/addUser", userObj);
            this.toUser();
          } else {
            alert("验证码不正确");
          }
        }
      } else {
        alert("请输入验证码");
      }
    },
  },
  mounted() {
    this.again();
  },
  beforeDestroy() {
    this.code = "";
  },
};
</script>

<style scoped>
.btn {
  width: 100%;
  margin-top: 20px;
}
</style>
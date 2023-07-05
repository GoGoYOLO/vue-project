<template>
  <div class="container">
    <div>
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
    <div class="row" style="font-size: 8px">
      <div @click="toCode">手机号验证码登录</div>
      <div>忘记密码</div>
    </div>
  </div>
</template>

<script>
import { nanoid } from "nanoid";

export default {
  name: "LoginPassword",
  data() {
    return {
      password: "",
      user: {},
    };
  },
  methods: {
    toCode() {
      this.$router.push({
        name: "code",
        query: {
          phone: this.$route.query.phone,
        },
      });
    },
    login() {
      if (this.password != "") {
        this.userList = this.$store.state.userAbout.userList;

        this.user = this.userList.filter((user) => {
          return user.phone == this.$route.query.phone;
        });

        if (this.user.length == 1) {
          if (this.password == this.user[0].password) {
            this.$router.replace({
              name: "user",
            });
            this.password = "";
            this.$store.commit("userAbout/updateLoginStatus", this.user[0]);
          } else {
            alert("密码不正确");
          }
        } else {
          const userObj = {
            id: nanoid(),
            phone: this.$route.query.phone,
            password: this.password,
            nickName: "用户" + nanoid(),
            currentMusic: "默认",
            typeList: [],
            songList: [],
          };
          this.$store.commit("userAbout/addUser", userObj);
          this.$store.commit("userAbout/updateLoginStatus", userObj);
          this.$router.replace({
            name: "user",
          });
          this.password = "";
        }
      }else{
        alert('请输入密码')
      }
    },
  },
};
</script>

<style scoped>
.phoneInput {
  border-bottom: 1px solid orange;
}
.input {
  border: 0;
  outline: none;
}

.next {
  width: 100%;
  margin-top: 50px;
  margin-bottom: 10px;
}
</style>
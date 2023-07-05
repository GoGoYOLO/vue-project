<template>
  <div class="container">
    <div>
      <h2>手机号登录</h2>
      <h4 style="color: grey">未注册的手机号将自动生成新账号</h4>
    </div>
    <div class="phoneInput">
      +86
      <input
        class="input"
        type="text"
        v-model="phone"
        placeholder="请输入手机号码"
      />
    </div>

    <el-row>
      <el-button type="warning" round class="next" @click="toPassword"
        >下一步</el-button
      >
    </el-row>
    <h6 style="color: grey; text-align: center">酷我账号登录</h6>

    <div class="footer">
      <div class="row">
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
        <el-button type="success" icon="el-icon-check" circle></el-button>
        <el-button type="info" icon="el-icon-message" circle></el-button>
        <el-button icon="el-icon-apple" round>通过Apple登录</el-button>
      </div>
      <div class="row">
        <input type="checkbox" />
        <h6>
          登录即同意<a href="http://www.baidu.com">酷我用户协议</a>，<a
            href="http://www.baidu.com"
            >用户隐私协议</a
          >，<a href="http://www.baidu.com">儿童隐私协议</a>
        </h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPhone",
  data() {
    return {
      phone: "",
    };
  },
  mounted() {
    this.userList = this.$store.state.userAbout.userList;
  },
  methods: {
    toPassword() {
      const reg_tel =
        /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
      if (reg_tel.test(this.phone)) {
        alert("请输入正确的手机号码");
      } else {
        this.$router.push({
          name: "password",
          query: { phone: this.phone },
        });
        this.phone = "";
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
}
.footer {
  position: absolute;
  /* left: 50%; */
  bottom: 0;
}
</style>
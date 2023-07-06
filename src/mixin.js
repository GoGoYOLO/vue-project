const mixin = {
  methods: {
    toUser() {
      this.$router.replace({
        name: "user",
      });
    },
  },
}

export default mixin
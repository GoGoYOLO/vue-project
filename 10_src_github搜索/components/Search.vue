<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyWord"
      />&nbsp;
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      keyWord: "",
    };
  },
  methods: {
    searchUsers() {
      this.$bus.$emit("updateListData", {
        isLoading: true,
        errMsg: "",
        users: [],
        isFirst: false,
      });
      axios.get("https://api.github.com/search/users?q=${this.keyWord}").then(
        (Response) => {
          // console.log(Response.data.items);
          this.$bus.$emit("updateListData", {
            isLoading: false,
            errMsg: "",
            users: Response.data.items,
          });
        },
        (Error) => {
          this.$bus.$emit("updateListData", {
            isLoading: false,
            errMsg: error.message,
            users: [],
          });
        }
      );
    },
  },
};
</script>

<style>
</style>
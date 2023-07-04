<template>
  <div class="category">
    <h3>当前求和：{{ he }}</h3>
    <h3>当前求和：{{ daHe }}</h3>
    <h3>{{ xuexiao }},{{ xueke }}</h3>
    <select v-model="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="jia(n)">+</button>
    <button @click="jian(n)">-</button>
    <button @click="jiaOdd(n)">当前和为奇数时再加</button>
    <button @click="jiaWait(n)">等一等再加</button>
    <h3>下方组件的总人数：{{ list.length }}</h3>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "Count",
  data() {
    return {
      n: 1,
    };
  },
  computed: {
    ...mapState("countAbout", {
      he: "sum",
      xuexiao: "school",
      xueke: "subject",
    }),
    ...mapGetters("countAbout", { daHe: "bigSum" }),
    ...mapState("personAbout", { list: "personList" }),
    //对象写法
    // ...mapState({ he: "sum", xuexiao: "school", xueke: "subject" ,list:'personList'}),
    //数组写法 属性名与属性值一致
    // ...mapState(['sum','school','subject'])

    //对象写法
    // ...mapGetters({ daHe: "bigSum" }),
    //数组写法
    // ...mapGetters(['bigSum'])
  },
  methods: {
    //对象写法
    ...mapMutations("countAbout",{ jia: "increment", jian: "decrement" }),
    //数组写法
    // ...mapMutations(["increment", "decrement"]),

    //对象写法
    ...mapActions("countAbout",{ jiaOdd: "incrementOdd", jiaWait: "incrementWait" }),
    //数组写法
    // ...mapActions(["incrementOdd", "jiaWait"]),

    // increment() {
    //   // this.sum += this.n;
    //   this.$store.commit("increment", this.n);
    // },
    // decrement() {
    //   // this.sum -= this.n;
    //   this.$store.commit("decrement", this.n);
    // },
    // incrementOdd() {
    //   // this.sum += this.n;
    //   this.$store.dispatch("incrementOdd", this.n);
    // },
    // incrementWait() {
    //   this.$store.dispatch("incrementWait", this.n);
    // },
  },
};
</script>

<style>
</style>
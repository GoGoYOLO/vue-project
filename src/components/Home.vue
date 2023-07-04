<template >
  <div class="container">
    <h2>发现</h2>
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in dataList" :key="item.id">
        <h3 class="medium" style="text-align: center" @click="showText(item)">
          {{ item.text }}
        </h3>
      </el-carousel-item>
    </el-carousel>
    <div class="footer">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      text: "0",
      dataList: [
        {
          id: "001",
          text: "111",
        },
        {
          id: "002",
          text: "222",
        },
        {
          id: "003",
          text: "333",
        },
        {
          id: "004",
          text: "444",
        },
      ],
    };
  },
  methods: {
    showText(item) {
      console.log(item.text);
      this.text = item.text;
    },
  },
};
</script>

<style>
.container {
  width: 100%;
  /* display: flex; */
  /* flex-direction: column; */
}

.footer {
  height: 60px;
  line-height: 60px;
  width: 100%;
  background-color: white;
  border-top: 1px solid black;
  position: fixed;
  left: 0px;
  bottom: 0px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
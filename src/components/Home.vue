<template>
  <div class="b">
    <div class="content">
      <h2>发现</h2>
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item
          v-for="item in $store.state.musicAbout.musicList"
          :key="item.id"
        >
          <h3 class="medium" style="text-align: center" @click="showText(item)">
            {{ item.name }}
          </h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="dibu"></div>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    showText(item) {
      this.$store.state.userAbout.currentUser.currentMusic = item.name;
    },
  },
};
</script>

<style scoped>
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
<template>
    <div>
      <h1>我的</h1>
      <div class="nick">{{ user.nickName }}</div>

      <div class="row">
        <div class="box1" v-for="item in user.typeList" :key="item.id">
          <el-button icon="item.icon" circle></el-button>
          {{ item.name }} {{ item.num }}
        </div>
      </div>

      <h5>自建歌单{{ user.songList.length }}</h5>
      <div class="self">
        <div class="item">
          <div class="box2"></div>
          <div class="info">创建/导入歌单</div>
        </div>
        <div v-for="item in user.songList" :key="item.id" class="item">
          <div class="box2"></div>
          <div class="info column">
            <span>{{ item.name }}</span>
            <span>{{ item.num }}首</span>
          </div>
        </div>
      </div>
    </div>
   

</template>

<script>
export default {
  name: "User",
  computed: {
    user() {
      return this.$store.state.userAbout.currentUser;
    },
  }
};
</script>

<style scoped>
.nick {
  line-height: 50px;
  background-color: pink;
  padding-left: 10px;
  margin-bottom: 20px;
}

.box1 {
  line-height: 200px;
  flex: 1;
  justify-content: space-around;
  margin-right: 10px;
  text-align: center;
  background-color: greenyellow;
}

.box2 {
  height: 100px;
  width: 100px;
  background-color: pink;
  text-align: center;
  margin-bottom: 10px;
  margin-right: 10px;
}

.self {
  display: flex;
  flex-direction: column;
  padding-left: 10px;
}

.item {
  display: flex;
}
.info {
  line-height: 50px;
  font-size: 10px;
}
</style>
<template>
  <div class="b">
    <div class="content">
      <h1>我的</h1>
      <div class="nick">{{ $store.state.userAbout.currentUser.nickName }}</div>

      <div class="row">
        <div
          class="box1"
          v-for="item in $store.state.musicAbout.typeList"
          :key="item.id"
        >
          <el-button icon="item.icon" circle></el-button>
          {{ item.name }} {{ item.num }}
        </div>
      </div>
      <div class="self">
        <h5>自建歌单{{ $store.state.musicAbout.songList.length }}</h5>
        <div class="row" @click="addSongBefore">
          <div class="box2"></div>
          <div class="info">创建/导入歌单</div>
          <!-- <div v-show="isEdit">
            <input type="text" v-model="song" />
            <el-button type="info" @click="addSong">添加</el-button>
          </div> -->
        </div>
        <div
          v-for="item in $store.state.musicAbout.songList"
          :key="item.id"
          class="row"
        >
          <div class="box2"></div>
          <div class="info column">
            <span>{{ item.name }}</span>
            <span>{{ item.num }}首</span>
          </div>
        </div>
      </div>
    </div>
    <div class="dibu"></div>
  </div>
</template>

<script>
import { nanoid } from "nanoid";

export default {
  name: "User",
  data() {
    return {
      song: "",
      isEdit: false,
    };
  },
  methods: {
    addSongBefore() {
      this.isEdit = true;
    },
    addSong() {
      if (this.song != "") {
        const songObj = {
          id: nanoid(),
          name: this.song,
          num: 0,
        };
        this.$store.commit("musicAbout/addSong", songObj);
        this.isEdit = false;
        this.song = "";
        console.log(this.isEdit);
      } else {
        alert("请输入歌单名称");
      }
    },
  },
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
  width: 400px;
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
  float: left;
}
.info {
  line-height: 50px;
  font-size: 10px;
}
</style>
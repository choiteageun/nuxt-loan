<template>
  <div>
    <p>
      <el-input v-model="message" @keyup.native.enter="handleMessage" style="width:200px"></el-input>
      <ul>
        <li v-for="msg in list" :key="msg">{{msg}}</li>
      </ul>
    </p>
    <p>
      {{message}}
      <br /> {{reversedMessageComputed}}
      <br />
      <el-button type="primary" @click="reverseMessage">메시지 바꾸기</el-button>
    </p>
    <div class="center" style="margin-bottom:300px;">
      <el-input v-model="item" style="width: 100px;" @keydown.native.enter="handleAddItem"></el-input>
      <div>{{$store.state.list}}</div>
      <ul>
        <li style="list-style:none;" v-for="item in $store.state.list" :key="item">
          {{item}}
          <el-button @click="handleDeleteItem(item)">삭제</el-button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import socket from "@/plugins/socket.io.js"

export default {
  data() {
    return {
      message: "안녕하세요",
      list: [],
      item:''

    };
  },
  async fetch({ store, app }) {
    const list = await app.$axios.$get("/api/list");
    store.commit("setList", list);
    console.log(list);
  },

  methods: {
    handleMessage(){
      if(this.message == ''){
        return false
      }

      console.log(this.message)
      socket.emit("chat", this.message)
      this.message=''
    },

    reverseMessage() {
      this.message = this.message
        .split("")
        .reverse()
        .join("");
    },
    handleIncrement() {
      //중앙에 있는 함수 실행 (정석)
      // this.$store.commit("increment")
      // this.$store.state.count++ <- 절대 쓰면 안되는 방법
    },
    handleAddItem() {
      if (this.item === "") {
        return false;
      }
      this.$store.commit("addItem", this.item);

      this.item = "";
    },
    handleDeleteItem(data) {
      this.$store.commit("deleteItem", data);
    }
  },
  //해당 변수가 바뀌었을때 무조건 실행되는 함수
  watch: {
    message() {}
  },

  //해당 변수가 바뀌었을때 실행되는 함수
  computed: {
    reversedMessageComputed() {
      return this.message
        .split("")
        .reverse()
        .join("");
    }
  },
  mounted(){
    socket.on("chat", (msg)=>{
      this.list.unshift(msg)
    })
  },
};
</script>
<style lang="scss" scoped>
p {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: 200;
}
</style>

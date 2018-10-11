<template>
  <div class="chat-container">
    <el-button @click="visible = !visible" class="chat-icon" circle type="primary" icon="el-icon-edit"></el-button>
    <div class="chat-box" v-show="visible">
      <header class="header">
        <p>채팅방</p>
      </header>
      <div ref="content" class="content">
        <div v-for="chat in list" :key="chat.message" class="chat-item">
          <div class="chat-name">
            <p>{{chat.name}}</p>
          </div>
          <div class="chat-message">
            <p>{{chat.message}}</p>
          </div>
        </div>
      </div>
      <footer class="footer">
        <el-input v-model.trim="message" @keyup.native.enter="handleChat" size="mini" placeholder="채팅을 입력해주세요"></el-input>
      </footer>
    </div>
  </div>

</template>
<script>
import socket from "@/plugins/socket.io.js";

export default {
  data() {
    return {
      visible: false,
      message: "",
      list: []
    };
  },
  methods: {
    handleChat() {
      if (this.message === "") {
        return false;
      }

      socket.emit("chat", {
        name: this.$store.state.info.name,
        message : this.message
      });

      this.message = "";

    }
  },
  mounted() {
    const chatList = this.list;
    const chatComponent = this

    socket.on("chat", function(chat) {

      chatList.push(chat);


      //스크롤을 내려준다.
      //nextTick(콜백함수) : 콜백함수를 한단계 다음 프레임에 실행 시켜준다.
      chatComponent.$nextTick(function() {
        const contentTag = chatComponent.$refs.content;
        contentTag.scrollTop =
          contentTag.scrollHeight - contentTag.clientHeight;
      });
    });
  },
  beforeDestroy(){
    // socket.off("chat")
  }
};
</script>
<style lang="scss" scoped>
.chat-container {
  z-index: 1000;
  position: fixed;
  right: 0;
  bottom: 0;

  .chat-icon {
    position: absolute;
    right: 20px;
    bottom: 20px;
    box-shadow: 0px 2px 10px 5px rgba(0, 0, 0, 0.2);
  }
  .chat-box {
    position: absolute;
    display: flex;
    flex-direction: column;
    right: 20px;
    bottom: 80px;

    width: 250px;
    height: 300px;
    background-color: white;

    border-radius: 3px;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
    .header {
      height: 30px;
      background-color: #715d60;
      font-weight: bold;
      color: white;
      line-height: 30px;
      padding-right: 10px;
      padding-left: 10px;
      font-size: 0.7rem;
    }
    .content {
      flex: 1;
      padding: 10px;
      overflow-y: auto;
    }
    .footer {
      height: 28px;
    }
  }

  .chat-item {
    display: flex;
    margin-top: 10px;

    &:first-child {
      margin-top: 0px;
    }
    .chat-name {
      width: 45px;
      font-size: 0.7rem;
      font-weight: bold;
      padding-top: 9px;
      padding-right: 8px;
      text-align: right;
    }
    .chat-message {
      flex: 1;
      font-size: 0.8rem;
      color: #333;
      line-height: 1.2;
      letter-spacing: -0.05em;
      background-color: #efefef;
      border-radius: 8px;
      padding: 8px;
      word-break: break-all;
    }
  }
}
</style>
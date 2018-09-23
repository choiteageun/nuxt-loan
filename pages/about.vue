<template>
  <div>
    <p>
      {{message}}
      <br />
      {{reversedMessageComputed}}
      <br />
      <el-button type="primary" @click="reverseMessage">메시지 바꾸기</el-button>
    </p>
  </div>
</template>
<script>
export default{
  data(){
    return{
      message: "안녕하세요",
      
    }
  },
  methods:{
    reverseMessage(){
      this.message = this.message.split("").reverse().join("")
    }
  },
  //해당 변수가 바뀌었을때 무조건 실행되는 함수
  watch:{
    message(){
      console.log("메시지")
    },
  },
  
  computed:{
    reversedMessageComputed(){
      return this.message.split("").reverse().join("")
    }
  }
}
</script>
<style lang="scss" scoped>
p{
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight:200;
}
</style>

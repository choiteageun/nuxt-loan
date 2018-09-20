<template>
  <div>
    <div class="main">
      <header class="header flex">
        <h1 class="logo">YOUNG CAPITAL</h1>
        <div>
          <el-button type="primary">대출 상품</el-button>
          <el-button type="primary">대출 안내</el-button>
          <el-button type="primary">대출 신청</el-button>
          <el-button type="primary">대출 한도조회</el-button>
          <el-button type="primary">고객 만족 센터</el-button>
          <el-button type="primary">회사 소개</el-button>
        </div>
      </header>
      <section class="mainContents container flex">
        <div class="consulContent">
          <h1 class="center">전문가에게 상담신청</h1>
          <el-form label-width="80px" @submit.native.prevent="createUser" class="consulForm">
            <el-form-item label="이름" prop="name">
              <el-input v-model="createUserData.name"></el-input>
            </el-form-item>
            <el-form-item label="연락처" prop="name">
              <el-input v-model="createUserData.tel"></el-input>
            </el-form-item>
            <el-form-item label="대출금액" prop="name">
              <el-input v-model="createUserData.loanAmount"></el-input>
            </el-form-item>
            <el-form-item label="문의내용">
              <el-input v-model="createUserData.note" type="textarea"></el-input>
            </el-form-item>
            <el-form-item  label="동의">
              <el-checkbox label="개인정보 취급방침"></el-checkbox>
            </el-form-item>
            <el-form-item>
              <el-button type="success" native-type="submit">상담신청</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="slideContent">
          <template>
            <el-carousel :interval="5000" arrow="always">
              <el-carousel-item v-for="item in 4" :key="item">
                <h1>하이{{item}}</h1>
              </el-carousel-item>
            </el-carousel>
          </template>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      createUserData: {
        name:"",
        tel:"",
        loanAmount:"",
        route:"웹DB",
        note:""
      }
    };
  },
  methods: {
    async createUser(){
      const res= await axios.post('/api/consultation', {
        data: this.createUserData
      })

    }
  }
};
</script>
<style scoped lang="scss">
.header {
  padding: 20px;
  .logo {
    color: white;
    margin: 0;
  }
  .el-button {
    width: 120px;
    height: 50px;
  }
}
.header h1 {
  color: white;
}
.consulForm {
  & /deep/ .el-form-item__label {
    color: white;
  }
  & /deep/ .el-textarea__inner {
    resize: none;
  }
}
.flex {
  align-items: center;
  display: flex;
  justify-content: space-between;
}
.main {
  background-image: url("/img/main/main_background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  min-height: 100vh;
  z-index: 1;
}
.mainContents {
  width: 100%;
  height: 450px;
  margin-top: 50px;
}
.consulContent {
  background-color: rgba(255, 255, 255, 0.2);
  height: 100%;
  margin-right: 10px;
  flex: 4;
  padding: 30px;
}

//슬라이드 부분 시작
.slideContent {
  background-color: rgba(255, 255, 255, 0.4);
  margin-left: 10px;
  height: 100%;
  flex: 8;
  padding: 30px;
}

.el-carousel__item:nth-child(2n) {
  background-color: rgba(255, 255, 255, 0.4);
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: rgba(255, 255, 255, 0.4);
}
</style>

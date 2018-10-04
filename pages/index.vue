<template>
  <div>
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
    <div class="main">
      <section class="mainContents container flex">
        <div class="consulContent paper">
          <h1 class="center">전문가에게 상담신청</h1>
          <el-form ref="consulForm" :model="createUserData" :rules="rules" label-width="80px" @submit.native.prevent="createUser" class="consulForm">
            <el-form-item label="이름" prop="name">
              <el-input v-model="createUserData.name"></el-input>
            </el-form-item>
            <el-form-item label="연락처" prop="tel">
              <el-input v-model="createUserData.tel"></el-input>
            </el-form-item>
            <el-form-item label="대출금액" prop="loanAmount">
              <el-input v-model="createUserData.loanAmount"></el-input>
            </el-form-item>
            <el-form-item label="문의내용" prop="note">
              <el-input v-model="createUserData.note" type="textarea"></el-input>
            </el-form-item>
            <el-form-item label="동의" prop="agree">
              <el-checkbox v-model="createUserData.agree" true-label="true" :false-label="0" type="success" label="개인정보 취급방침"></el-checkbox>
            </el-form-item>
            <el-button style="width:100%; margin-top:10px;" type="success" native-type="submit">상담신청</el-button>
          </el-form>
        </div>
        <div class="slideContent paper">
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
    <footer class="footer">
      <p v-if="!$store.state.logged" @click="adminDialog= true">
        관리자 로그인
      </p>

      <p v-if="$store.state.logged">
        <span @click="handleLogout">로그아웃</span>
        <nuxt-link to="/admin">
          <span style="color: white;">관리자 페이지</span>
        </nuxt-link>

      </p>
    </footer>

    <el-form @submit.native.prevent="handleAdminSubmit">
      <el-dialog title="관리자 로그인" :visible.sync="adminDialog" width="400px">
        비밀번호를 입력해주세요,
        <el-input type="password" v-model="adminPassword"></el-input>
        <transition>
          <p class="danger" v-show="wrongPassword">비밀번호가 틀렸습니다.</p>
        </transition>

        <div slot="footer">
          <el-button @click="adminDialog=false">취소</el-button>
          <el-button type="primary" native-type="submit">로그인</el-button>
        </div>
      </el-dialog>
    </el-form>

  </div>
</template>
<script>
import axios from "axios";
import socket from "@/plugins/socket.io.js"

export default {
  data() {
    return {
      adminDialog: false,
      adminPassword: "",
      wrongPassword: false,
      createUserData: {
        name: "",
        tel: "",
        loanAmount: "",
        route: "웹DB",
        note: "",
        agree: false
      },
      rules: {
        name: [
          { required: true, message: "이름을 입력해주세요.", trigger: "blur" }
        ],
        tel: [
          { required: true, message: "연락처을 입력해주세요.", trigger: "blur" }
        ],
        loanAmount: [
          {
            required: true,
            message: "대출금액을 입력해주세요.",
            trigger: "blur"
          }
        ],
        note: [
          {
            required: true,
            message: "문의내용을 입력해주세요.",
            trigger: "blur"
          }
        ],
        agree: [
          {
            type: "string",
            message: "개인정보를 동의해주세요.",
            trigger: "change"
          }
        ]
      }
    };
  },
  methods: {
    async createUser() {
      console.log(this.$refs);
      console.log(this.$refs.consulForm);
      this.$refs.consulForm.validate(async valid => {
        if (valid) {
          //검증성공
          const res = await axios.post("/api/consultation", {
            data: this.createUserData
          });
        } else {
          //검증실패
          return false;
        }
      });
    },
    async handleAdminSubmit() {
      try {
        await axios.post("/api/auth/login", {
          password: this.adminPassword
        });

        //로그인 성공
        this.$store.commit("login")
        this.wrongPassword = false;
        this.adminDialog = false;
      } catch (e) {
        //로그인 실패
        this.wrongPassword = true;
      }
    },
    async handleLogout() {
      await axios.get("/api/auth/logout");
      this.$store.commit("logout")
    }
  },
  async fetch({ store, app }){
    try{
      await app.$axios.get("/api/auth/check")
      store.commit("login")
    }catch(e){
      
    }
  }
};
</script>
<style scoped lang="scss">
.header {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
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
  padding-top: 150px;
  padding-bottom: 50px;
}
.mainContents {
  width: 100%;
  height: 483px;

  .el-checkbox /deep/ .el-checkbox__input.is-checked .el-checkbox__inner {
    background-color: #67c23a;
    border-color: #67c23a;
  }
  .el-checkbox /deep/ .el-checkbox__input.is-checked + .el-checkbox__label {
    color: #67c23a;
  }
}
.consulContent {
  height: 100%;
  margin-right: 10px;
  flex: 4;
  padding: 30px;
  h1 {
    color: white;
    margin-bottom: 20px;
  }
}

.paper {
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 30px 15px rgba(0, 0, 0, 0.3) inset;
}

//슬라이드 부분 시작
.slideContent {
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

.footer {
  background-color: #715d60;
  p {
    font-size: 14px;
    color: #ccc;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
    span {
      margin-left: 10px;
      margin-right: 10px;
    }
  }
}
.v-enter {
  opacity: 0;
}
.v-enter-active {
  transition: opacity 0.3s;
}
.danger {
  color: #f56c6c;
  font-size: 12px;
  margin-top: 3px;
}
</style>

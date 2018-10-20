<template>
  <div>
    <section class="display">
      <header>
        <div class="logo">
          <p>YOUNG CAPITAL</p>
        </div>
        <ul class="menu-list">
          <li>대출 상품</li>
          <li>대출 안내</li>
          <li>대출 신청</li>
          <li>대출 한도조회</li>
          <li>고객 만족 센터</li>
          <li>회사 소개</li>
        </ul>
        <span class="sidebar-icon">
          <el-button @click="sidebarVisible = true" icon="el-icon-menu" circle type="primary"></el-button>
        </span>
        <transition name="fade">
          <div class="sidebar-wrapper" v-show="sidebarVisible">
            <div class="overlay" @click="sidebarVisible=false"></div>
            <transition name="slide">
              <aside class="sidebar" v-show="sidebarVisible">
                <el-menu>
                  <el-menu-item index="1">
                    <i class="el-icon-menu"></i>
                    <span>가나다</span>
                  </el-menu-item>
                  <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span>다나가</span>
                  </el-menu-item>
                  <el-menu-item index="3">
                    <i class="el-icon-menu"></i>
                    <span>다가나</span>
                  </el-menu-item>
                </el-menu>
              </aside>
            </transition>
          </div>
        </transition>
      </header>

      <div class="content">
        <el-row :gutter="20">
          <el-col :md="{span: 9, offset: 0}" :sm="{ span: 16, offset:4 }">
            <div class="box">
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
          </el-col>
          <el-col :md="15">
            <div class="box">
              <el-carousel height="415px" :interval="5000" arrow="always">
                <el-carousel-item v-for="item in 4" :key="item">
                  <h1>하이{{item}}</h1>
                </el-carousel-item>
              </el-carousel>
            </div>
          </el-col>
        </el-row>
      </div>
    </section>
    <section class="test">
      <div class="skew"></div>
      <div class="container">
        콘텐츠 내용입니다.
      </div>
    </section>
    <footer class="footer">
      <p v-if="!$store.state.logged" @click="adminDialog= true">
        로그인
      </p>

      <p v-if="$store.state.logged">
        <span @click="handleLogout">로그아웃</span>
        <nuxt-link to="/admin">
          <span style="color: white;">관리자 페이지</span>
        </nuxt-link>

      </p>
    </footer>

    <el-form @submit.native.prevent="handleAdminSubmit" label-width="80px">
      <el-dialog title="로그인" :visible.sync="adminDialog" width="400px">
        <p style="margin-bottom:15px;">양식을 채워주세요</p>
        <el-form-item label="직원 이름">
          <el-select v-model="adminName" style="width: 100%">
            <el-option v-for="staff in adminNames" :key="staff.id" :label="staff.name" :value="staff.name"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="비밀번호">
          <el-input type="password" v-model="adminPassword"></el-input>
        </el-form-item>
        
        <transition>
          <p class="danger" v-show="wrongPassword">비밀번호가 틀렸습니다.</p>
        </transition>

        <div slot="footer">
          <el-button @click="adminDialog=false">취소</el-button>
          <el-button type="primary" native-type="submit">로그인</el-button>
        </div>
      </el-dialog>
    </el-form>
    <!-- <header class="header flex">
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
     -->

  </div>
</template>
<script>
import axios from "axios";
import socket from "@/plugins/socket.io.js";

export default {
  data() {
    return {
      sidebarVisible: false,
      adminDialog: false,
      adminName: "",
      adminNames: [],
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
        const info = await this.$axios.$post("/api/auth/login", {
          password: this.adminPassword,
          name: this.adminName
        });

        //로그인 성공
        this.$store.commit("login", info);
        this.wrongPassword = false;
        this.adminDialog = false;
      } catch (e) {
        //로그인 실패
        this.wrongPassword = true;
      }
    },
    async handleLogout() {
      await axios.get("/api/auth/logout");
      this.$store.commit("logout");
    },

    handelClickSidebar() {}
  },
  async fetch({ store, app }) {},
  async mounted() {
    const data = await this.$axios.$get("/api/user");
    this.adminNames = data;
  }
};
</script>
<style scoped lang="scss">
.display {
  background-image: url("/img/main/main_background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  min-height: 95vh;
  padding-bottom: 150px;
  header {
    z-index: 1000;
    background-color: rgba(255, 255, 255, 0.9);
    position: fixed;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding-left: 20px;
    box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.2);

    .logo > p {
      line-height: 60px;
    }
    .menu-list {
      margin: 0;
      padding: 0;
      display: flex;
      list-style: none;
      align-items: center;

      li {
        padding-left: 20px;
        padding-right: 20px;
        line-height: 60px;
      }
    }

    .sidebar-icon {
      font-size: 22px;
      line-height: 60px;
      padding-left: 20px;
      padding-right: 20px;
      display: none;
    }
    @media (max-width: 991px) {
      .menu-list {
        display: none;
      }
      .sidebar-icon {
        display: inline;
      }
    }
  }
  .content {
    width: 992px;
    margin-right: auto;
    margin-left: auto;
    padding-top: 120px;

    @media (max-width: 991px) {
      width: 600px;
      max-width: 80%;

      .el-row {
        display: flex;
        flex-direction: column-reverse;
        .el-col {
          margin-bottom: 20px;
        }
      }

      .el-carousel /deep/ .el-carousel__container {
        height: 250px !important;
      }
    }
    .el-col > .box {
      background-color: rgba(0, 0, 0, 0.5);
      box-shadow: 0px 0px 30px 15px rgba(0, 0, 0, 0.3) inset;
      padding: 20px;
      color: white;
    }
  }

  .consulForm {
    & /deep/ .el-form-item__label {
      color: white;
    }
    & /deep/ .el-textarea__inner {
      resize: none;
    }

    .el-checkbox /deep/ .el-checkbox__input.is-checked .el-checkbox__inner {
      background-color: #67c23a;
      border-color: #67c23a;
    }
    .el-checkbox /deep/ .el-checkbox__input.is-checked + .el-checkbox__label {
      color: #67c23a;
    }
  }
}

.test {
  position: relative;
  .skew {
    background-color: white;
    width: 100%;
    height: 200px;
    transform: skewY(-4deg);
    transform-origin: 50% 50%;
    position: absolute;
    top: -100px;
    left: 0;

    box-shadow: 0px -20px 25px -5px rgba(0, 0, 0, 0.6),
      0px -15px 15px -10px rgba(0, 0, 0, 0.8);
    @media (min-width: 2000px) {
      transform: skewY(-2deg);
    }
  }
  .container {
    position: relative;
    z-index: 5;
    padding-top: 60px;
    padding-bottom: 60px;
  }
}

.sidebar-wrapper {
  position: fixed;
  z-index: 1005;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  
  @media (min-width:992px){
    display: none;
  }
  .overlay {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .sidebar {
    position: absolute;
    top: 0;
    right: 0px;
    z-index: 2;
    height: 100%;
    width: 200px;
    background-color: white;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s;
}
.slide-enter,
.slide-leave-to {
  transform: translateX(200px);
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
// .v-enter {
//   opacity: 0;
// }
// .v-enter-active {
//   transition: opacity 0.3s;
// }
// .danger {
//   color: #f56c6c;
//   font-size: 12px;
//   margin-top: 3px;
// }
</style>

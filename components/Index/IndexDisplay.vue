<template>
  <div>
    <section class="display">
      <div class="content">
        <el-row :gutter="20">
          <el-col :md="{span: 9, offset: 0}" :sm="{ span: 16, offset:4 }">
            <div data-aos="fade-right" data-aos-delay="500" class="box consulBox">
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
            <div data-aos="zoom-in-up" class="box carouselBox">
              <el-carousel height="415px" :interval="5000" arrow="always">
                <el-carousel-item>
                  <h1>개인회생대출!</h1>
                  <h1>신용대출!</h1>
                  <h1>담보대출!!</h1>
                  <h3>고객 한분한분에게 1:1 맞춤 컨설팅</h3>
                  <h3>고객 만족 그 차원이 다릅니다.</h3>
                  <h3>당일 대출 가능 !!</h3>
                </el-carousel-item>
                <el-carousel-item>
                  <h1>믿음</h1>
                </el-carousel-item>
                <el-carousel-item>
                  <h1>약속</h1>
                </el-carousel-item>
              </el-carousel>
            </div>
          </el-col>
        </el-row>
      </div>
    </section>
  </div>
</template>
<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  data() {
    return {
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
    }
  },
  mounted(){
    AOS.init()
  },
};
</script>
<style lang="scss" scoped>
.display {
  background-image: url("/img/main/main_background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  min-height: 95vh;
  padding-bottom: 150px;

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
      color: white;
    }
    .el-col > .consulBox {
      background-color: rgba(0, 0, 0, 0.5);
      box-shadow: 0px 0px 30px 15px rgba(0, 0, 0, 0.3) inset;

      padding: 20px;
    }
    .el-col > .carouselBox {
      background-color: rgba(0, 0, 0, 0.5);
      padding: 20px;
      h1 {
        text-align: center;
        font-size: 3rem;
        font-weight: 400;
      }
      h3 {
        font-weight: 200;
        opacity: 0.8;
      }
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
</style>

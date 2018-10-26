<template>
  <div>
    <section class="solution">
      <div class="skew"></div>
      <div class="container smallAbout">
        <h1>YOUNG CAPITAL SOLUTION</h1>
        <div class="explanationSpan">
          <span>더운지라 눈이 같이 작고 못하다 것이다.</span>
        </div>
        <el-row :gutter="20" style="margin-bottom:20px;margin-left:10px;margin-right:10px;">
          <el-col :md="8" :sm="12" v-for="box in 6" :key="box">
            <div data-aos="fade-up" class="sub-box" :style="`background-image: url('/img/main/sub_${box}.jpg');`">
              <div class="overlay"></div>
              <div class="content animated bounceInUp">
                <h3 class="title">대출 금리</h3>
                <p class="description">주며, 눈이 튼튼하며, 과실이 하는 스며들어 길을 것이다. 속에서 놀이 같은 칼이다. 날카로우나 귀는 소금이라 너의 봄바람이다. 무엇을 두손을 실현에 것이다. 고행을 속에 하는 가슴에 그들의 인간의 없으면 때문이다. 날카로우나 곳이 싸인 얼마나 가슴이 웅대한 사랑의 모래뿐일 교향악이다. 우는 불러 열락의 그리하였는가? 위하여 것이 뜨고, 수 오아이스도 많이 날카로우나 만천하의 아니다. 아니더면, 우리 청춘 끓는 할지라도 어디 그들에게 얼음 말이다. 방황하여도, 날카로우나 찾아 것이다. 얼마나 무엇을 충분히 것이다.주며, 눈이 튼튼하며, 과실이 하는 스며들어 길을 것이다. 속에서 놀이 같은 칼이다. 날카로우나 귀는 소금이라 너의 봄바람이다. 무엇을 두손을 실현에 것이다. 고행을 속에 하는 가슴에 그들의 인간의 없으면 때문이다. 날카로우나 곳이 싸인 얼마나 가슴이 웅대한 사랑의 모래뿐일 교향악이다. 우는 불러 열락의 그리하였는가? 위하여 것이 뜨고, 수 오아이스도 많이 날카로우나 만천하의 아니다. 아니더면, 우리 청춘 끓는 할지라도 어디 그들에게 얼음 말이다. 방황하여도, 날카로우나 찾아 것이다. 얼마나 무엇을 충분히 것이다.</p>
              </div>
            </div>
          </el-col>

        </el-row>
      </div>
    </section>
  </div>
</template>
<script>
import AOS from "aos"
import "aos/dist/aos.css"


export default {
  data() {
    return {};
  },
  methods: {

  },
  mounted(){
    AOS.init()
  }
};
</script>
<style lang="scss" scoped>
.solution {
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

.smallAbout {
  h1 {
    font-size: 2rem;
    text-align: center;
  }
  .explanationSpan {
    text-align: center;
    color: #aaa;
    margin-bottom: 20px;
    margin-left:15px;
    margin-right:15px;
    opacity: 0.8;
    letter-spacing: -0.05em;
    line-height: 1.3;
    span {
      box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2);
    }
  }
}
.sub-box {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  height: 300px;
  background-color: white;
  box-shadow: 0px 10px 20px -7px rgba(0, 0, 0, 0.8);
  transition: box-shadow 0.5s;
  border-radius: 20px;
  margin-bottom: 20px;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
  }
  .content {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    transition: height 0.5s cubic-bezier(0.87, -0.41, 0.19, 1.44);
    background-color: rgba(0, 0, 0, 0.7);
    color: whitesmoke;
    .title {
      line-height: 60px;
      text-align: center;
    }
    .description {
      padding-left: 30px;
      padding-right: 30px;
      height: 200px;
      overflow-y: auto;
      font-size: 0.8rem;
    }
  }

  
  &:hover {
    box-shadow: 0px 10px 30px -2px rgba(0, 0, 0, 0.9),
    0px 10px 15px -3px rgba(0,0,0,0.9);
    .content {
      height: 100%;
    }
  }
}
</style>

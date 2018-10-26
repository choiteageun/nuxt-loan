<template>
  <header>
    <div class="logo">
      <p>YOUNG CAPITAL</p>
    </div>
    <ul class="menu-list">
      <li>대출 상품</li>
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
</template>
<script>
export default {
  data() {
    return {
      sidebarVisible: false
    };
  }
};
</script>
<style lang="scss" scoped>
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

.sidebar-wrapper {
  position: fixed;
  z-index: 1005;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

  @media (min-width: 992px) {
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
</style>

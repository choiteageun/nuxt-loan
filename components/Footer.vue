<template>
  <div>
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      adminDialog: false,
      adminName: "",
      adminNames: [],
      adminPassword: "",
      wrongPassword: false
    };
  },
  methods: {
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
    }
  },
  async mounted() {
    const data = await this.$axios.$get("/api/user");
    this.adminNames = data;
  }
};
</script>
<style lang="scss" scoped>
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
</style>

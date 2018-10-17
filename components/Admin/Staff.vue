<template>
  <div class="container">
    <el-table :data="$store.state.staffList" size="mini" style="margin-bottom: 15px;">
      <el-table-column type="selection"></el-table-column>
      <el-table-column prop="name" label="직원명"></el-table-column>
      <el-table-column prop="tel" label="연락처"></el-table-column>
      <el-table-column prop="age" label="나이"></el-table-column>
      <el-table-column width="90" label="관리">
        <template slot-scope="scope">
          <el-button size="mini" @click="open(scope.row)">상세정보</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-form :data="staffInfo" label-width="90px" @submit.native.prevent="staffForm">
      <el-dialog title="직원 관리" :visible.sync="dialog.updateStaff" width="400px" class="create-staff-dialog">
        <el-form-item label="이름">
          <el-input v-model="staffFormData.name"></el-input>
        </el-form-item>
        <el-form-item label="비밀번호등록">
          <el-input type="password" v-model="staffFormData.password"></el-input>
        </el-form-item>
        <el-form-item label="연락처">
          <el-input v-model="staffFormData.tel"></el-input>
        </el-form-item>
        <el-form-item label="나이">
          <el-input v-model="staffFormData.age"></el-input>
        </el-form-item>
        <div slot="footer">
          <el-button @click="dialog.updateStaff = false">취소</el-button>
          <el-button type="primary" native-type="submit">생성</el-button>
        </div>
      </el-dialog>
    </el-form>
    <div class="pagination center">
      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
    </div>
    <div class="bottom-btn-group" style="text-align:right;margin-top:20px;">
      <el-button @click="dialog.createStaff = true">직원등록</el-button>
    </div>
    <el-form label-width="90px" @submit.native.prevent="createStaff">
      <el-dialog title="직원 등록" :visible.sync="dialog.createStaff" width="400px" class="create-staff-dialog">
        <el-form-item label="이름">
          <el-input v-model="createStaffData.name"></el-input>
        </el-form-item>
        <el-form-item label="비밀번호등록">
          <el-input type="password" v-model="createStaffData.password"></el-input>
        </el-form-item>
        <el-form-item label="연락처">
          <el-input v-model="createStaffData.tel"></el-input>
        </el-form-item>
        <el-form-item label="나이">
          <el-input v-model="createStaffData.age"></el-input>
        </el-form-item>
        <div slot="footer">
          <el-button @click="dialog.createStaff = false">취소</el-button>
          <el-button type="primary" native-type="submit">생성</el-button>
        </div>
      </el-dialog>
    </el-form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      dialog: {
        createStaff: false,
        updateStaff: false
      },
      staffData: [],
      createStaffData: {
        name: "",
        tel: "",
        age: "",
        password: ""
      },
      staffFormData: {
        name: "",
        tel: "",
        age: "",
        password: ""
      }
    };
  },
  methods: {
    open(staff) {
      this.staffFormData = staff;

      this.dialog.updateStaff = true;
    },
    async createStaff() {
      await this.$axios.$post("/api/user/createStaff", {
        data: this.createStaffData
      });

      //스토어에 넣기
      this.$store.commit("addStaff", this.createStaffData);

      this.dialog.createStaff = false;
    },
    async staffForm() {
      const res = await axios.post(
        `/api/user/${this.staffFormData.id}`,
        {
          data: this.staffFormData
        }
      );

      this.updateStaff = false;
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
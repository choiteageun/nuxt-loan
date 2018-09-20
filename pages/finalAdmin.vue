<template>
  <section>
    <div class="center">
      <h1 class="title">Final Admin Page</h1>
    </div>
    <div class="container flex topBtns">
      <el-button type="warning">직원관리</el-button>
      <el-button type="warning">고객관리</el-button>
      <el-button type="warning">게시판</el-button>
      <el-button type="warning">승인목록</el-button>
    </div>
    <div class="container">
      <el-table :data="customer" size="mini">
        <el-table-column type="selection"></el-table-column>
        <el-table-column prop="name" label="고객명"></el-table-column>
        <el-table-column prop="tel" label="연락처"></el-table-column>
        <el-table-column prop="loanAmount" label="신청금액"></el-table-column>
        <el-table-column prop="route" label="경로"></el-table-column>
        <el-table-column label="담당자">
          <template slot-scope="scope">
            <el-select v-model="scope.row.manager" value-key="scope.row.id">
              <el-option label="최태근부장" value="최태근부장"></el-option>
              <el-option label="나일등대리" value="나일등대리"></el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column width="160">
          <template slot-scope="scope">
            <el-button size="mini" @click="consulFormDialog = true">상세정보</el-button>
            <el-button type="primary" size="mini">지정</el-button>
          </template>
        </el-table-column>

        <el-form label-width="90px" @submit.native.prevent="consulForm">
          <el-dialog title="고객 정보" :visible.sync="consulFormDialog" width="400px">
            <h1>하이</h1>
            <el-form-item label="이름">
              <el-input v-model="consulFormData.name"></el-input>
            </el-form-item>
          </el-dialog>
        </el-form>

      </el-table>
      <div class="pagination center">
        <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
      </div>
      <div class="bottom-btn-group" style="text-align:right;margin-top:20px;">
        <el-button @click="createUserDialog = true">고객등록</el-button>
        <el-button @click="createStaffDialog = true">직원등록</el-button>
        <el-select v-model="selected" value-key="selected">
          <el-option label="최태근부장" value="1"></el-option>
          <el-option label="나일등대리" value="2"></el-option>
        </el-select>
        <el-button type="primary">이동</el-button>
      </div>
    </div>
    <el-form label-width="90px" @submit.native.prevent="createStaff">
      <el-dialog title="직원 등록" :visible.sync="createStaffDialog" width="400px" class="create-staff-dialog">
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
          <el-button @click="createStaffDialog = false">취소</el-button>
          <el-button type="primary" native-type="submit">생성</el-button>
        </div>
      </el-dialog>
    </el-form>
    <el-form label-width="80px" @submit.native.prevent="createUser">
      <el-dialog title="고객 생성" :visible.sync="createUserDialog" width="400px" class="create-user-dialog">
        <el-form-item label="고객명">
          <el-input v-model="createUserData.name"></el-input>
        </el-form-item>
        <el-form-item label="연락처">
          <el-input v-model="createUserData.tel"></el-input>
        </el-form-item>
        <el-form-item label="신청금액">
          <el-input v-model="createUserData.loanAmount"></el-input>
        </el-form-item>
        <el-form-item label="경로">
          <el-input v-model="createUserData.route"></el-input>
        </el-form-item>
        <div slot="footer">
          <el-button @click="createUserDialog = false">취소</el-button>
          <el-button type="primary" native-type="submit">생성</el-button>
        </div>
      </el-dialog>
    </el-form>
  </section>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      createUserDialog: false,
      consulFormDialog: false,
      createStaffDialog: false,
      id: "최태근",
      selected: "",
      staff: [],
      consul:[],
      customer: [],
      createStaffData: {
        name: "",
        tel: "",
        age: "",
        password: ""
      },
      createUserData: {
        name: "",
        tel: "",
        loanAmount: "",
        route: "",
        manager: ""
      },
      consulFormData: {
        name: "",
        tel: "",
        loanAmount: "",
        route: "",
        situation: "",
        route: "",
        birth: "",
        jobTitle: "",
        jobGroup: "",
        about: "",
        income: "",
        insurance: "",
        overdue: "",
        propertyA: "",
        propertyB: "",
        manager: "",
        receptionist: "",
        enrollment: "",
        owner: "",
        agency: "",
        period: "",
        marry: "",
        grade: "",
        note:""
      }
    };
  },
  methods: {
    async createUser() {
      const res = await axios.post("/api/consultation", {
        data: this.createUserData
      });

      this.createUserDialog = false;

      this.customer.push(res.data);
      this.customer.reverse();
    },
    async createStaff() {
      const res = await axios.post("/api/createStaff", {
        data: this.createStaffData
      })

      this.createStaffDialog = false

      this.staff.push(res.data)
    },
    async consulForm(){
      const res = await axios.post("/api/consulForm",{
        data:this.consulFormData
      })

      this.consulFormDialog = false

      this.consul.push(res.data)
    }
  },
  mounted() {
    axios.get("/api/consultation").then(res => {
      this.customer = res.data;
    });
  }
};
</script>
<style scoped lang="scss">
.topBtns {
  margin-top: 15px;
  margin-bottom: 15px;
}
.title {
  font-size: 40px;
  margin: 20px 0 40px 0;
}
.bottom-btn-group .el-button,
.bottom-btn-group .el-select {
  margin-right: 10px;
}
.pagination {
  margin-top: 15px;
  margin-bottom: 15px;
}
.create-user-dialog {
  & /deep/ .el-form-item__label {
    padding-right: 20px;
  }
  & /deep/ .el-dialog {
    max-width: 90%;
  }
}
</style>

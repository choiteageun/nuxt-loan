<template>
  <div class="container">
    <el-table :data="paginationApplyList" @selection-change="handleSelectionChecked" size="mini" style="margin-bottom: 15px;">
      <el-table-column type="selection"></el-table-column>
      <el-table-column prop="name" label="고객명"></el-table-column>
      <el-table-column prop="tel" label="연락처"></el-table-column>
      <el-table-column prop="loanAmount" label="신청금액"></el-table-column>
      <el-table-column prop="route" label="경로"></el-table-column>
      <el-table-column label="담당자">
        <template slot-scope="scope">
          <el-select v-model="scope.row.manager_id" value-key="scope.row.id">
            <el-option v-for="staff in $store.state.staffList" :key="staff.id" :label="staff.name" :value="staff.id"></el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column width="160">
        <template slot-scope="scope">
          <el-button size="mini" @click="open(scope.row)">상세정보</el-button>
          <el-button @click="handleUpdateManager(scope.row)" type="primary" size="mini">지정</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination center">
      <el-pagination @current-change="handleChangePage" background layout="prev, pager, next" :page-size="paginationData.dataPerPage" :total="$store.state.applyList.length"></el-pagination>
    </div>
    <div class="bottom-btn-group" style="text-align:right;margin-top:20px;">
      <el-button @click="dialog.createCustomer = true" style="margin-right: 10px;">상담등록</el-button>
      <el-select v-model="selected" value-key="selected" style="margin-right: 10px;">
        <el-option :value="0" label="담당자 선택" disabled></el-option>
        <el-option v-for="staff in $store.state.staffList" :key="staff.id" :label="staff.name" :value="staff.id"></el-option>
      </el-select>
      <el-button type="primary" @click="handleSelectionChange(selected)" :disabled="selected === 0 || this.selectedConsultations.length === 0">선택된 고객 담당지정</el-button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      selected: 0,
      paginationData: {
        currPage: 1,
        dataPerPage: 10
      },
      selectedConsultations:[]
    };
  },

  computed: {
    paginationApplyList() {
      return this.$store.state.applyList.slice(
        (this.paginationData.currPage - 1) * this.paginationData.dataPerPage,
        this.paginationData.currPage * this.paginationData.dataPerPage
      );
    }
  },

  methods: {
    open(consul) {
      this.$parent.$refs.dialog.open(consul);
    },
    handleChangePage(newPage) {
      this.paginationData.currPage = newPage;
    },
    async handleUpdateManager(consul){
      await this.$axios.post(`/api/consultation/${consul.id}`, {
        data:{
          manager_id: consul.manager_id
        }
      })
      this.$notify({
        title: "담당자 변경",
        message: `담당자를 성공적으로 변경하였습니다.`,
        duration: 1500,
      })

      console.log(consul)
    },

    handleSelectionChecked(selection){
      this.selectedConsultations = selection.map(consul => consul.id)
    },
    async handleSelectionChange(manager){
      for(let i=0; i < this.selectedConsultations.length; i++){
        await this.$axios.post(`/api/consultation/${this.selectedConsultations[i]}`,{
          data:{
            manager_id:manager
          }
        })
        this.$notify({
        title: "담당자 변경",
        message: `담당자를 모두 성공적으로 변경하였습니다.`,
        duration: 1500,
      })
      }
    }
  },

  props: {
    dialog: {
      type: Object,
      required: true
    }
  }
};
</script>
<style lang="scss" scoped>

</style>
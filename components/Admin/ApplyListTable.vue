<template>
  <div class="container">
    <el-table :data="paginationApplyList" size="mini" style="margin-bottom: 15px;">
      <el-table-column type="selection"></el-table-column>
      <el-table-column prop="name" label="고객명"></el-table-column>
      <el-table-column prop="tel" label="연락처"></el-table-column>
      <el-table-column prop="loanAmount" label="신청금액"></el-table-column>
      <el-table-column prop="route" label="경로"></el-table-column>
      <el-table-column label="담당자">
        <template slot-scope="scope">
          <el-select v-model="scope.row.manager_id" value-key="scope.row.id">
            <el-option label="최태근부장" value="최태근부장"></el-option>
            <el-option label="나일등대리" value="나일등대리"></el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column width="160">
        <template slot-scope="scope">
          <el-button size="mini" @click="open(scope.row)">상세정보</el-button>
          <el-button type="primary" size="mini">지정</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination center">
      <el-pagination @current-change="handleChangePage" background layout="prev, pager, next" :page-size="paginationData.dataPerPage" :total="$store.state.applyList.length"></el-pagination>
    </div>
    <div class="bottom-btn-group" style="text-align:right;margin-top:20px;">
      <el-button @click="dialog.createCustomer = true" style="margin-right: 10px;">상담등록</el-button>
      <el-select v-model="selected" value-key="selected" style="margin-right: 10px;">
        <el-option v-for="staff in $store.state.staffList" :key="staff.id" :label="staff.name" :value="staff.id"></el-option>
      </el-select>
      <el-button type="primary">이동</el-button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      selected: "",
      paginationData: {
        currPage: 1,
        dataPerPage: 10
      }
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
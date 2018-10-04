<template>
  <div class="container">
    <el-table :data="$store.state.applyList" size="mini">
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
          <el-button size="mini" @click="open(scope.row)">상세정보</el-button>
          <el-button type="primary" size="mini">지정</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination center">
      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
    </div>
    <div class="bottom-btn-group" style="text-align:right;margin-top:20px;">
      <el-button @click="dialog.createCustomer = true">상담등록</el-button>
      <el-button @click="dialog.createStaff = true">직원등록</el-button>
      <el-select v-model="selected" value-key="selected">
        <el-option label="최태근부장" value="1"></el-option>
        <el-option label="나일등대리" value="2"></el-option>
      </el-select>
      <el-button type="primary">이동</el-button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return{
      selected:''
    }
  },

  
  methods:{
    open(consul){
      this.$parent.$refs.dialog.open(consul)
    }
  },

  props: {
    dialog: {
      type: Object,
      required: true
    },
  }
};
</script>
<style lang="scss" scoped>
</style>
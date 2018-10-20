<template>
  <div class="container">
    <div>
      <h4>
        <span style="color:rgba(0,0,150,1);">{{this.$store.state.info.name}}</span>님 접속중</h4>
    </div>
    <div class="center">
      <h1>Staff Page</h1>
    </div>
    <el-table :data="customer" size="mini" style="width:100%;">
      <el-table-column label="번호" fixed prop="id" width="50px"></el-table-column>
      <el-table-column label="고객명" fixed prop="name" width="60px"></el-table-column>
      <el-table-column label="생년월일" prop="birth" width="100px;"></el-table-column>
      <el-table-column label="연락처" prop="tel" width="100px;"></el-table-column>
      <el-table-column label="경로" prop="route" width="100px;"></el-table-column>
      <el-table-column label="승인액" prop="tel" width="100px;"></el-table-column>
      <el-table-column label="담당자" prop="manager_id" width="100px;"></el-table-column>
      <el-table-column label="접수자" prop="receptionist" width="100px;"></el-table-column>
      <el-table-column label="상태" prop="situation" width="100px;"></el-table-column>
      <el-table-column label="접수일시" prop="enrollment" width="100px;"></el-table-column>
      <el-table-column label="최근수정" prop="enrollment" width="100px;"></el-table-column>
      <el-table-column label="고객정보수정" fixed="right" width="100px;">
        <template slot-scope="scope">
          <el-button type="primary" size="mini">상세보기</el-button>
        </template>
      </el-table-column>
      <el-table-column label="금융사접수" fixed="right" width="100px;">
        <template slot-scope="scope">
          <el-button type="primary" size="mini">서류접수</el-button>
          </template>
      </el-table-column>
    </el-table>
    <div class="pagination center">
      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
    </div>
  </div>

</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      customer:[],
    };
  },
  method: {

  },
  async mounted(){
    
    const res = await axios.get(`/api/consultation/${this.$store.state.info.id}`,{})
    this.customer = res.data
    console.log(this.customer)
    // axios.get("/api/consultation/staff").then(res => {
    //   this.customer.push(res.data)
    //   // this.customer = res.data
    // })

  }
};
</script>
<style scoped lang="scss">
.pagination{
  margin-top:15px;
  margin-bottom: 15px;
}
</style>
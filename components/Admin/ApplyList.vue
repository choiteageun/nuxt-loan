<template>
  <div>
    <ApplyListTable :dialog="dialog"></ApplyListTable>
    <ApplyListDialog ref="dialog" :dialog="dialog" @createConsul="createConsul"></ApplyListDialog>
  </div>
</template>
<script>
import axios from "axios";
import ApplyListTable from "@/components/Admin/ApplyListTable.vue";
import ApplyListDialog from "@/components/Admin/ApplyListDialog.vue";

export default {
  components: {
    ApplyListTable,
    ApplyListDialog
  },
  data() {
    return {
      dialog: {
        createCustomer: false,
        updateConsul: false
      },
    };
  },

  methods: {
    async createConsul(consulData) {
      

      // this.customer.push(res.data);

      // this.customer.sort( (left, right) => {
      //   //반환값이 음수 => left, right 순으로 정렬(오름차순 정렬)
      //   //반환값이 양수 =>  right, left 순으로 정렬(내림차순 정렬)
      //   //반환값이 0 => 정렬하지 않고 그대로 냅둠
      //   return right.id - left.id
      // })
    }
  },
  async mounted() {
    
  }
};
</script>
<style scoped lang="scss">
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
.consul-form-dialog {
  & /deep/ .el-form-item__content {
    text-align: center;
  }
  & /deep/ .el-form-item {
    height: 30px;
    box-sizing: border-box;
  }
  & /deep/ .el-textarea__inner {
    margin-top: 10px;
    resize: none;
  }
}
</style>

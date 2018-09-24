<template>
  <section>
    <div class="center">
      <h1 class="title">Final Admin Page</h1>
    </div>
    <div class="container flex topBtns">
      <el-button @click="tab = 'apply'" :type="tab === 'apply' ? 'primary' : 'warning'" >신청목록</el-button>
      <el-button @click="tab = 'complete'" :type="tab === 'complete' ? 'primary' : 'warning'">승인목록</el-button>
      <el-button @click="tab = 'notice'" :type="tab === 'notice' ? 'primary' : 'warning'">공지사항</el-button>
      <el-button @click="tab = 'customer'" :type="tab === 'customer' ? 'primary' : 'warning'">고객관리</el-button>
      <el-button @click="tab = 'staff'" :type="tab === 'staff' ? 'primary' : 'warning'" >직원관리</el-button>
    </div>
    <div>
      <ApplyList v-if="tab === 'apply'"></ApplyList>
      <CompleteList v-if="tab === 'complete'"></CompleteList>
      <Customer v-if="tab === 'notice'"></Customer>
      <Notice v-if="tab === 'customer'"></Notice>
      <Staff v-if="tab === 'staff'"></Staff>
    </div>
  </section>
</template>
<script>
import ApplyList from "@/components/Admin/ApplyList.vue"
import CompleteList from "@/components/Admin/CompleteList.vue"
import Customer from "@/components/Admin/Customer.vue"
import Notice from "@/components/Admin/Notice.vue"
import Staff from "@/components/Admin/Staff.vue"
export default {
  data() {
    return {
      tab: "apply",
    };
  },
  components:{
    ApplyList, CompleteList, Customer, Notice, Staff
  }
};
</script>
<style lang="scss" scoped>
.topBtns {
  margin-top: 15px;
  margin-bottom: 15px;
}
.title {
  font-size: 40px;
  margin: 20px 0 40px 0;
}
</style>
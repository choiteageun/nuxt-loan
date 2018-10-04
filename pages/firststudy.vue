<template>
  <div>
    <el-select v-model="name" placeholder="선택해주세요">
      <el-option v-for="item in items" :key="item.name" :label="item.name" :value="item.name"></el-option>
    </el-select>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      items: [],

      num: ""
    };
  },
  async mounted() {
    const res = await axios.get("/api/consultation/getAllStaff");
    this.items = res.data;
  }
};
</script>
<style lang="scss" scoped>
</style>

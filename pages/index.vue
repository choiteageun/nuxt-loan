<template>
  <div>
    <Header></Header>
    <IndexDisplay></IndexDisplay>
    <indexSolution></indexSolution>
    
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
import IndexDisplay from "@/components/Index/IndexDisplay.vue"
import IndexSolution from "@/components/Index/IndexSolution.vue"

export default {
  components:{
    Header,
    Footer,
    IndexDisplay,
    IndexSolution,
  },
  data() {
    return {
      
    };
  },
  methods: {
    
    
  },
  async fetch({ store, app }) {},
};
</script>
<style scoped lang="scss">
</style>

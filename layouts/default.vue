<template>
  <div>
    <nuxt />
    <Chat />
  </div>

</template>
<script>
import Chat from "@/components/Chat/Chat.vue"
export default {
  data() {
    return {};
  },
  components: {Chat}
};
</script>
<style lang="scss" scoped>
</style>
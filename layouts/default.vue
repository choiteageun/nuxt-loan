<template>
  <div>
    <nuxt />

    <Chat v-if="$store.state.logged" />
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
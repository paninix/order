<template>
  <div class="store-index">
    店铺首页
  </div>
</template>

<script>
export default {
  name: 'store-index',
  data() {
    return {

    }
  },
  computed: {
    store() {
      return this.$store.getters.getStoreInfor;
    }
  },
  methods: {},
  created() {
    console.log(this.store);
    // console.log(this.$route);
  }
}
</script>

<style lang="scss">
</style>

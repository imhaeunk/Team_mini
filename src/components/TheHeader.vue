<template>
  <header>
    <RouterLink to="/"> Home. </RouterLink>
    <RouterLink to="/login"> Login. </RouterLink>
    <RouterLink to="/signup"> Signup. </RouterLink>
    <RouterLink to="/admin"> Admin. </RouterLink>
  </header>
</template>

<script>
// import { mapState, mapMutations } from 'vuex'

// export default {
//   computed: {
//     ...mapState({
//       key: 'key'
//     })
//   },
//   methods: {
//     ...mapMutations(['CHECK_ADMIN'])
//   }
// }
</script>

<style lang="scss" scoped>
header {
  box-sizing: border-box;
  height: 60px;
  padding: 20px 20px;
  border-bottom: 1px solid $color-primary;
  a {
    margin-right: 10px;
    line-height: 1;
  }
}
</style>

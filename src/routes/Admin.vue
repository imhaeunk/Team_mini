<template>
  <div>
    <div class="container">
      <div class="admin-info">관리자 정보</div>
      <div class="tab">
        <ul>
          <li><Router-link to="/admin">판매내역</Router-link></li>
          <li><Router-link to="/admin/query">제품조회</Router-link></li>
        </ul>
      </div>
      <div class="content">
        <h2>판매 내역</h2>
        <ul>
          <li v-for="item in sellList" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { admin } from '../api/index.js'

export default {
  // [vuex] unknown action type: FETCH 에러가 나옴 ㅜ
  // created() {
  //   this.fetch()
  // },
  // computed: {
  //   ...mapState({
  //     sellList: 'sellList'
  //   })
  // },
  // methods: {
  //   ...mapActions(['FETCH']),
  //   fetch() {
  //     this.FETCH()
  //   }
  // }
  created() {
    this.fetch()
  },
  data() {
    return {
      sellList: []
    }
  },
  methods: {
    fetch() {
      admin.showSellList().then(data => (this.sellList = data))
      console.log(this.sellList)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  box-sizing: border-box;
  margin: 0;
  padding: 20px;
}

.admin-info {
  position: fixed;
  width: 200px;
  height: 250px;
  border: 1px solid #0066ff;
}

.tab {
  position: fixed;
  top: 350px;
  width: 200px;
  height: 250px;
  border: 1px solid #0066ff;
}

.content {
  width: 600px;
  height: 600px;
  margin-left: 220px;
  border: 1px solid #ff4949;
}
</style>

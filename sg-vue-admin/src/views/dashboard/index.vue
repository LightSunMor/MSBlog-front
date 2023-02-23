<template>
  <div class="dashboard-container"  >
    <div class="dashboard-text" >
      晨曦博客管理系统
    </div>
    <div>
      GitHub地址：<a href="https://space.bilibili.com/663528522">https://space.bilibili.com/663528522</a>   MorSun
    </div>
    <div>
      前端资料网上获取，自己增删某些功能
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>

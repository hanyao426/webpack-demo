<template>
  <div class="container">
    <navList />
    <div class="app-box">
    <router-view />
    </div>
  </div>
</template>
<script>
import navList from './compronent/nav.vue'
export default {
  data() {
    return {
      
    }
  },
  components:{navList}
}
</script>
<style lang="css">
  .container{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .app-box{
    width: calc(100% - 200px);
    margin-left: 200px;
    height: 100%;
  }
</style>
<template>
  <div class="home">
    <p v-for="item in tableData" :key="item.id">{{item.name}}</p>
  </div>
</template>
<script>
import Http from '@server/index'
export default {
  data() {
    return {
      msg:'我是主页',
      tableData:[]
    }
  },
  methods: {
    getStudentInfo(){
      Http.getStudentInfo().then(res=>{
       this.tableData = res.data.data;
      })
    }
  },
  created() {
    this.getStudentInfo()
  },
}
</script>
<style lang="css">
  p{
    color: red;
  }
</style>
<template>
  <div class="nav">
    <ul>
      <li v-for="(item,index) in navList" :key="index">
        <router-link :to="item.route">{{item.label}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navList:[
        {
          label:'首页',route:'/'
        },
        {
          label:'关于我们',route:'/about'
        }
      ]
    }
  },
}
</script>
<style lang="css">
  .nav{
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    background: #000;
    height: 100%;
  }
  li{
    display: block;
    line-height: 50px;
    font-size: 24px;
    text-indent: 1em;
  }
  a{
     color: #fff;
  }
</style>
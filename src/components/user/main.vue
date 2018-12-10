<template>
  <el-container>
    <el-header>
      <div class="block">
        <el-color-picker v-model="color1" class="colorpicker" 
        @click="changecolor('color1')"></el-color-picker>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :default-active="activeIndex">
          <router-link to="first">
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span>首页</span>
            </el-menu-item>
          </router-link>
          <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>个人信息</span>
          </template>
            <router-link tag="li" to="user">
              <el-menu-item index="2-1">
                查看用户信息
              </el-menu-item>
            </router-link>
            <router-link tag="li" to="edit"> 
              <el-menu-item index="2-2">
              修改用户信息
              </el-menu-item>
            </router-link>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>订单</span>
            </template>
            <el-menu-item index="3-1">预约</el-menu-item>
            <el-menu-item index="3-2">查看订单</el-menu-item>
          </el-submenu>
          <el-menu-item index="4">
            <i class="el-icon-menu"></i>
            <span>评价</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-menu"></i>
            <span>反馈</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="main">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-main>
    </el-container>
    <el-footer>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      color1: '#409EFF',
      activeIndex: '1'
    }
  },
  methods: {
    // changecolor(color1) {
    //   document.getElementById(header).style.backgroundcolor = color1;
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header, .el-footer {
  background-color: #909399;
}
.colorpicker {
  float: right;
}
.el-aside {
  text-align: center;
  line-height: 200px;
}
.main {
  font-family: "Hiragino Sans GB",Helvetica;
  background-color: rgb(255, 255, 255);
  color: #333;
  text-align: center;
}
</style>

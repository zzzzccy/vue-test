<template>
  <el-container>
    <el-header :style="{'background': colorpicker}">
      <el-col :span="10" class="logo">
				ADMIN
			</el-col>
      <el-color-picker class="loginout" v-model="colorpicker"></el-color-picker>
      <el-button class="loginout" type="info" @click="logout">注销</el-button>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu class="el-menu-vertical-demo "
          :default-active="activeIndex">
          <router-link to="adminuser">
            <el-menu-item index="1" class="is-active">
              <i class="el-icon-menu"></i>
              用户
            </el-menu-item>
          </router-link>
          <router-link to="admindriver">
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              司机
            </el-menu-item>
          </router-link>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-menu"></i>
              订单
            </template>
            <router-link to="adminorder">
              <el-menu-item index="3-1">
                审批
              </el-menu-item>
            </router-link>
            <router-link to="orderlist">
              <el-menu-item index="3-2">
                查看订单
              </el-menu-item>
            </router-link>
          </el-submenu>
          <router-link to="adminevaluation">
            <el-menu-item index="4">
              <i class="el-icon-menu"></i>
              评价
            </el-menu-item>
          </router-link>
          <router-link to="admincomplaint">
            <el-menu-item index="5">
              <i class="el-icon-menu"></i>
              反馈/投诉
            </el-menu-item>
          </router-link>
        </el-menu>
      </el-aside>
      <el-main class="main">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>

export default {
  data() {
    return {
      activeIndex: '1',
      colorpicker: '#409EFF'
    };
  },
  methods: {
    logout(){
      this.$router.push({path:"/"});
    }
  },
  components: {
    
  },
  beforeCreate () {
    if (this.$route.path === '/') {
      this.$router.push({path: '/index'})
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loginout {
  float: right;
  margin-top: 10px;
}
.el-aside {
  text-align: left;
  line-height: 200px;
}
.main {
  font-family: "Hiragino Sans GB",Helvetica;
  background-color: aliceblue;
  color: #333;
  text-align: center;
}
.el-menu {
    height: 100%;
    background-color: #e6e6e6;
    position: fixed;
    float: left;
}
a {
  text-decoration: none;
}
.logo {
  height:60px;
  font-size: 22px;
  padding-left:20px;
  padding-right:20px;
  border-color: rgba(238,241,146,0.3);
  border-right-width: 1px;
  border-right-style: solid;
  line-height: 60px;
  color: #fff;
  text-align: left;
}
</style>

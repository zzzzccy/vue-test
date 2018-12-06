<template>
  <el-container>
    <el-header id="header" class="header">
      <div class="block">
        <el-color-picker v-model="color1" class="colorpicker" 
        @click="changecolor('color1')"></el-color-picker>
      </div>
    </el-header>
    <el-main class="main">
      <el-row type="flex" justify="center">
        <el-form :model="login" :rules="loginrules" status-icon
        ref="login" label-width="100px">
          <h3>登  录</h3>
          <el-form-item label="用户名" prop="username">
            <el-input v-model="login.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pwd">
            <el-input v-model="login.pwd" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" icon="el-icon-upload" @click="login1">登录</el-button>
            <el-button type="primary" icon="el-icon-refresh" @click="reset('login')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-row>
    </el-main>
    <el-footer class="footer">
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      color1: '#409EFF',
      login: {
        username: '',
        pwd: ''
      },
      loginrules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 5, max: 12, message: '长度为5-12位', trigger: 'blur' }
        ],
        pwd: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 12, message: '长度为6-12位', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    reset(formName) {
      this.$refs[formName].resetFields();
    },
    changecolor(color1) {
      document.getElementById(header).style.backgroundcolor = color1;
    },
    login1() {
      this.$router.push({path:'/main'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header, footer {
  background-color: #909399;
}
.colorpicker {
  float: right;
}
.main {
  font-family: "Hiragino Sans GB",Helvetica;
}
</style>

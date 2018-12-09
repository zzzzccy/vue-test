<template>
  <el-form :model="dlogin" :rules="dloginrules" status-icon ref="dlogin" label-width="100px"> 
    <h3>登    录</h3>
    <el-form-item label="用户名" prop="username">
      <el-input v-model="dlogin.username" prefix-icon="el-icon-info" placeholder="请输入用户名"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="pwd">
      <el-input v-model="dlogin.pwd" type="password" prefix-icon="el-icon-view" placeholder="请输入密码" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" icon="el-icon-upload" @click="dlogin1">登录</el-button>
      <el-button type="primary" icon="el-icon-refresh" @click="reset('dlogin')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
     activeName: "ddlogin",
     dlogin: {
        username: '',
        pwd: '',
      },
      dloginrules: {
        username: [
          { required: true, message: "请输入用户名", trigger: 'blur' },
          { min: 5, max: 12, message: "长度为5-12位", trigger: 'blur' }
        ],
        pwd: [
          { required: true, message: "请输入密码", trigger: 'blur' },
          { min: 6, max: 12, message: "长度为6-12位", trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    reset(formName) {
      this.$refs[formName].resetFields();
    },
    dlogin1() {
      this.$router.push({ path: "/main" });
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

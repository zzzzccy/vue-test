<template>
  <el-form :model="dregister" :rules="dregisterrules" status-icon ref="dregister" label-width="100px">
    <h3>注册</h3>
    <el-form-item label="用户名" prop="username">
      <el-input v-model="dregister.username" placeholder="请输入用户名" clearable></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="pwd">
      <el-input v-model="dregister.pwd" type="password" placeholder="请输入密码" auto-complete="off" clearable></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="checkpwd">
      <el-input v-model="dregister.checkpwd" type="password" placeholder="请再次输入密码" auto-complete="off" clearable></el-input>
    </el-form-item>
    <el-form-item label="车牌号码" prop="carNum">
      <el-input v-model="dregister.carNum" placeholder="请输入车牌号码" auto-complete="off" clearable></el-input>
    </el-form-item>
    <el-form-item label="手机号" prop="phone">
      <el-input v-model="dregister.phone" placeholder="请输入手机号" clearable></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" icon="el-icon-upload" @click="">注册</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    var validateCheckPwd = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.dregister.pwd) {
        callback(new Error("两次密码不一致"));
      } else {
        callback();
      }
    };
    var validateCheckPhone = (rule, value, callback) => {
      const reg = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/;
      console.log(reg.test(value));
      if (reg.test(value)) {
        callback();
      } else {
        return callback(new Error("请输入长度为11位的手机号"));
      }
    };
    var validateCheckCarNum = (rule, value, callback) => {
      const regCarNum = /(^[\u4E00-\u9FA5]{1}[A-Z0-9]{6}$)|(^[A-Z]{2}[A-Z0-9]{2}[A-Z0-9\u4E00-\u9FA5]{1}[A-Z0-9]{4}$)|(^[\u4E00-\u9FA5]{1}[A-Z0-9]{5}[挂学警军港澳]{1}$)|(^[A-Z]{2}[0-9]{5}$)|(^(08|38){1}[A-Z0-9]{4}[A-Z0-9挂学警军港澳]{1}$)/;
      console.log(regCarNum.test(value));
      if (regCarNum.test(value)) {
        callback();
      } else {
        return callback(new Error("车牌号码错误"));
      }
    };
    return {
      activeName: "dreg",
      dregister: {
        username: "",
        pwd: "",
        checkpwd: "",
        carNum: "",
        phone: ""
      },
      dregisterrules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 5, max: 12, message: "长度为5-12位", trigger: "blur" }
        ],
        pwd: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 12, message: "长度为6-12位", trigger: "blur" }
        ],
        checkpwd: [
          { required: true, validator: validateCheckPwd, trigger: "blur" }
        ],
        carNum: [
          { required: true, message: "请输入车牌号码", trigger: "blur" },
          { validator: validateCheckCarNum, trigger: "blur" }
        ],
        phone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { validator: validateCheckPhone, trigger: "blur" },
        ]
      }
    };
  },
  methods: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

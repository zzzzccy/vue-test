<template>
  <el-form :model="register" :rules="registerrules" status-icon ref="register" label-width="100px">
    <h3>注册</h3>
    <el-form-item label="用户名" prop="username">
      <el-input v-model="register.username"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="pwd">
      <el-input v-model="register.pwd" type="password" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="checkpwd">
      <el-input v-model="register.checkpwd" type="password" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="姓名" prop="name">
      <el-input v-model="register.name"></el-input>
    </el-form-item>
    <el-form-item label="性别" prop="sex">
      <el-radio v-model="register.sex" label="1">男</el-radio>
      <el-radio v-model="register.sex" label="2">女</el-radio>
    </el-form-item>
    <el-form-item label="年龄" prop="age">
      <el-input v-model.number="register.age" placeholder="请输入年龄" clearable></el-input>
    </el-form-item>
    <el-form-item label="手机号" prop="phone">
      <el-input v-model.number="register.phone" placeholder="请输入手机号" clearable></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    var validateCheckPwd = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.register.pwd) {
        callback(new Error("两次密码不一致"));
      } else {
        callback();
      }
    };
    var validateCheckAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
      setTimeout(() => {
        if (value < 18) {
          callback(new Error("必须年满18岁"));
        } else {
          callback();
        }
      }, 1000);
    };
    return {
      activeName: "reg",
      register: {
        username: "",
        pwd: "",
        checkpwd: "",
        name: "",
        sex: "1",
        age: "",
        phone: ""
      },
      registerrules: {
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
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" }
        ],
        age: [
          { required: true, validator: validateCheckAge, trigger: "blur" },
          { type: "number", message: "年龄必须为数字值" }
        ],
        phone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { min: 11, max: 11, message: "长度为11位", trigger: "blur" },
          { type: "number", message: "手机号必须为数字值" }
        ]
      }
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

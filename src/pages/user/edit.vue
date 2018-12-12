<template>
  <el-row>
    <el-col :span="16" :offset="4" class="edit">
      <h1>修改个人信息</h1>
      <el-card class="editbox" shadow="hover">
        <el-form :model="edit" :rules="editrules" status-icon ref="edit" label-position="right" label-width="100px">
          <el-form-item label="密码" prop="pwd">
            <el-input v-model="edit.pwd" type="password" placeholder="请输入密码" auto-complete="off" clearable></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkpwd">
            <el-input v-model="edit.checkpwd" type="password" placeholder="请再次输入密码" auto-complete="off" clearable></el-input>
          </el-form-item>
          <el-form-item label="姓名" prop="name">
            <el-input v-model="edit.name" placeholder="请输入姓名" clearable></el-input>
          </el-form-item>
          <el-form-item label="年龄" prop="age">
            <el-input v-model.number="edit.age" placeholder="请输入年龄" clearable></el-input>
          </el-form-item>
          <el-form-item label="手机号" prop="phone">
            <el-input v-model="edit.phone" placeholder="请输入手机号" clearable></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" icon="el-icon-upload" @click="">修改</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
     var validateCheckPwd = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.edit.pwd) {
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
    var validateCheckPhone = (rule, value, callback) => {
      const reg = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/;
      console.log(reg.test(value));
      if (reg.test(value)) {
        callback();
      } else {
        return callback(new Error("请输入长度为11位的手机号"));
      }
    };
    return {
      edit: {
        pwd: '123456',
        checkpwd: '123456',
        name: 'name',
        age: 18,
        phone: '13456789210'
      },
      editrules: {
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
          { type: "number", message: "年龄必须为数字值", trigger: "blur" }
        ],
        phone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { validator: validateCheckPhone, trigger: "blur" }
        ]
      }
    }
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.edit {
  color: aliceblue;
  background-color: #606266;
  height: 500px;
  font-family: "Microsoft YaHei",Helvetica;
}
.editbox {
  padding: 10px 20px;
  height: auto;
  width: 80%;
  margin: auto;
}
</style>

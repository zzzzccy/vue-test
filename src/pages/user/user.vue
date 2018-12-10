<template>
  <el-row>
    <el-col :span="16" :offset="4" class="user">
      <h1>用户信息</h1>
      <el-card class="msg">
        用户名： {{userName}}
        <i class="layui-icon layui-icon-face-smile" style="font-size: 30px; color: #1E9FFF;"></i>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      userName: '',
      name: '',
      sex: '',
      age: '',
      phone: ''
    }
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user {
  color: aliceblue;
  background-color: #606266;
  height: 500px;
  font-family: "Microsoft YaHei",Helvetica;
}
.msg {
  color: aliceblue;
  padding: 10px 20px;
  height: 300px;
  background-color: #909399;
}
</style>

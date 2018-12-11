<template>
  <el-row>
    <el-col :span="16" :offset="4" class="user">
      <h1>用户信息</h1>
      <el-card class="msgbox" shadow="hover">
        <img src="@/img/user.jpg" alt="user" class="image">
        <br>
        <el-card shadow="always" class="msg">
          用户名： {{userName}}
          <br>
          姓  名： {{name}}
          <br>
          性  别： {{sex}}
          <br>
          年  龄： {{age}}
          <br>
          手机号码： {{phone}}
        </el-card>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      userName: 'user1',
      name: 'name',
      sex: '男',
      age: 18,
      phone: '13456789210'
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
.msgbox {
  color: aliceblue;
  padding: 10px 20px;
  height: 300px;
  width: 80%;
  margin: auto;
  background-color: #909399;
}
.image {
  border-radius: 50%;
  width: 100px;
  height: 100px;
}
.msg {
  background: #606266;
  color: aliceblue;
  width: 90%;
  margin: auto;
}
</style>

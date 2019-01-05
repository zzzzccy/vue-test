<template>
  <el-row>
    <el-col :span="16" :offset="4" class="order">
      <h1>订单信息</h1>
      <el-card class="msgbox" shadow="hover">
        <el-card v-for="order in OrderList" :key="order.orderId" shadow="always" class="msg">
          用户名：
          <br>
          司机:
          <br>
          乘车地址:
          <br>
          乘车时间:
          <br>
          手机号码:
        </el-card>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      OrderList: []
    }
  },
  created:function() {
    this.getAllOrder();
  },
  methods: {
    getAllOrder(){
      this.$http
        .get("/api/order")
        .then(res => {
          this.OrderList = res.data.order;
          console.log(this.OrderList);
        })
        .catch(function(error) {
          console.log("error:" + error);
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.order {
  color: aliceblue;
  background-color: #606266;
  height: 500px;
  font-family: "Microsoft YaHei",Helvetica;
}
.msgbox {
  color: aliceblue;
  padding: 10px 20px;
  height: auto;
  width: 80%;
  margin: auto;
  background-color: #909399;
}
.msg {
  background: #606266;
  color: aliceblue;
  width: 90%;
}
</style>

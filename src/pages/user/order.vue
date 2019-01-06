<template>
  <el-row>
    <el-col :span="16" :offset="4" class="order">
      <h1>订单信息</h1>
      <el-card class="msgbox" shadow="hover">
        <el-card v-for="order in OrderList.slice((currentPage-1)*pagesize, currentPage*pagesize)" :key="order.orderId" shadow="always" class="msg">
          用户名： {{order.userName}}
          <br>
          司机:  {{order.driver}}
          <br>
          乘车地址:  {{order.addr}}
          <br>
          乘车时间:  {{order.odate}} + {{order.otime}}
          <br>
          手机号码:  {{order.ophone}}
        </el-card>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[2, 3, 4]"
          :page-size="pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="OrderList.length">
        </el-pagination>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      OrderList: [],
      currentPage: 1,
      pagesize: 3
    }
  },
  created:function() {
    this.getAllOrder();
  },
  methods: {
    handleSizeChange(val) {
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    getAllOrder(){
      this.$http
        .get("/api/order")
        .then(res => {
          this.OrderList = res.data.data;
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

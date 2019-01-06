<template>
  <el-row>
    <el-col :span="16" :offset="4" class="evaluation">
      <h1>evaluation</h1>
      <el-table
      :data="OrderList"
      border
      style="width: 100%">
      <el-table-column
        fixed
        prop= "odate"
        label="乘车日期"
        width="150">
      </el-table-column>
      <el-table-column
        fixed
        prop= "otime"
        label="乘车时间"
        width="150">
      </el-table-column>
      <el-table-column
        prop="driver"
        label="司机"
        width="120">
      </el-table-column>
      <el-table-column
        prop="addr"
        label="乘车地址"
        width="250">
      </el-table-column>
      <el-table-column
        prop="ophone"
        label="手机号码"
        width="250">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="" type="text" size="small" disabled="evaluation">查看</el-button>
          <el-button type="text" size="small" disabled="!evaluation">评价</el-button>
        </template>
      </el-table-column>
    </el-table>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      OrderList: [],
      EvaluationList: []
    }
  },
  created:function() {
    this.getAllOrder();
    this.getAllEvaluation();
    console.log(this.EvaluationList);
  },
  methods: {
    getAllOrder(){
      this.$http
        .get("/api/order")
        .then(res => {
          this.OrderList = res.data.data;
        })
        .catch(function(error) {
          console.log("error:" + error);
        });
    },
    getAllEvaluation(){
      this.$http
        .get("/api/evaluation")
        .then(res => {
          this.EvaluationList = res.data.data;
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
.evaluation {
  color: aliceblue;
  background-color: #606266;
  height: 500px;
  font-family: "Microsoft YaHei",Helvetica;
}
</style>

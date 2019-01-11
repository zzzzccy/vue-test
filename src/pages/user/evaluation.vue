<template>
  <el-row>
    <el-col :span="16" :offset="4" class="evaluation">
      <h1>evaluation</h1>
      <el-table
      :data="OrderList.slice((currentPage-1)*pagesize, currentPage*pagesize)"
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
        prop="evaluation"
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small" :disabled="scope.row.evaluation === 0"  @click="checkEvaluation(scope.row.orderId)">查看</el-button>
          <el-dialog title="评价" :visible.sync="check" center :modal-append-to-body='false'>
            <el-form :model="evaluationNum">
              <el-form-item label="评论" :label-width="formLabelWidth">{{evaluationNum.msg}}
              </el-form-item>
              <el-form-item label="评分" :label-width="formLabelWidth">
                <el-rate
                  v-model="evaluationNum.score"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}"
                  style="line-height:2.5">
                </el-rate>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="check = false">关 闭</el-button>
            </div>
          </el-dialog>
          <el-button type="text" size="small" :disabled="scope.row.evaluation === 1"  @click="newEvaluate(scope.row.orderId)">评价</el-button>
          <el-dialog title="评价" :visible.sync="evaluate" center :modal-append-to-body='false'>
            <el-form :model="evaluationNew">
              <el-form-item label="评论" :label-width="formLabelWidth">
                <el-input type="textarea" rows="3" placeholder="少于50字"></el-input>
              </el-form-item>
              <el-form-item label="评分" :label-width="formLabelWidth">
                <el-rate
                  v-model="evaluationNew.score" 
                  show-score
                  text-color="#ff9900"
                  score-template="{value}"
                  style="line-height:2.5">
                </el-rate>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button type="primary" @click="">确 定</el-button>
              <el-button @click="evaluate = false">关 闭</el-button>
            </div>
          </el-dialog>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 6]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="EvaluationList.length">
    </el-pagination>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      OrderList: [],
      EvaluationList: [],
      formLabelWidth: '120px',
      check: false,
      evaluate: false,
      evaluationNum: {
        eid: '',
        oid: '',
        msg: '',
        scope: ''
      },
      evaluationNew: {
        eid: '',
        oid: '',
        msg: '',
        scope: ''
      },
      currentPage: 1,
      pagesize: 5
    }
  },
  created:function() {
    this.getAllOrder();
    this.getAllEvaluation();
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
    },
    checkEvaluation(val) {
      this.evaluationNum = this.EvaluationList[val-1];
      this.check = true;
    },
    newEvaluate(val) {
      this.evaluationNew.oid = val;
      this.evaluate = true;
    },
    handleSizeChange(val) {
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
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

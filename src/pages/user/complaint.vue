<template>
  <el-row>
    <el-col :span="16" :offset="4" class="complaint">
      <h1>反馈/投诉</h1>
      <el-button type="primary" icon="el-icon-edit" style="float: left;margin: 20px" @click="newComplaint()">添加反馈/投诉</el-button>
      <el-dialog title="反馈/评论" :visible.sync="NewComplaint" center :modal-append-to-body='false'>
        <el-form :model="complaintNew">
        <el-tabs type="border-card">
          <el-tab-pane label="反馈">
            <el-form-item label="反馈信息" :label-width="formLabelWidth">
              <el-input type="textarea" rows="3" placeholder="少于50字"></el-input>
            </el-form-item>
          </el-tab-pane>
          <el-tab-pane label="投诉">
            <el-form-item label="投诉司机姓名" :label-width="formLabelWidth">
              <el-input type="text"></el-input>
            </el-form-item>
            <el-form-item label="投诉信息" :label-width="formLabelWidth">
              <el-input type="textarea" rows="3" placeholder="少于50字"></el-input>
            </el-form-item>
          </el-tab-pane>
        </el-tabs>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="">确 定</el-button>
          <el-button @click="NewComplaint = false">关 闭</el-button>
        </div>
      </el-dialog>
      <el-table
      :data="ComplaintList.slice((currentPage-1)*pagesize, currentPage*pagesize)"
      border
      style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="反馈/投诉id">
              <span>{{ props.row.cid }}</span>
            </el-form-item>
            <el-form-item label="用户id">
              <span>{{ props.row.udid }}</span>
            </el-form-item>
            <el-form-item label="类别">
              <span v-if="props.row.cudid === ''">反馈</span>
              <span v-else>投诉</span>
            </el-form-item>
            <el-form-item v-if="props.row.cudid === ''">
            </el-form-item>
            <el-form-item v-if="props.row.cudid !== ''" label="反馈/投诉对象id">
              <span>{{ props.row.cudid }}</span>
            </el-form-item>
            <el-form-item label="反馈/投诉信息">
              <span>{{ props.row.msg }}</span>
            </el-form-item>
            <el-form-item label="状态">
              <span>{{ props.row.status }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        prop= "udid"
        label="用户id"
        width="100">
      </el-table-column>
      <el-table-column
        prop= "cudid"
        label="投诉id"
        width="100">
      </el-table-column>
      <el-table-column
        prop="msg"
        label="反馈/投诉信息"
        width="250">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        width="100">
      </el-table-column>
      <el-table-column
        label="操作"
        width="100">
        <template slot-scope="scope">
         <el-button type="danger" @click="">删除</el-button>
        </template>
      </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[3, 4]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="ComplaintList.length">
      </el-pagination>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      ComplaintList: [],
      currentPage: 1,
      pagesize: 3,
      formLabelWidth: '120px',
      NewComplaint: false,
      complaintNew: {
        cudid: '',
        msg: '',
        status: "待审核"
      }
    }
  },
  created:function() {
    this.getAllComplaint();
  },
  methods: {
    getAllComplaint(){
      this.$http
        .get("/api/complaint")
        .then(res => {
          this.ComplaintList = res.data.data;
        })
        .catch(function(error) {
          console.log("error:" + error);
        });
    },
    newComplaint() {
      this.NewComplaint = true;
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
.complaint {
  color: aliceblue;
  background-color: #606266;
  height: 500px;
  font-family: "Microsoft YaHei",Helvetica;
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>

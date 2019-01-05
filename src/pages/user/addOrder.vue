<template>
  <el-row>
    <el-col :span="16" :offset="4" class="addOrder">
      <h1>预约</h1>
      <el-card class="msgbox" shadow="hover">
        <h1>预约订单信息</h1>
        <el-form :model="order" :rules="orderrules" status-icon ref="order" label-position="right" label-width="100px">
          <el-form-item label="乘车地址" prop="addr">
            <el-input v-model="order.addr" placeholder="请输入乘车地址"  auto-complete="off" clearable></el-input>
          </el-form-item>
          <el-form-item label="乘车时间" required>
            <el-col :span="11">
              <el-form-item prop="odate">
                <el-date-picker type="date" v-model="order.odate"  placeholder="选择日期" style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-form-item prop="otime">
                <el-time-select v-model="order.otime" :picker-options="{ start: '06:00', step: '00:15', end: '23:00' }" placeholder="选择时间" style="width: 100%;"></el-time-select>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="手机号" prop="ophone">
            <el-input v-model="order.ophone" placeholder="请输入手机号" clearable></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" icon="el-icon-upload" @click="">预约</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
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
      order: {
        addr: '',
        odate: '',
        otime: '',
        ophone: ''
      },
      orderrules:{ 
        addr: [
          { required: true, message: "请输入乘车地址", trigger: "blur" }
        ],
        odate: [
          { required: true, message: "请输入乘车日期", trigger: "blur" }
        ],
        otime: [
          { required: true, message: "请输入乘车时间", trigger: "blur" }
        ],
        ophone: [
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
.addOrder {
  color: aliceblue;
  background-color: #606266;
  height: 500px;
  font-family: "Microsoft YaHei",Helvetica;
}
.msgbox {
  padding: 10px 20px;
  height: auto;
  width: 80%;
  margin: auto;
  background-color: #909399;
}
</style>

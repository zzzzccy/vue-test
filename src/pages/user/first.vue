<template>
  <div class="block">
    <h3>首页</h3>
    <el-card class="carousel">
      <el-carousel trigger="click" type="card" height="150px">
        <el-carousel-item v-for="(item, index) in Advertisement" :key="index"
        :class="['advertisement-' + item.id]">
          <h3>{{ item.name }}</h3>
        </el-carousel-item>
      </el-carousel>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      Advertisement: [
        {
          name: '广告1',
          id: 'a1'
        },
        {
          name: '广告2',
          id: 'a2'
        },
        {
          name: '广告3',
          id: 'a3'
        },
        {
          name: '广告4',
          id: 'a4'
        },
        {
          name: '广告5',
          id: 'a5'
        },
        {
          name: '广告6',
          id: 'a6'
        }
      ]
    }
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.carousel {
  border: 1px;
  width: 600px;
  opacity: 0.75;
  margin-left: auto;
  margin-right: auto;
  background-color: #5d6d80;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: antiquewhite;
}
.advertisement-a1 {
  background: url('') no-repeat;
}
.advertisement-a2 {
  background: url('') no-repeat;
}
.advertisement-a3 {
  background: url('') no-repeat;
}
.advertisement-a4 {
  background: url('') no-repeat;
}
.advertisement-a5 {
  background: url('') no-repeat;
}
.advertisement-a6 {
  background: url('') no-repeat;
}
</style>

<template>
  <div class="block">
    <h3>first</h3>
    <el-card class="carousel">
      <el-carousel trigger="click" height="150px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
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
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  background-color: #909399;
}
</style>

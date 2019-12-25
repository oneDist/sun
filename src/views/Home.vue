<template>
	<div class="contains">
		<el-carousel :interval="5000" arrow="always">
		    <el-carousel-item v-for="(url,index) in imges" :key="item">
		      <img v-bind:src="url.url" alt="" width="100%" height="100%">
		    </el-carousel-item>
		</el-carousel>
	</div>
 
</template>
<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

</style>

<script>
 export default{
    data() {
      return {
         imges:[ 
	         {url:require('../assets/images/01.jpg')},
	         {url:require('../assets/images/02.jpg')},
	         {url:require('../assets/images/03.jpg')},
	         {url:require('../assets/images/04.jpg')},
         ],
         

      }
    },

    
}
    
</script>


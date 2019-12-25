<template>
  <div class="about">
    <div class="con">
    	<ul class="con_left">
    		<router-link tag="li" to="/home">高中课程</router-link>
	        <router-link tag="li" to="/course">初中课程</router-link>
	        <router-link tag="li" to="/guarantee">小学课程</router-link>
    	</ul>
    </div>
  </div>
</template>
<style scoped>
	.about{
		margin: 100px 200px;
	}
	.con_left{
		text-align: center;
		border: 1px solid;
		width: 100px;
		padding: 20px;
	}
	li{
		
		list-style: none;
		width: 100px;
		height: 30px;
		font-size: 20px;
		line-height: 30px;
		margin-top: 50px;
	}

</style>

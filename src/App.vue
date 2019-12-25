<template>
  <div id="app">
    <div class="top">
      <div class="logo"><img src="./assets/logo.png" width="70" height="60"> 敏锐骄阳</div>
      <div class="top-center">
        孩子学得开心，家长放心
      </div>
      <div class="login">
        <router-link tag="span" to="/login">会员登录</router-link> |
        <router-link tag="span" to="/sgin">会员注册</router-link>
      </div>
    </div>
    <div class="header">
      <ul class="nav">
        <router-link tag="li" to="/home">敏锐骄阳</router-link>
        <router-link tag="li" to="/course">课程培训</router-link>
        <router-link tag="li" to="/guarantee">教学保障</router-link>
         <router-link tag="li" to="/score">成绩管理</router-link>
        <router-link tag="li" to="/download">资源下载</router-link>
        <router-link tag="li" to="/personal">个人中心</router-link>
        <router-link tag="li" to="/about">关于</router-link>
      </ul>
    
    </div>
    <router-view/>
    <footer class="el-footer" style="height: 60px;">
      <div class="linkCon">
        <div class="linkAddress">
          <div class="addressCon">
            <img src="./assets/icon/footer2.png" class="footIcon">
            <span data-v-5a478bc7=""> 地址：武汉光谷软件园D8</span>
          </div>
        <div  class="addressCon">
          <img  src="./assets/icon/footer1.png" class="footIcon">
          <span > 版权信息：敏锐骄阳网络技术有限公司</span>
        </div>
      </div>
      <div  class="addressCon">
        <img  src="./assets/icon/footer4.png" class="footIcon">
        <span style="cursor: pointer;"> 友情链接：敏锐骄阳教育</span>
      </div>
    </div>
  </footer>
  <div class="homeBottom">
    <span  style="margin-right: 20px;">网址：http://www.tianwenqiang.top</span>
    <span>鄂ICP备19028366号</span>
  </div>

  </div>
</template>

<style scoped>
.addressCon{
  margin-left: 50px;
  display: inline-block;
  margin-top: 60px;
}
footer{
  margin-top: 100px;
  height: 287px!important;
  background-size: 100% 100%;
  background-image: url(assets/footerBg.jpg);
}
.homeBottom{
    text-align: center;
    background-color: #099872;
    color: #fff;
    font-size: 12px;
    height: 50px;
    line-height: 50px;
}
.top-center{
  font-size: 16px;
  font-weight: bold;
}
.top{
  display: flex;
  /*max-width: 1210px;*/
  min-width: 1000px;
  justify-content: space-between;
  padding: 0 200px;
  line-height: 70px;
  padding-bottom: 2px;
}
.logo{

  font-size: 50px;
}
.active-exact{
  border-bottom: 4px solid #12C494;
  color: #12C494;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  overflow:hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  height: 100%;
}
.login{
  color:#12C494;
  cursor: pointer; 
}
</style>
<script>
  export default{
    data() {
      return {
        outWidth: window.screen.width,
        barWidth:window.innerWidth-document.documentElement.clientWidth, 

      }
    },
    created(){
       document.getElementById("app").style.width=this.outWidth-this.barWidth+"px";
     },
// 钩子函数
    mounted () { //当进入当前路由将模板绘制成HTML之后的时候触发的函数
          
      
    }
  }
</script>
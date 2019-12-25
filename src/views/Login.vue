<template>
	<div class="Land">
		<div class="topzi">敏锐骄阳学习管理系统</div>
	    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
	          <el-form-item prop="name" label="姓名">
	            <el-input v-model="ruleForm2.name" class="username"></el-input>
	          </el-form-item>
	          <el-form-item label="密码" prop="pass">
	            <el-input type="password" v-model="ruleForm2.pass" class="username" auto-complete="off"></el-input>
	          </el-form-item>
	          	<!-- <router-link tag="a" to="/login">忘记密码？</router-link>
	          	<router-link tag="a" to="/login">去注册></router-link> -->
	            
	          </el-form-item>
	          <el-form-item>
	            <el-button type="primary" class="btn1" @click="submitForm('ruleForm2')">登 录</el-button>
	        </el-form-item>
	    </el-form>
	</div>
</template>
<script>
  export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('账号不能为空'));
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          name: ''
        },
        rules2: {
          pass: [
            { required: true,validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { required: true,validator: validatePass2, trigger: 'blur' }
          ],
          name: [{required: true, message: '不能为空', trigger: 'blur'},
          {pattern: /^[\u4E00-\u9FA5]+$/, message: '用户名只能为中文', trigger: 'blur'}],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
            this.$router.push({path:'/HelloWorld'})
          } else {
            console.log('error submit!!');
            // return false;
            
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style>
.btn1{
	position: relative;
	left: -49px;
	border-radius: 10px;
	width: 400px;
	font-size: 20px;
}

	a{
		text-decoration: none;
		margin-right: 100px;
		margin-left: 100px;
		font-size: 12px;
		color: #409EFF;

	}
	
	.username{
		width: 300px;
	}
 .topzi{
    font-size: 40px;
    margin-bottom: 20px;
  }
 .Land{
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  width: 500px;
  position: relative;
  top:100px;
  margin:0 auto;
  border: 1px solid #000;
  border-radius: 10px;
  padding: 40px;
  margin-bottom: 200px;
}
</style>

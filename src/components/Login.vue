<template>
    <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="right" label-width="0px"  class="demo-ruleForm login-container" >
      <h3 class="title">系统登录</h3>
      <el-form-item  prop="name">
        <el-input type="text" v-model="ruleForm2.name" auto-complete="off" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item  prop="passwd">
        <el-input type="password" v-model="ruleForm2.passwd" auto-complete="off" placeholder="密码" @keyup.enter.native="submitForm('ruleForm2')"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
      </el-form-item>
    </el-form>
</template>
 
<script>
  export default {
    name:'登录',
    
    data() {
      return {
        ruleForm2: {
          name: '',
          passwd: '',
          apiUrl: 'http://10.252.39.59:8080/demo/login'
        },
        rules2: {
          name: [
            {required: true, message: '请输入账号', trigger: 'blur'},
            //{ validator: validaePass }
          ],
        passwd: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            //{ validator: validaePass2 }
          ]
        },
      };
    },


    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
          console.log('post');  
          this.$http.post(this.ruleForm2.apiUrl,{name:this.ruleForm2.name,passwd:this.ruleForm2.passwd},{emulateJSON:true}).then(
          function (res) {
              // 处理成功的结果
              if(res.bodyText=='登录成功'){
                 this.$message({
                      message: res.bodyText,
                       type: 'success'
                 });              
              this.$router.push({ path: '/home' });
              }else{
                this.$message.error(res.bodyText);
              }
        
              // console.log('登录成功');
          },function (res) {
          // 处理失败的结果
              this.$message.error(res.bodyText);
              console.log('登录失败');
          }
      );
         //   console.log('get');  
             //this.$http.get('http://10.252.39.59:8080:8080/ZJ_ihst_00001/v1?appid='+this.ruleForm2.name +'&passwd=' + this.$md5(this.ruleForm2.passwd),{emulateJSON:true}).then(
        //      this.$http.get('http://10.252.39.59:8080/ZJ_ihst_00001/v1?appid='+this.ruleForm2.name +'&passwd=' + this.$md5(this.ruleForm2.passwd),{emulateJSON:true}).then(
        //      function (res) {
        //          // 处理成功的结果
        //         // console.log(res);
        //         let { code, message, data } = res.body;
        //         if (code=='0'){
        //            this.$message({
        //                message: message,
        //                 type: 'success'
        //         });
        //          console.log(message+data);
        //         }else{
        //          this.$message.error(message);
        //          console.log(this.$md5(this.ruleForm2.passwd));
        //         }

        //      },function (res) {
        //      // 处理失败的结果
        //          console.log('响应失败');
        //      }
        //  );


        } else { 
            console.info('登录失败：账号密码不能为空')           
            return false;
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
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
</style>
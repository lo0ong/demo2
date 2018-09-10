<template>
    <el-row class="container">
      	<el-col :span="24" class="header">
            <el-col :span="3" class="logo" >{{sysName}}
			</el-col>
      <el-col :span="4" class="userinfo">
			  	    <el-dropdown trigger="hover">
			  	    	<span class="el-dropdown-link userinfo-inner "> {{sysUserName}}</span>
			  	    	<el-dropdown-menu slot="dropdown">
			  	    		<el-dropdown-item>我的消息</el-dropdown-item>
			  	    		<el-dropdown-item>设置</el-dropdown-item>
			  	    		<el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
			  	    	</el-dropdown-menu>
			  	    </el-dropdown>
            </el-col>
		</el-col>     
      <el-col :span="3">
        <h5>工作台</h5>
        <el-menu
          default-active="3"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          router 
         >
          <el-submenu index="1">
            <template slot="title">
              <i class="iconfont icon-dianshi"></i>
              <span>电视台</span>
            </template>
              <el-menu-item index="1-1"  @click="$router.push('/publicTV')">湛江公共频道</el-menu-item>
              <el-menu-item index="1-2" @click="$router.push('/generalTV')">湛江综合频道</el-menu-item>
          </el-submenu>
         <el-submenu index="2">
            <template slot="title">
              <i class="iconfont icon-diantai"></i>
              <span>广播电台</span>
            </template>
              <el-menu-item index="2-1">98.1</el-menu-item>
              <el-menu-item index="2-2">102.1</el-menu-item>
          </el-submenu>
          <el-menu-item index="3"  @click="$router.push('/charts')">
            <i class="iconfont icon-stat"></i>
            <span slot="title" >统计分析</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="iconfont icon-xinxi"></i>
            <span slot="title">信息</span>
          </el-menu-item>
        </el-menu>
      </el-col>

    
       <el-col :span="21" >
					<el-col :span="24" class="content-wrapper">
						<transition name="fade" mode="out-in">
							<router-view></router-view>
						</transition>
					</el-col>
		 </el-col>  
    </el-row>
</template>




<script>
  export default {
    data() {
		return {
			sysName:'湛蓝视界',
			collapsed:false,
			sysUserName: '林大大',
			sysUserAvatar: 'http://imgtu.5011.net/uploads/content/20170209/4934501486627131.jpg',
			form: {
				name: '',
				region: '',
				date1: '',
				date2: '',
				delivery: false,
				type: [],
				resource: '',
				desc: ''
			}
		}
	},  
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
.container {
		position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
}
.header {
    height: 60px;
	line-height: 60px;
	background: #409EFF
}
.userinfo {
	text-align: right;
	padding-right: 35px;
	float: right;
}
.userinfo-inner {
	cursor: pointer;
	color:#fff;
}
.user-img {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin: 10px 0px 10px 10px;
    float: right;
}
.logo {
    color:#fff;
	height:60px;
	font-size: 22px;
	padding-left:20px;
	padding-right:20px;
	border-color: rgba(238,241,146,0.3);
	border-right-width: 1px;
	border-right-style: solid;
}
.content-wrapper {
	background-color: #fff;
	box-sizing: border-box;
}
</style>



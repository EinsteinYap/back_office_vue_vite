<template>
    <div>
        <el-row class="login-container">
            <el-col :sm="12" :md="16" class="left" >
                <div>
                    <div class="">欢迎光临</div>
                    <div class="">Vue 3 + vite 商城后台</div>
                </div>
            </el-col>
            <el-col :sm="12" :md="8" class="right">
                <h2 class="title">欢迎回来</h2>
                <div class="">
                <span class="line"></span>
                <span>账号密码登录</span>
                <span class="line"></span>
                </div>
             
                <el-form :model="form" class="w-[250px]">
                    <el-form-item label="">
                      <el-input v-model="form.name" placeholder="请输入用户名" >
                        <template #prefix>
                         <el-icon>
                          <user />
                        </el-icon>
                        </template>  
                      </el-input>
                    </el-form-item>

                    <el-form-item label="">
                    <el-input v-model="form.password"  placeholder="请输入密码" >
                      <template #prefix>
                         <el-icon>
                          <lock />
                        </el-icon>
                        </template>   
                    </el-input>
                    </el-form-item>
    <el-form-item >
      <el-button class="w-[250px] " round color="#626aef" type="primary" @click="onSubmit">登录</el-button>
    </el-form-item>
  </el-form>
            </el-col>
            
        </el-row>
        
    </div>
    
</template>
<script setup>
import { reactive } from 'vue'
// import { User ,Lock } from '@element-plus/icons-vue'

// do not use same name with ref
const form = reactive({
  name: '',
  password:''
})

const onSubmit = () => {
  console.log('submit!')
}
</script>

<style scope>
.login-container{
  @apply bg-indigo-500  min-h-screen;
}
.left{
  @apply flex items-center justify-center;
}
.right{
  @apply bg-light-50 flex items-center justify-center flex-col;
}
.left>div>div:first-child{
  @apply font-bold text-5xl text-light-50 mb-4;
}
.left>div>div:last-child{
@apply text-gray-200 text-sm;
}
.right .title{
  @apply font-bold text-3xl text-gray-800 ;
}

.right>div{
  @apply flex items-center justify-center my-5 space-x-2 text-gray-300;
}

.line{
  @apply h-[1px] w-16 bg-gray-200;
}
</style>
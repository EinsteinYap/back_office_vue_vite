<template>
    <div>
        后台首页

        <el-button @click="addCount">
            {{ count }}
        </el-button>
        <el-button @click="addCount2" type="primary">
            {{ form.count }}
        </el-button>

        <!-- <HelloWorld /> -->
        
    </div>
</template>

<script setup>
// import HelloWorld from '~/components/HelloWorld.vue'
import { ref,reactive } from 'vue'
let count =ref(1) 

function addCount(){
    count.value ++
}

const form = reactive({
 count :2
})

function addCount2(){
    form.count ++
}
</script>
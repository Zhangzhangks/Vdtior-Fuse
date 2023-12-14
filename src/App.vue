<template>
  <div>
    <button @click="university += 1">++</button>父子双向绑定---{{ university }}
    <button @click="zks" class="zks">获取子组件setup的实例</button>
    <test ref="zz" v-model:university="university" :getQYInfo="getQYInfo"></test>{{ university }}---父子v-model <br><br>


    <h1> 富文本编辑器</h1>
    <edit></edit><br>

    <h1> 模糊搜索</h1>
    <fuse></fuse>



    <slotuse>
      <template #default="{ user }">
        <tr v-for="item in user">
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
        </tr>
      </template>
    </slotuse>------插槽的使用

    <h2> setup自定义指令</h2>
    <Mydirective></Mydirective>



    <numsrcoll></numsrcoll>
  </div>
</template>

<script setup>
import edit from './components/veditor.vue'
import fuse from '@/components/fuse.vue'
import test from '@/components/test.vue';
import slotuse from './components/slotuse.vue';


import Mydirective from './components/Mydirective.vue';
import { getCurrentInstance, provide, ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import { nanoid } from 'nanoid';
import numsrcoll from './components/数字滚动.vue'
const getQYInfo = function () {
  console.log('传递函数');
}
const { appContext, proxy } = getCurrentInstance();

let id = nanoid(2); // let id = nanoid(4) 也可以指定字符串长度

console.log(id);


onMounted(() => {
  // ElMessage.warning('张可顺')
  console.log(proxy);
})

const zks = function () {
  // proxy.$refs.zz.zzz();
  // proxy.$refs.zz.addcount();
  console.log(proxy.$refs.zz);


}
const university = ref(2);
provide('college', '')

const btn6 = ref([
  { name: 's' },
  { age: '5' }
])


console.log(btn6.value[1].age);
</script>

<style lang="css" >
.zks {
  margin: 20px;
}

div {
  margin: 10px;

}
</style>
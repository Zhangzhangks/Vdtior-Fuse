<template>
    <div class="hello">
        <el-select ref="headerSearchSelect" v-model="search" :remote-method="querySearch" filterable default-first-option
            remote placeholder="Search" class="header-search-select">
            <el-option v-for="option in search_result" :key="option.item.title" :value="option.item.title"
                :label="option.item.author.firstName" />
        </el-select>
    </div>
</template>

<script setup name="HelloWorld">
import { ref } from '@vue/reactivity'
import Fuse from 'fuse.js'
import { watchEffect } from 'vue';

const fuse = ref(undefined)
const search = ref()
watchEffect(() => {
    console.log(search.value, '选择你');
})
//待全文搜索的全部数据
const search_all = ref([])
//搜索的结果
const search_result = ref([])
//后面的value的数据可以和后台返回的数据进行结核,形成远程搜索
search_all.value = [
    {
        title: "Java虚拟机",
        author: {
            firstName: "王浩",
            lastName: "wanghao"
        }
    },
    {
        title: "人工智能",
        author: {
            firstName: "侯建军",
            lastName: "marquis"
        }
    },
    {
        title: 'javascript',
        author: {
            firstName: 'zzz',
            lastName: 'sss'
        }
    }
]
//搜索前出发
// 参数为当前输入值
const querySearch = (search_value) => {
    console.log(search_value);
    if (search_value === '') {
        search_result.value = []
    } else {
        search_result.value = fuse.value.search(search_value)
        console.log(search_result.value);
    }
}

//初始化搜索引擎
const init_search = (list) => {
    fuse.value = new Fuse(list, {
        shouldSort: true,  //是否按分数对结果列表排序
        threshold: 0.4,    //匹配算法阈值。阈值为0.0需要完全匹配（字母和位置），阈值为1.0将匹配任何内容。
        location: 0,    // 确定文本中预期找到的模式的大致位置。
        distance: 100,
        minMatchCharLength: 1, // 模式的最大长度
        //搜索标题与作者名
        keys: [{
            name: 'title',
            weight: 0.7    //设置权重
        }, {
            name: 'author.firstName',
            weight: 0.3    //设置权重
        }]
    })
}
//也可以将这个放在created生命周期,这里使用了setup语法糖
init_search(search_all.value)
</script>
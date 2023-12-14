<!--  -->
<template>
    <table>
        <thead>
            <tr>
                <td>姓名</td>
                <td>年龄</td>
            </tr>
        </thead>
        <tbody>
            <slot :user="list"></slot>
        </tbody>
    </table>
</template>

<script setup name="zks">
import { reactive, ref, defineProps, onMounted, getCurrentInstance } from 'vue'
const { appContext, proxy } = getCurrentInstance();
const list = ref([
    { name: 'zz', age: 1 },
    { name: 'zzz', age: 12 }, { name: 'zzzz', age: 13 },
])

console.log(proxy, 'ss');
</script>
<style lang="less" scoped></style>
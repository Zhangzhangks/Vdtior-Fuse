<!--  -->
<template>
    <br>
    <div>

        <input type="text" v-focus-directive>
        <ul v-ClickRandom-directive.up="random">
        </ul>

    </div><br>
</template>

<script setup >
import { reactive, ref, defineProps, onMounted, inject } from 'vue'
import { zks as vFocusDirective, zzks as vClickRandomDirective } from './CustomerDirective/v-focus'
// const vFocusDirective = {
//     mounted: (el, bilding) => {
//         el.focus()
//         console.log(el, bilding, '自定义指定');
//     }
// }


const random = ref(['1', '2', '3', '4'
])


const obj = reactive({
    name: 'zks',
    age: 18,
    chilr: { name: 'ss' }
})
console.log({ ...obj });

const zzcollege = inject('college')



</script>
<style lang="less" scoped></style>
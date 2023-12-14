<template>
    <div>
        <button @click="add">+11</button>
        {{ university }}
        <input type="text" ref="zksiPT" v-if="show">
        <button @click="showipt">显示</button>
    </div>
</template>

<script setup>
import { getCurrentInstance, getCurrentScope, reactive, ref, nextTick, onMounted } from 'vue';

const { proxy } = getCurrentInstance()
const addcount = () => {
    console.log(22);
}
const zks = ref('zks')
// 查询参数
const queryParams = reactive({
    xmmc: '',
    pageNum: 1,
    pageSize: 20,
})

defineExpose({
    addcount, zks
})
const props = defineProps({
    university: Number,
    getQYInfo: {
        type: Function,
        default: null
    }
})

onMounted(() => {
    props.getQYInfo()
})
const emits = defineEmits(['update:university']);
const add = function () {
    emits('update:university', props.university + 1)
}

const zksiPT = ref();
const show = ref(false);
const showipt = () => {
    show.value = true;
    nextTick(() => {
        zksiPT.value.focus()
    })
}
</script>

<style lang="scss" scoped></style>
<template>
    <div id="vditor" style="margin-top: 200px" />
</template>

<script setup >
import { ref, onMounted } from "vue";
import Vditor from "vditor";
import "vditor/dist/index.css";

const vditor = ref();
let toolbar = [
    "emoji",
    "headings",
    "bold",
    "italic",
    "strike",
    "link",
    "|",
    "list",
    "ordered-list",
    "check",
    "outdent",
    "indent",
    "|",
    "quote",
    "line",
    "code",
    "inline-code",
    "insert-before",
    "insert-after",
    "|",
    "upload",
    "record",
    "table",
    "|",
    "undo",
    "redo",
    "|",
    "edit-mode",
    "content-theme",
    "code-theme",
    "export",
    {
        name: "more",
        toolbar: ["fullscreen", "both", "preview", "info", "help"],
    },
];

onMounted(() => {
    vditor.value = new Vditor("vditor", {
        after: () => {
            vditor.value.setValue("https://blog.csdn.net/weixin_55697693/article/details/131618403 vditor富文本编辑器的使用");
            // console.log(vditor.value.getValue(), 's');
        },


        input: (ss) => {
            // console.log(ss);
            console.log(vditor.value.getValue());
        },

        // 配置工具栏
        toolbar,
        outline: { enable: true }
    });

});


</script>

<style></style>

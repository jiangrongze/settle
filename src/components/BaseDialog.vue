<template>
    <div v-show="visible" class="base-dialog-mask">
        <div class="base-dialog">
            <div class="title>">
                <h3>温馨提示：</h3>
                <button @click="close" class="close">x</button>

            </div>

            <div class="content">
                <p>你确认要退出本系统么？</p>
            </div>

            <div class="footer">
                <button>确认</button>
                <button>取消</button>
            </div>
        </div>



    </div>



</template>

<script>
export default {
    props:{
        visible:Boolean
    },
    methods:{
        close(){
            this.$emit('update:visible',false)
        }
    }




}
</script>

<style>
.base-dialog-mask {
    /* position: fixed; */
    /* top: 0;
    left: 0; */
    /* width: 100%;
    height: 100%; */
    background-color: rgba(red, green, blue, alpha)
}
</style>
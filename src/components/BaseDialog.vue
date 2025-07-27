<template>
    <div v-show="visible" class="base-dialog-mask">
        <div class="base-dialog">
            <div class="title>">
                <!-- <h3>温馨提示：</h3> -->
                <h3> <slot name="title">(默认值)温馨提示：</slot></h3>
                <button @click="close" class="close">xXXX</button>

            </div>

            <div class="content" >
                <!-- <p>你确认要退出本系统么？</p> -->
                <h1> <slot name="content">这是默认值###</slot></h1>
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

<style  scoped>


.base-dialog-mask {
    /* position: fixed; */
    /* /* top: 0; */
    left: 0; 
    /* width: 100%;
    height: 100%; */
    /* background-color: rgba(red, green, blue, alpha) */
}
.base-dialog {
    /* position: fixed; */
    top: 50%;
    left: 50%;
    /* transform: translate(-50%, -50%); */
    width: 470px;
    height: 330px;
    margin: 40px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}
.title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border-bottom: 1px solid #eee;
}
.close {
    cursor: pointer;
    background: blueviolet;
    border: purple;
    font-size: 16px;
    color: #1e39a6;
}
.content {
    padding: 16px;
    font-size: 14px;
    color: #333;
}
.footer {
    /* display: flex;
    justify-content: flex-end; */
    padding: 16px;
    border-top: 1px solid #eee;
}
.footer button {
    margin-left: 8px;
    padding: 8px 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
.footer button:hover {
    background-color: #0056b3;
}
.footer button:active {
    background-color: #004085;
}

</style>
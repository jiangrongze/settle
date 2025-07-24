<template>
    <div class="baseB">
        我是B组件（发布方）
        <button @click="clickSend">发布通知</button>
    </div>
</template>

<script>
import Bus from '../utils/EventBus'

export default {
    methods: {
        clickSend() {

            Bus.$emit('sendMsg', '今日睛天，适合郊游')
        }

    }

}
</script>

<style>
.baseB {
    width: 200px;
    height: 150px;
    padding: 10px;
    margin-top: 10px;
    border: 3px solid #000;
    border-radius: 5px;
    font-size: 20px;
}
</style>
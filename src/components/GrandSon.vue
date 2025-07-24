<template>
    <div class="grandSon">
        我是孙组件
        {{ color }}
        <p>{{ userInfo.name }} - {{ userInfo.age }}</p>
        <button @click="clickSend">发布通知</button>
    </div>
</template>

<script>
import Bus from '../utils/EventBus'

export default {
    inject: ['color', 'userInfo'],

    methods: {
        clickSend() {

            Bus.$emit('sendMsg', '今日睛天，适合郊游')
        }

    }

}
</script>

<style>
.grandSon {
    width: 120px;
    height: 150px;
    padding: 10px;
    margin-top: 10px;
    border: 3px solid #000;
    border-radius: 5px;
    font-size: 20px;
}
</style>
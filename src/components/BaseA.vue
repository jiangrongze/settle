<template>
    <div class="baseA">
        我是A组件（接收方）
        <p>{{ msg }}</p>
        <button @click="clickSend">发布通知</button>
        <br/>
        <GrandSon></GrandSon>

    </div>
</template>

<script>

import Bus from '../utils/EventBus'
import GrandSon from './GrandSon.vue'

export default {

    components: {
        GrandSon
    },

    created() {
        Bus.$on('sendMsg', (msg) => {
            this.msg = msg
    

        })

    },

    data() {
        return {
            msg: "XZC1111113232321ZC"

        }


    },
    methods: {
        clickSend() {

            Bus.$emit('sendMsg', '**********')
        }

    }   


}
</script>

<style scoped>
.baseA {
    width: 200px;
    height: 350px;
    padding: 10px;
    margin-top: 10px;
    border: 3px solid #000;
    border-radius: 5px;
    font-size: 20px;

}
</style>
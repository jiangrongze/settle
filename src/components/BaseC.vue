<template>
    <div class="baseC">
        我是C组件（接收方）
        <p>{{ msg }}</p>

    </div>
</template>

<script>

import Bus from '../utils/EventBus'

export default {
    created() {
        Bus.$on('sendMsg', (msg) => {
            this.msg = msg
 
        })

    },

    data() {
        return {
            msg: "XZCC"

        }


    }


}
</script>

<style scoped>
.baseC {
    width: 200px;
    height: 150px;
    padding: 10px;
    margin-top: 10px;
    border: 3px solid #000;
    border-radius: 5px;
    font-size: 20px;

}
</style>
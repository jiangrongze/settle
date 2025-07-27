<template>
   <form  action="">
    帐号：<input  v-model="acount" type="text" name="username" id="username" />
    密码：<input v-model="password" type="password" name="password" id="password" />
   </form>
</template>

<script>
export default {
    data() {
        return {
            acount: '',
            password: ''
        }
    },
    methods: {
        submitForm() {
            alert('提交表单', this.acount, this.password);
        },
        getValues() {
            return {
                acount: this.acount,
                password: this.password
            };
            // console.log('获取表单值', this.acount, this.password);
        },
        resetForm() {
            this.acount = '';
            this.password = '';
            // console.log('表单已重置');
        }
    }
}
</script>

<style>

</style>
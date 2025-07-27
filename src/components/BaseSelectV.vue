<template>
  <div>
    <!-- <select :value="cityId" @change="handleChange">
        <option value="101">北京</option>
        <option value="102">上海</option>
        <option value="103">武汉</option>
        <option value="104">深圳</option>
        <option value="105">广州</option>
    </select> -->

    <select :value="value" @change="handleChange1">
      <option value="101">北京</option>
      <option value="102">上海</option>
      <option value="103">武汉</option>
      <option value="104">深圳</option>
      <option value="105">广州</option>
    </select>

    <h3>{{ value }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    // cityId:String,
    value: String
  },

  methods: {
    //   handleChange(e){

    //  this.$emit('changId',e.target.value)

    //   },
    handleChange1(e) {

      this.$emit('input', e.target.value);
    },
  },
};
</script>

<style>
</style>
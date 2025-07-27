<template>
  <div class="table-case">
    <table class="my-table">
      <thead>
        <tr>
          <slot name="header"></slot>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(item, index) in data" :key="index">
            
            <slot name="body" :item="item" :index="index"></slot>
       
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    data: String,
  },
};
</script>

<style>
</style>
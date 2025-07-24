<template>
  <section class="main">
    <ul class="todo-list">
      <li v-for="(item, index) in list" :key="item.id" class="todo">
        <div class="view">
          <span class="index">{{ index + 1 }}</span> <label>{{ item.name }} ****** {{ item.id }}</label>
          <button @click="handleDel(item.id)" class="destroy">x</button>
        </div>
      </li>

    </ul>
  </section>

</template>

<script>
export default {
  props: {
    list: Array

  },
  methods: {
    handleDel(id) {
      this.$emit('del', id)
    }
  }

}
</script>

<style></style>
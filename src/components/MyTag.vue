<template>
  <div class="my-tag2">
    <input
      v-if="isEdit"
      ref="tex"
      v-focus
      :value="value"
      class="input"
      type="text"
      placeholder="输入标签"
      @blur="updateTxt"
      @keyup.enter="updateTxt"
      @keyup.esc="updateTxt"
    />
    <!-- <input class="my-input" type="text" placeholder="输入标签" /> -->
    <div v-else @dblclick="handleClick" class="text">
      {{ value }}
    </div>
  </div>
</template>

<script>
export default {
  name: "MyTag",
  props: {
    value: {
      type: String,
      //   default: "默认标签",
    },
  },
  data() {
    return {
      isEdit: false, // 控制输入框的显示与隐藏
    };
  },
  methods: {
    handleClick() {
      this.isEdit = true; // 切换编辑状态
      // this.$nextTick(() => {
      //     if (this.isEdit) {
      //         this.$refs.tex.focus(); // 聚焦输入框
      //     }
      // });
    },
  },

  updateTxt(e) {
    alert("失去焦点了");
    this.$emit("input", e.target.value); // 触发更新事件，将输入的值传递出去
    this.isEdit = false; // 失去焦点后切换回非编辑状态
  },
};
</script>

<style lang="less" scoped>
.my-tag1 {
  cursor: pointer;
  .input {
    appearance: none;
    outline: none;
    border: 1px solid #ccc;
    width: 100px;
    height: 40px;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 5px;
    color: #333;
    &::placeholder {
      color: #999;
    }
  }
}
</style>
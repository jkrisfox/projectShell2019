<template>
  <div class="todo">
    <b-checkbox v-model="todo.done" v-on:input="checkDone"/>
    <span class="todo-title">
      {{ todo.title }}
    </span>
    <b-button v-on:click="onDelete">Delete</b-button>
  </div>
</template>

<script>
export default {
  name: "ToDo",
  props: {
    todo: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  methods: {
    onDelete() {
      this.$emit("delete");
    },
    checkDone() {
      this.$emit("check");
    }
  }
};
</script>

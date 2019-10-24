<template>
  <div class="todo">
    <b-checkbox v-model="todo.done" v-on:input="onCheck" />
    <span class="todo-title">
      {{ todo.title }}
    </span>
    <b-button size="is-small" v-on:click="onDelete">Delete</b-button>
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
    onCheck(value) {
      let modifiedToDo = { ...this.todo, done: value };
      this.$store.dispatch("modifyToDo", modifiedToDo);
    },
    onDelete() {
      this.$store.dispatch("deleteToDo", this.todo);
    }
  }
};
</script>

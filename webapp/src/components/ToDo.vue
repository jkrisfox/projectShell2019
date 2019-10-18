<template>
  <div class="todo">
    <b-checkbox v-model="todo.done" v-on:input="toggleChecker()" />
    <b-button v-on:click="deleteItem()">Delete</b-button>
    <span class="todo-title">
      {{ todo.title }}
    </span>
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
    toggleChecker() {
      this.$store.dispatch('toggleCheck', this.todo);
    },
    deleteItem() {
      this.$store.dispatch('deleteToDo', this.todo);
    }
  }
};
</script>

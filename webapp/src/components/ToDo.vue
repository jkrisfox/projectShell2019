<template>
  <div class="todo">
    <b-checkbox v-model="todo.done" />
    <span class="todo-title">
      {{ todo.title }}
    </span>

    <b-button v-on:click="onDeleteButton">delete</b-button>
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
    onDeleteButton() {
     this.$store.dispatch('deleteToDo', this.todo.id);
    }
  }
};
</script>

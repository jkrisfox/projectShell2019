<template>
  <div class="todo">
    <b-button v-on:click="onDelete">Delete</b-button>
    <b-checkbox v-model="todo.done" />
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
    onDelete() {
      this.$store.dispatch('deleteToDo', this.todo.id)
    }
  }
};
</script>

<template>
  <div class="todo">
    <b-checkbox v-model="todo.done" />
    <b-button v-on:click="onDelete">delete</b-button>
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
    onDelete () {
      this.$store.dispatch('removeToDo', this.todo.id)
      }
    }
};
</script>

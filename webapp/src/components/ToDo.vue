<template>
  <div class="todo">
    <b-checkbox v-on:input="updateToDo" v-model="todo.done" />
    <span class="todo-title">
      {{ todo.title }}
    </span>
    <b-button v-on:click.stop.prevent="removeToDo" type="is-danger" icon-right="delete">Delete</b-button>
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
    updateToDo () {
      this.$store.dispatch('updateToDo', this.todo);
    },
    removeToDo () {
      this.$store.dispatch('removeToDo', this.todo);
    }
  }
};
</script>

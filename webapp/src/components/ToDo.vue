<template>
  <div class="todo">
    <b-checkbox v-on:input="onCheckDone" v-model="todo.done" />
    <b-button v-on:click="deleteToDo">Delete</b-button>
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
    onCheckDone () {
      this.$store.dispatch('changeToDoState', this.todo);
    },
    deleteToDo () {
      this.$store.dispatch('removeToDo', this.todo);
    }
  }
};
</script>

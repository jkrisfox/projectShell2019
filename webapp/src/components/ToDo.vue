<template>
  <div class="todo">
    <b-checkbox v-model="todo.done" v-on:input="toggleDone()" />
    <b-button v-model="todo.delete" v-on:click="removeItem()" > Delete </b-button>
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
    toggleDone() {
      this.$store.dispatch("toggleToDo", this.todo);
    },
    removeItem() {
      this.$store.dispatch("removeToDo", this.todo);
    }
  }
};
</script>

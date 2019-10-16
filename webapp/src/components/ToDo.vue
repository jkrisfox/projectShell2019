<template>
  <div class="todo">
    <b-checkbox v-model="todo.done" v-on:input="onCheck"/>
    <span class="todo-title">
      {{ todo.title }}
    </span>
    <b-button size="is-small" v-on:click="onRemove">Remove</b-button>
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
    onCheck (value) {
      let modifiedTodo = {...this.todo, done: value};
      this.$store.dispatch('checkToDo', modifiedTodo).then(() => {})
    },
    onRemove () {
      this.$store.dispatch('removeToDo', this.todo).then(() => {})
    }
  }
};
</script>

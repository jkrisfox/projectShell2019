<template>
  <div class="todo">
    <b-checkbox v-model="todo.done" v-on:input = "saveToDo($event)"/>
    <span class="todo-title">
      {{ todo.title }}
    <b-button v-on:click="Remove" size="is-small" type = "is-danger" icon-right="delete">
      Delete
      </b-button>
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
    Remove () {
      this.$store.dispatch("removeToDo", this.todo.id)
    }, 
    saveToDo(event) {
      console.log(event)
      this.$store.dispatch("saved", this.todo)
    }
  }
};
</script>

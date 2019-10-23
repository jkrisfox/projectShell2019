<template>
  <div class="todo">
<<<<<<< HEAD
    <b-checkbox v-model="todo.done" v-on:input="onCheckBox"/>
    <b-button v-on:click="onDelete">Delete</b-button>
=======
    <b-checkbox v-model="todo.done" v-on:input="handleCheck"/>
>>>>>>> c2e264a15b15234248a5dce96e58091882102475
    <span class="todo-title">
      {{ todo.title }}
    </span>
    <span class="todo-acton">
      <b-button v-on:click="handleDelete">Delete</b-button>
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
<<<<<<< HEAD
    onDelete () {
      this.$store.dispatch('deleteToDo', this.todo);
    },
    onCheckBox () {
      this.$store.dispatch('checkBoxToDo', this.todo);
=======
    handleCheck: function(value) {
      this.$store.dispatch("updateTodo", {...this.todo, done: value});
    },
    handleDelete: function() {
      this.$store.dispatch("deleteTodo", this.todo);
>>>>>>> c2e264a15b15234248a5dce96e58091882102475
    }
  }
};
</script>

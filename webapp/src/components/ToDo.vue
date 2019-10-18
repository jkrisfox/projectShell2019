<template>
  <div class="todo">
    <b-checkbox v-model="todo.done" v-on:input="onCheckBox"/>
    <b-button v-on:click="onDelete">Delete</b-button>
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
      this.$store.dispatch('deleteToDo', this.todo);
    },
    onCheckBox () {
      this.$store.dispatch('checkBoxToDo', this.todo);
    }
  }
};
</script>

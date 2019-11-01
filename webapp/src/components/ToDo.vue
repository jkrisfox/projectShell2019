<template>
  <div class="todo columns">
    <b-checkbox v-model="todo.done" v-on:input="handleCheck" />
    <span class="todo-title column">{{ todo.title }}</span>
    <b-dropdown aria-role="list">
      <button class="button is-primary" slot="trigger">
        <span>Categories</span>
        <b-icon icon="menu-down"></b-icon>
      </button>
      <b-dropdown-item aria-role="menu-item" :focusable="false">Current Category: {{ todo.category }}</b-dropdown-item>
      <b-dropdown-item v-for="item in " aria-role="listitem" v-on:click="handleCategory"></b-dropdown-item>
    </b-dropdown>
    <b-button v-on:click="handleDelete">Delete</b-button>
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
    handleCheck: function(value) {
      this.$store.dispatch("updateTodo", { ...this.todo, done: value });
    },
    handleDelete: function() {
      this.$store.dispatch("deleteTodo", this.todo);
    },
    handleCategory: function(value) {
      this.$store.dispatch("updateTodo", {...this.todo, category: value });
    }
  }
};
</script>

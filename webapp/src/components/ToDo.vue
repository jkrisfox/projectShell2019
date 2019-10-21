<template>
  <div class="todo">
    <!-- <input type="checkbox" v-bind:checked="todo.done" v-on:click="complete(todo)"/> -->
    <b-checkbox v-model="todo.done" @input.native="complete(todo)"/>
    <span class="todo-title">
      {{ todo.title }}
    </span>
    <b-button @click="removeTodo(todo)" type="is-danger" size="is-small" rounded>x</b-button>
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
  computed: {
    todos() {
      return this.$store.state.todos;
    }
  },
  methods: {
    complete(todo) {
      this.$store.dispatch('markToDo', todo);
  },
    removeTodo(todo) {
      this.$store.dispatch('deleteToDo', todo);
    }
  }
};

</script>

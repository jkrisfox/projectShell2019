<template>
  <div class="todo">
    <b-checkbox v-model="todo.done" @click.prevent.native="onClick(todo)" />
    <span class="todo-title">
      {{ todo.title }}
    </span>
    <button @click="onDelete(todo)">Delete</button>
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
  methods:{
    onClick (todo) {
      this.$store.dispatch("checked", todo);
    },
    onDelete (todo) {
      this.$store.dispatch("deleted", todo);
    }
  }
};
</script>

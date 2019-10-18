<template>
  <div class="todo">
    <b-checkbox v-model="todo.done" />
    <span class="todo-title">
      {{ todo.title }}
    <b-button size="is-small" type = "is-danger" icon-right="delete">
      hello
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
  }
};
</script>

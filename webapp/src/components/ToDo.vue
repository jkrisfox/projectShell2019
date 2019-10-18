<template>
  <div class="todo">
    <b-checkbox v-model="todo.done" />
    <span class="todo-title">
      {{ todo.title }}
    </span>
    <input v-on:click="onDelete()" type="submit" class="button is-link"
value="Delete"/>
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
  methods : {
    onDelete() {
      this.$store.dispatch('deleteCheck', this.todo.id);
    }
  }
};
</script>

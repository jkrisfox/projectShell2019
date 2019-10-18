<template>
  <div class="todo">
    <b-checkbox v-model="todo.done" v-on:input="onCheck"/>
    <span class="todo-title">
      {{ todo.title }}
    </span>
    <b-button size="is-small" v-on:click="onDelete">
      delete
    </b-button>
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
    onCheck () {
      console.log("onCheck");
      this.$store.dispatch("setToDo", this.todo)
    },
    onDelete () {
      console.log("onDelete");
      this.$store.dispatch("removeToDo", this.todo);
    }
  }
};
</script>

<template>
  <div class="todo">
    <b-checkbox v-model="todo.done" />
    <span class="todo-title">
      {{ todo.title }}
    </span>
    <input v-on:click="onDelete()" class="button is-link" value="Delete" type="submit"/>
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
    onDelete() {
      console.log(this.todo.id)
      this.$store.dispatch('removeToDo', this.todo.id)
    }
  }
  
};
</script>

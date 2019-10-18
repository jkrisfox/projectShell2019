<template>
  <div class="todo">
    <b-checkbox v-model="todo.done" v-on:input ="TodoDone"/>
    <span class="todo-title">
      {{ todo.title }}
    </span>
    <div>
      <b-button v-on:click="deleteToDo">Delete</b-button>
    </div>
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
    deleteToDo () {
      
      this.$store.dispatch('deleteToDo', this.todo.id);
    },
    TodoDone(){
      console.log("inside");
      this.$store.dispatch('TodoDone', this.todo.done, this.todo.id);
    }
  }
};
</script>





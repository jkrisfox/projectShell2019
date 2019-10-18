<template>
  <div class="todo">
    <div class="columns">
      <div class="column">
        <div class="is-pulled-left">
          <b-checkbox v-model="todo.done" v-on:input="onToggle"/>
            <span class="todo-title">
              {{ todo.title }}
            </span>
        </div>
        <div class="is-pulled-right">
          <b-button variant="outline-secondary" size="is-small" v-on:click="removeTodo">X</b-button>
        </div>
      </div>
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
    onToggle () {
      this.$store.dispatch("onToggle", this.todo);
    },
    removeTodo () {
      this.$store.dispatch("removeToDo", this.todo);
    }
  }
};

</script>

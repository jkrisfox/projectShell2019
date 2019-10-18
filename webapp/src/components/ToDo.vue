<template>
  <div class="todo">
    <b-checkbox  v-model="todo.done" v-on:click.prevent.native="onCheck(todo)" />
    <span class="todo-title">
      {{ todo.title }}
    </span>
    <button class="delButton" v-on:click="onDelete(todo)">Delete</button>
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
    onCheck(todo) {
      //debugger;
      this.$store.dispatch('boxChecked', todo);
    },
    onDelete(todo) {
      this.$store.dispatch('itemRemoved', todo);
    }
  }
};
</script>

<style lang="scss">
.delButton {
  padding-left: "20p";
}
</style>

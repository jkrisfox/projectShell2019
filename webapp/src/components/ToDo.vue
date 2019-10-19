<template>
  <div class="todo">
    <b-checkbox v-model="checked" />
    <span class="todo-title">
      {{ todo.title }}
    </span>
    <input type="button" value="X" style="border-radius: 50%; margin-left: 10px; background: black; color: white; border: none; cursor: pointer;" @click="deleted">
  </div>
</template>

<script>
export default {
  name: "ToDo",
  data: function() {
    return {
      checked: false,
    };
  },
  props: {
    todo: {
      type: Object,
      default: () => {
        return {};
      }
    },
  },
  methods: {
    deleted: function() {
      this.$store.commit("remove", this.todo);
    },
  },
  watch: {
    checked: function(value) {
      this.$store.commit("checkboxChange", { id: this.todo.id, value: value });
    }
  }
};
</script>

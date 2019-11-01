<template>
  <div class="todo columns">
    <b-checkbox v-model="todo.done" v-on:input="handleCheck" />
    <span class="todo-title column">{{ todo.title }}</span>
    <form v-on:submit.prevent="onSubmit">
      <b-field>
        <select id="cat-dropdown" text="Category" >
          <option v-for="thing in categs" :key="thing.id" v-on:click="handleCategory"> {{thing.name}} </option>
        </select>
      </b-field>
    </form>
    <b-button v-on:click="handleDelete">Delete</b-button>
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
    categs() {
      return this.$store.state.categories;
    }
  },
  data(){
    return {
      tmp: [{id:0, name:"test"}, {id:2, name:"woo"}]
    }
  },
  methods: {
    handleCheck: function(value) {
      this.$store.dispatch("updateTodo", { ...this.todo, done: value });
    },
    handleDelete: function() {
      this.$store.dispatch("deleteTodo", this.todo);
    },
    handleCategory: function(value) {
      this.$store.dispatch("updateTodo", {...this.todo, category: value });
    }
  }
};
</script>

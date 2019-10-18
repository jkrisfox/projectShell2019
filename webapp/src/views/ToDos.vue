<template>
  <div class="todos">
    <div class="columns is-centered">
      <div class="column is-half is-block">
          <h5 class="is-5 title">My ToDos</h5>
      </div>
    </div>
    <div class="columns is-centered">
      <div class="column is-half">
        <template v-for="todo in todos">
          <ToDo :key="todo.id" :todo="todo" />
        </template>
      </div>
    </div>
    <section class="newTodo columns is-centered">
      <div class="column is-half">
        <h5 class="title is-5">New ToDo</h5>
        <form v-on:submit.prevent="onSubmit">
          <b-field label="Title">
            <b-input v-model="newTodo.title"/>
          </b-field>
          <b-field>
          <div class="control is-block">
            <input type="submit" class="button is-link" value="Submit"/>
          </div>
          </b-field>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import ToDo from "@/components/ToDo.vue";
export default {
  name: "ToDos",
  data: function() {
    return {
      newTodo: {
        title: null
      }
    };
  },
  computed: {
    todos: {
      get: function() {
        return this.$store.state.todos;
      },
      set: function(newValue) {
        return this.$store.state.todos = newValue;
      },
    }
  },
  components: {
    ToDo
  },
  methods: {
    onSubmit () {
      this.$store.dispatch('addToDo', this.newTodo).then(() => {
        this.newTodo.title = null;
      })
    }
  },
  mounted() {
    /* whenever page loads, gets the todos array from localStorage */
    if (localStorage.getItem('todos')) {
      this.todos = JSON.parse(localStorage.getItem('todos'));
    }
  },

  watch: {
    todos: {
      handler() {
        /* sets the todos to be a json formatted string of the current "state"
 * of todos */
        localStorage.setItem('todos', JSON.stringify(this.todos));
      },
      deep: true
    }
  }
};
</script>
<style lang="scss" scoped>
</style>>

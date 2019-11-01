<template>
  <div class="todos">
    <div class="columns is-centered">
      <div class="column is-half is-block">
        <h5 class="is-5 title">My ToDos</h5>
      </div>
    </div>
    <div class="columns is-centered">
      <div class="column is-half">

        <div class="column" v-for="category in categories" :key="category.id">
          <h6 class="is-6 title"> {{category.name}} </h6>
          <template v-for="todo in todos">
            <ToDo :key="todo.id" :todo="todo" v-if="todo.category.id === category.id"/>
          </template>
        </div>
      </div>
    </div>
    <section class="newTodo columns is-centered">
      <div class="column is-half">
        <h5 class="title is-5">New ToDo</h5>
        <form v-on:submit.prevent="onSubmit">
          <b-field label="Title">
            <b-input v-model="newTodo.title" />
          </b-field>
          <b-field label="Category">
            <b-select placeholder="Select a Category" v-model="newTodo.category" required>
              <option v-for="category in categories"
                :value="category"
                :key="category.id">
                {{ category.name }}
              </option>
            </b-select>
          </b-field>
          <b-field>
            <div class="control is-block">
              <input type="submit" class="button is-link" value="Submit" />
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
        title: null,
        category: null
      }
    };
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    },
    categories() {
      return this.$store.state.categories;
    }
  },
  components: {
    ToDo
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("addToDo", this.newTodo).then(() => {
        this.newTodo.title = null;
      });
    }
  },
  mounted: function() {
    this.$store.dispatch("loadToDos").catch(() => {
      // if we are not logged in redirect home
      this.$router.push("/");
    });

    // load categories
    this.$store.dispatch("loadCategories").catch(() => {
      // if we are not logged in redirect home
      this.$router.push("/");
    });
    
  }
};
</script>
<style lang="scss" scoped></style>

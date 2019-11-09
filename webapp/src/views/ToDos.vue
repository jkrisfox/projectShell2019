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
            <b-input v-model="newTodo.title" />
          </b-field>

        <b-field label="Category">
          <b-select placeholder="Select a Category" v-model="newTodo.categoryId">
              <option
                  v-for="category in categories"
                  :value="category.id"
                  :key="category.id">
                  {{ category.title }}
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

    <section class="newCategory columns is-centered">
    <div class="column is-half">
      <h5 class="title is-5">New Category</h5>
      <form v-on:submit.prevent="add_cat">
        <b-field label="Title">
          <b-input v-model="newCategory.title" />
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
        categoryId: null
      },
      newCategory: {
        title: null,
        userId: null
      }
    };
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    },
    categories(){
      return this.$store.state.categories;
    }
  },
  components: {
    ToDo
  },
  methods: {
    onSubmit() {
      debugger
      this.$store.dispatch("addTodo", this.newTodo).then(() => {
        this.newTodo.title = null;
        this.newTodo.categoryId = null;
      });
    },
    add_cat() {
      this.$store.dispatch("addCategory", this.newCategory).then(() => {
        this.newCategory.title = null;
        this.newCategory.userId = null;
      });
    }
  },
  mounted: function() {
    this.$store.dispatch("loadToDos").catch(() => {
      // if we are not logged in redirect home
      this.$router.push("/");
    });
    this.$store.dispatch("loadCategories").catch(() => {
      this.$router.push("/");
    });
  }
};
</script>
<style lang="scss" scoped></style>

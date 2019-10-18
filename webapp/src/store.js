import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: "project-template",
  storage: window.localStorage
});

export default new Vuex.Store({
  plugins: [vuexPersist.plugin],
  state: {
    todos: [
      {
        id: 1,
        done: false,
        title: "Test Todo1"
      },
      {
        id: 2,
        done: false,
        title: "Test Todo2"
      }
    ]
  },
  mutations: {
    addToDo(state, todo) {
      state.todos = [...state.todos, {...todo, done: false, id: state.todos.length+1}];
    },
    boxChecked(state, todo) {
      state.todos[todo.id - 1].done = !state.todos[todo.id - 1].done;
    },
    itemRemoved(state, todo) {
      state.todos.splice(todo.id-1, 1);
      var i;
      for (i = 1; i < state.todos.length + 1; i++)
        state.todos[i-1].id = i;
    }
  },
  actions: {
    addToDo({ commit }, toDo) {
      commit("addToDo", toDo);
    },
    boxChecked({ commit }, todo) {
      commit("boxChecked", todo);
    },
    itemRemoved({ commit }, todo) {
      commit("itemRemoved", todo);
    }
  }
});

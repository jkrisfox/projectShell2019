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
      state.todos = [
        ...state.todos,
        { ...todo, done: false, id: state.todos.length + 1 }
      ];
    },
    updateToDo(state, todo) {
      state.todos[state.todos.indexOf(todo)].done = todo.done;
    },
    removeToDo(state, todo) {
      state.todos.splice(state.todos.indexOf(todo), state.todos.indexOf(todo));
      var i;
      for (i = 0; i < state.todos.length; i++) {
        state.todos[i].id = i;
      }
    }
  },
  actions: {
    addToDo({ commit }, toDo) {
      debugger;
      commit("addToDo", toDo);
    },
    updateToDo({ commit }, toDo) {
      debugger;
      commit("updateToDo", toDo);
    },
    removeToDo({ commit }, toDo) {
      debugger;
      commit("removeToDo", toDo);
    }
  }
});

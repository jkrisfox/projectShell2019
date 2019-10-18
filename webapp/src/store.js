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
    deleteToDo(state, todo) {
      state.todos.splice(state.todos.indexOf(todo), state.todos.indexOf(todo));
    },
    BoxToDo(state, todo) {
      console.log(todo.done);
      todo.done = !todo.done;
    }
  },
  actions: {
    addToDo({ commit }, toDo) {
      commit("addToDo", toDo);
    },
    deleteToDo({ commit }, toDo) {
      commit("deleteToDo", toDo);
    },
    checkBoxToDo({ commit }, toDo) {
      commit("checkBoxToDo", toDo);
    }
  }
});

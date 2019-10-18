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
    changeToDoState(state, todo) {
      // var idx = state.todos.indexOf(todo);
      // state.todos[idx].done = !(state.todos[idx].done);
    },
    removeToDo(state, todo) {
      var idx = state.todos.indexOf(todo);
      state.todos.splice(idx, 1);
    }
  },
  actions: {
    addToDo({ commit }, toDo) {
      debugger;
      commit("addToDo", toDo);
    },
    changeToDoState({ commit }, toDo) {
      debugger;
      commit("changeToDoState", toDo);
    },
    removeToDo({ commit }, toDo) {
      debugger;
      commit("removeToDo", toDo);
    }
  }
});

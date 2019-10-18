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
    todos: []
  },
  mutations: {
    addToDo(state, todo) {
      state.todos = [
        ...state.todos,
        { ...todo, done: false, id: state.todos.length + 1 }
      ];
    },
    modifyToDo(state, todo) {
      state.todos = state.todos.map(x => (x.id == todo.id ? todo : x));
    },
    deleteToDo(state, todo) {
      state.todos = state.todos.filter(x => todo.id != x.id);
    }
  },
  actions: {
    addToDo({ commit }, toDo) {
      debugger;
      commit("addToDo", toDo);
    },
    modifyToDo({ commit }, toDo) {
      debugger;
      commit("modifyToDo", toDo);
    },
    deleteToDo({ commit }, toDo) {
      debugger;
      commit("deleteToDo", toDo);
    }
  }
});

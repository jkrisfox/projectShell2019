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
      
    ]
  },
  mutations: {
    addToDo(state, todo) {
      state.todos = [
        ...state.todos,
        { ...todo, done: false, id: state.todos.length + 1 }
      ];
    },
    checkToDo(state, todo) {
      state.todos = state.todos.map(currentValue => {
        return todo.id == currentValue.id ? todo : currentValue;
      });
    },
    removeToDo(state, todo) {
      state.todos = state.todos.filter(
        currentValue => currentValue.id != todo.id
      );
    }
  },
  actions: {
    addToDo({ commit }, toDo) {
      commit("addToDo", toDo);
    },
    checkToDo({ commit }, toDo) {
      commit("checkToDo", toDo);
    },
    removeToDo({ commit }, toDo) {
      commit("removeToDo", toDo);
    }
  }
});

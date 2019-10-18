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
    toggleCheck(state, todo) {
      // Even with no code here my state still gets modified?
    },
    deleteToDo(state, todo) {
      state.todos = state.todos.filter(item => item.id != todo.id);
    }
  },
  actions: {
    addToDo({ commit }, toDo) {
      commit("addToDo", toDo);
    },
    toggleCheck({ commit }, values) {
      commit("toggleCheck", values);
    },
    deleteToDo( {commit}, values) {
      commit("deleteToDo", values);
    }
  }
});

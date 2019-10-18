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
    onToggle(state, todo) {
      state.todos = state.todos.map(t => t.id === todo.id ? todo : t);
    },
    removeToDo(state, todo) {
      state.todos = state.todos.filter(t => t.id != todo.id);
    }

  },
  actions: {
    addToDo({ commit }, toDo) {
      debugger;
      commit("addToDo", toDo);
    },
    onToggle({ commit }, toDo) {
      debugger;
      commit("onToggle", toDo);
    },
    removeToDo({ commit }, toDo) {
      debugger;
      commit("removeToDo", toDo)
    }
  }
});

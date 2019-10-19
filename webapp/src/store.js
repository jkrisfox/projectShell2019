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
      state.todos.push({...todo, done: false, id: state.todos.length + 1});
    },
    checkboxChange(state, payload) {
      state.todos.find(t => t.id === payload.id).done = payload.value;
    },
    remove(state, payload) {
      const index = state.todos.findIndex(t => t.id === payload.id);
      state.todos.splice(index, 1);
    }
  },
  actions: {
    addToDo({ commit }, toDo) {
      commit("addToDo", toDo);
    },
  }
});

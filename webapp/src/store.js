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
    removeToDo(state, toDo) {
      var index = state.todos.indexOf(toDo);
      state.todos.splice(index, 1);
    },
    setToDo(state, toDo) {
      var index = state.todos.indexOf(toDo);
      state.todos[index].done = toDo.done;
      console.log(state.todos[index].done);
    }
  },
  actions: {
    addToDo({ commit }, toDo) {
      debugger;
      commit("addToDo", toDo);
    },
    setToDo({ commit }, toDo) {
      debugger;
      commit("setToDo", toDo);
    },
    removeToDo({ commit }, toDo) {
      debugger;
      commit("removeToDo", toDo);
    }
  }
});

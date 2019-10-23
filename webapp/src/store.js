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
    curSize: 3,
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
    addToDo(state, todo, e) {
      state.todos = [...state.todos, {...todo, done: false, id: state.curSize}];
      state.curSize = state.curSize + 1;
    },
    toggleToDo(state, todo) {
      var temp = [];
      var t;
      for (t in state.todos) {
        if (state.todos[t].id == todo.id) {
          temp.push(todo);
        }
        else {
          temp.push(state.todos[t]);
        }
      }
      state.todos = temp;
    },
    removeToDo(state, todo) {
      var temp = [];
      var t;
      for (t in state.todos) {
        if (state.todos[t].id != todo.id) {
          temp.push(state.todos[t]);
        }
      }
      state.todos = temp;
    }
  },
  actions: {
    addToDo({ commit }, toDo) {
      debugger;
      commit("addToDo", toDo);
    },
    toggleToDo({ commit }, toDo) {
      debugger;
      commit("toggleToDo", toDo);
    },
    removeToDo({ commit }, toDo) {
      debugger;
      commit("removeToDo", toDo);
    }
  }
});

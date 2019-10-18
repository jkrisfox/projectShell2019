import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";
import { checkServerIdentity } from "tls";

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
    checked(state, todo){
      state.todos[todo.id - 1].done = !state.todos[todo.id - 1].done;
    },
    deleted(state, todo){
      state.todos.splice(todo.id - 1, 1);
      var i;
      for(i = 0; i < state.todos.length; i++){
        state.todos[i].id = i + 1;
      }
    }
  },
  actions: {
    addToDo({ commit }, toDo) {
      debugger;
      commit("addToDo", toDo);
    },
    checked ({commit}, todo){
      commit("checked", todo);
    },
    deleted({commit}, todo){
      commit("deleted", todo);
    }
  }
});

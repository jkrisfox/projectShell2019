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

    removeToDo(state, todo) {
      state.todos.splice(todo.id-1)

    },

    tickToDo(state, todo) {
      debugger;
      state.todos = state.todos.map((td) => {
        if (td === todo) {
          return {...td, done: !td.done}
        }
        return td;
      })
    }
  },
  actions: {
    addToDo({ commit }, toDo) {
      // debugger;
      commit("addToDo", toDo);
    },

    removeToDo({ commit }, toDo) {
      commit("removeToDo", toDo)
    },

    tickToDo({ commit }, toDo) {
      commit("tickToDo", toDo)
    }


  }
});

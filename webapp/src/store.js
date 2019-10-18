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
    switchDone(toDo){
      toDo.done = !toDo.done
      console.log(toDo.done);
    },
    removeToDo(state, toDo)
    {
      const i = state.todos.indexOf(toDo)
      state.todos.splice(i, 1)
    }
  },
  actions: {
    addToDo({ commit }, toDo) {
      //debugger;
      commit("addToDo", toDo);
    },
    switchDone({commit}, toDo){
      commit("switchDone", toDo)
    },
    removeToDo({commit}, toDo) {
      commit("removeToDo", toDo);
    }
  }
});

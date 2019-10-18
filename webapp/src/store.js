import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";
import { stat } from "fs";

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: "project-template",
  storage: window.localStorage
});

export default new Vuex.Store({
  plugins: [vuexPersist.plugin],
  state: {
    idx: 0,
    todos: [
    ]
  },
  mutations: {
    addToDo(state, todo) {
      let idx= state.idx + 1;
      state.idx = idx;
      state.todos = [...state.todos, {...todo, done: false, id: idx}];
    },
    TodoDone(state, done, index) {
      state.todos = state.todos.map((td) => {
        if (td.idx === index) {
          return {...td, done: done}
        }
        return td;
      })
      // state.todos[index]= done;
    },

    deleteToDo(state, index){
      state.todos = state.todos.filter((item) => item.id != index);
      // state.todos.splice(index-1, 1);
      // for(var a= index-1; a< state.todos.length; a++)
      // {
      //   state.todo.id -=1;
      // }
      
    }
  },
  actions: {
    TodoDone({commit}, done,index){
      commit("TodoDone", done,index)
    },
    addToDo({ commit }, toDo) {
      debugger;
      commit("addToDo", toDo);
    },
    deleteToDo({commit},index){
      commit("deleteToDo", index);
    }
  }
});

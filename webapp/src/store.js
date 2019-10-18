  
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

    removeToDo(state, todo_id) {
      debugger;
      /*state.todos = state.todos.filter(function(todo){
             return todo_id != todo.id;
           });*/
           for (var i = 0; i < state.todos.length; i++){
             if (state.todos[i].id == todo_id){
               state.todos.splice(i,1);
             }
           }
    },
    DoneToDo(state, todo){
      for (var i = 0; i < state.todos.length; i++){
        if (state.todos[i].id == todo.id){
          state.todos[i].done = todo.done;
        }
      }
    }
  },

  actions: {
    addToDo({ commit }, toDo) {
      debugger;
      commit("addToDo", toDo);
    },
    removeToDo({ commit }, toDo) {
      debugger;
      commit("removeToDo", toDo);
    },
    DoneToDo({ commit }, toDo) {
      debugger;
      commit("DoneToDo", toDo);
    }
  }

});
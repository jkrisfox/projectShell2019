import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";
import axios from "axios";

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: "project-template",
  storage: window.localStorage
});

export const mutations = {
  login: function(state) {
    state.loginState = { ...state.loginState, loggedIn: true };
  },
  logout: function(state) {
    state.loginState = { ...state.loginState, loggedIn: false };
  },
  addToDo(state, todo) {
    state.todoIdx = state.todoIdx + 1;
    state.todos = [...state.todos, { ...todo, done: false, id: state.todoIdx }];
  },
  updateToDo(state, todo) {
    state.todos = state.todos.map(td => (td.id === todo.id ? todo : td));
  },
  deleteToDo(state, todo) {
    state.todos = state.todos.filter(td => td.id !== todo.id);
  }
};

export const actions = {
  login: function({ commit }, payload) {
    const { email, password } = payload;
    return axios.post("/api/login", { email, password }).then(() => {
      commit("login");
    });
  },
  logout: function({ commit }) {
    return axios.get("/api/logout").then(() => {
      commit("logout");
    });
  },
  addToDo({ commit }, toDo) {
    commit("addToDo", toDo);
  },
  updateTodo({ commit }, toDo) {
    commit("updateToDo", toDo);
  },
  deleteTodo({ commit }, toDo) {
    commit("deleteToDo", toDo);
  }
};

export default new Vuex.Store({
  plugins: [vuexPersist.plugin],
  state: {
<<<<<<< HEAD
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
    deleteToDo(state, todo) {
      state.todos.splice(state.todos.indexOf(todo), state.todos.indexOf(todo));
    },
    checkBoxToDo(state, todo) {
      //console.log(todo.done);
      todo.done = todo.done;
    }
  },
  actions: {
    addToDo({ commit }, toDo) {
      //debugger;
      commit("addToDo", toDo);
    },
    deleteToDo({ commit }, toDo) {
      commit("deleteToDo", toDo);
    },
    checkBoxToDo({ commit }, toDo) {
      commit("checkBoxToDo", toDo);
    }
  }
=======
    todos: [],
    loginState: {
      loggedIn: false
    },
    todoIdx: 0
  },
  mutations,
  actions
>>>>>>> c2e264a15b15234248a5dce96e58091882102475
});

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
    state.todos = [
      ...state.todos,
      { ...todo, done: false, id: state.todos.length + 1 }
    ];
  },
  modifyToDo(state, todo) {
    state.todos = state.todos.map(x => (x.id == todo.id ? todo : x));
  },
  deleteToDo(state, todo) {
    state.todos = state.todos.filter(x => todo.id != x.id);
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
    debugger;
    commit("addToDo", toDo);
  },
  modifyToDo({ commit }, toDo) {
    debugger;
    commit("modifyToDo", toDo);
  },
  deleteToDo({ commit }, toDo) {
    debugger;
    commit("deleteToDo", toDo);
  }
};

export default new Vuex.Store({
  plugins: [vuexPersist.plugin],
  state: {
    loginState: {
      loggedIn: false
    },
    todos: []
  },
  mutations,
  actions
});

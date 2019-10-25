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
  checkToDo(state, todo) {
    state.todos = state.todos.map(currentValue => {
      return todo.id == currentValue.id ? todo : currentValue;
    });
  },
  removeToDo(state, todo) {
    state.todos = state.todos.filter(
      currentValue => currentValue.id != todo.id
    );
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
  checkToDo({ commit }, toDo) {
    commit("checkToDo", toDo);
  },
  removeToDo({ commit }, toDo) {
    commit("removeToDo", toDo);
  }
};

export default new Vuex.Store({
  plugins: [vuexPersist.plugin],
  state: {
    loginState: {
      loggedIn: false
    },
    todos: [

    ]
  },
  mutations,
  actions
});
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const mutations = {
  login: function(state) {
    state.loginState = { ...state.loginState, loggedIn: true };
  },
  logout: function(state) {
    state.loginState = { ...state.loginState, loggedIn: false };
  },
  categoriesLoaded(state, categories) {
    state.categories = categories;
    console.log(categories)
  },
  addCategory(state, category) {
    state.categories = [...state.categories, category];
  },
  deleteToDo(state, todo) {
    state.categories = state.categories.map(cat => {
       cat.todos = cat.todos.filter(td => td.id != todo.id);
       return cat;});
  }
};

export const actions = {
  login: function({ commit, dispatch }, payload) {
    const { email, password } = payload;
    return axios.post("/api/login", { email, password }).then(() => {
      commit("login");
      return dispatch("loadTodos");
    });
  },
  logout: function({ commit }) {
    return axios.get("/api/logout").then(() => {
      commit("logout");
    });
  },
  addCategory({ commit }, category) {
    return axios.post('/api/categories', category).then(() => {
      commit('addCategory');
    })
  },
  deleteTodo({ commit }, toDo) {
    return axios.delete(`/api/todos/${toDo.id}`).then(() => {
      commit("deleteToDo", toDo);
    });
  },
  loadCategories({ commit }) {
    console.log("here")
    return axios.get("/api/categories").then(response => {
      console.log(response.data);
      commit("categoriesLoaded", response.data);
    })},
  addToDo( toDo ) {
    return axios.post("/api/todos", toDo).then(() => 
        this.state.dispatch("loadCategories"));
  },
  checkLoggedIn({ commit }) {
    return axios.get("/api/checkLogin").then(() => {
      commit("login");
    });
  }
};

export default new Vuex.Store({
  state: {
    todos: [],
    categories: [],
    loginState: {
      loggedIn: false
    },
    todoIdx: 0
  },
  mutations,
  actions
});

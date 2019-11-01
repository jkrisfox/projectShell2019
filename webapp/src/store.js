/* eslint-disable prettier/prettier */
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const mutations = {
    login: function(state) {
        state.loginState = {...state.loginState, loggedIn: true };
    },
    logout: function(state) {
        state.loginState = {...state.loginState, loggedIn: false };
    },
    addToDo(state, todo) {
        debugger;
        state.todoIdx = state.todoIdx + 1;
        state.todos = [...state.todos, {...todo, done: false, id: state.todoIdx }];
    },
    updateToDo(state, todo) {
        state.todos = state.todos.map(td => (td.id === todo.id ? todo : td));
    },
    deleteToDo(state, todo) {
        state.todos = state.todos.filter(td => td.id !== todo.id);
    },
    todosLoaded(state, todos) {
        state.todos = todos;
    },
    addCategory(state, category) {
        state.catIdx = state.catIdx + 1;
        state.categories = [...state.categories, {...category, id: state.catIdx }];
    },
    updateCategory(state, category) {
        state.categories = state.categories.map(td => (td.id === category.id ? category : td));
    },
    deleteCategory(state, category) {
        state.categories = state.categories.filter(td => td.id !== category.id);
    },
    categoriesLoaded(state, categories) {
        debugger
        state.categories = categories;
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
    addToDo({ commit }, toDo) {
        debugger;
        return axios.post("/api/todos", toDo).then(response => {
            commit("addToDo", {
                title: toDo.title,
                category: toDo.category
            });
        });
    },
    updateTodo({ commit }, toDo) {
        return axios.put(`/api/todos/${toDo.id}`, toDo).then(response => {
            commit("updateToDo", response.data);
        });
    },
    deleteTodo({ commit }, toDo) {
        return axios.delete(`/api/todos/${toDo.id}`).then(() => {
            commit("deleteToDo", toDo);
        });
    },
    loadToDos({ commit }) {
        return axios.get("/api/todos").then(response => {
            commit("todosLoaded", response.data);
        });
    },
    checkLoggedIn({ commit }) {
        return axios.get("/api/checkLogin").then(() => {
            commit("login");
        });
    },
    addCategory({ commit }, Category) {
        debugger;
        return axios.post("/api/categories", Category).then(response => {
            commit("addCategory", response.data);
        });
    },
    updateCategory({ commit }, Category) {
        return axios.put(`/api/categories/${Category.id}`, Category).then(response => {
            commit("updateCategory", response.data);
        });
    },
    deleteCategory({ commit }, Category) {
        return axios.delete(`/api/categories/${Category.id}`).then(() => {
            commit("deleteCategory", Category);
        });
    },
    loadCategories({ commit }) {
        debugger
        return axios.get("/api/categories").then(response => {
            console.log(response.data);
            commit("categoriesLoaded", response.data);
        });
    },
};

export default new Vuex.Store({
    state: {
        todos: [],
        categories: [],
        loginState: {
            loggedIn: false
        },
        todoIdx: 0,
        catIdx: 0
    },
    mutations,
    actions
});
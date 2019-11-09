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
        var categories = state.categories;
        var category = Object();
        category.id = todo.categoryId
        categories.forEach(cat => {
            if (cat.id == todo.categoryId) {
                category.title = cat.title;
            }
        });
        todo.category = category;
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
        debugger
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
        // var options = [];
        // categories.forEach(category => {
        //     var c = Object();
        //     c.id = category.id;
        //     c.title = category.title;
        //     options.push(c);
        // });
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
    addTodo({ commit }, toDo) {
        debugger;
        return axios.post("/api/todos", toDo).then(response => {
            commit("addToDo", response.data);
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
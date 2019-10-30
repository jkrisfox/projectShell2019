import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";
import axios from "axios";

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
    key: "project-template",
    storage: window.localStorage,
});

export const mutations = {
    login: function(state) {
        state.loginState = {...state.loginState, loggedIn: true };
    },
    logout: function(state) {
        state.loginState = {...state.loginState, loggedIn: false };
    },
    addToDo(state, todo) {
        debugger;
        state.todos = [...state.todos, {...todo, done: false, id: state.todos.length + 1 }];
    },
    markToDo(state, todo) {
        debugger;
        for (let i = 0; i < state.todos.length; i++) {
            if (state.todos[i] === todo) {
                state.todos[i].done = !todo.done
            }
        }
    },
    deleteToDo(state, todo) {
        debugger;
        // state.todos[todo.id].done = !todo.done
        for (let i = 0; i < state.todos.length; i++) {
            if (state.todos[i] === todo) {
                state.todos.splice(i, 1)
            }
        }
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
    markToDo({ commit }, toDo) {
        debugger;
        commit("markToDo", toDo);
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
        }
    },
    mutations,
    actions
});
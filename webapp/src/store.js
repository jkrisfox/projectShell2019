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
        todos: []
    },
    mutations: {
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
    },
    actions: {
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
    }
});
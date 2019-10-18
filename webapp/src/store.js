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
        todos: [{
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
            debugger;
            state.todos = [...state.todos, {...todo, done: false, id: state.todos.length + 1 }];
        },
        markToDo(state, todo) {
            debugger;
            // state.todos[todo.id].done = !todo.done
            state.todos[todo.id - 1].done = !state.todos[todo.id - 1].done;
        },
        deleteToDo(state, todo) {
            debugger;
            // state.todos[todo.id].done = !todo.done
            state.todos.splice(todo.id - 1, 1)
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
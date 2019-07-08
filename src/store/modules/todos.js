import axios from 'axios';

const state = {
    todos: []
};

const getters = {
    allTodos: state => state.todos
};
//commit serve para não criar a mutation diretamente
const actions = {
    async fetchTodos({ commit }) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');

        console.log(response.data);
    }
};

const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations
};
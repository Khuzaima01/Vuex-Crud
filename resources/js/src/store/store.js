import { createStore } from "vuex";
import axios from "axios";

export default createStore({
    state: {
        users: []
    },
    getters: {
        allUsers: (state) => state.users,
    },
    mutations: {
        setUsers: (state, users) => (state.users = users),
        newUser: (state, newUser) => (state.users.unshift(newUser)),
    },
    actions: {
        async fetchUsers({ commit }) {
            const response = await axios.get('http://localhost:8000/api/users');
            commit('setUsers', response.data);
        },
        async addUser({ commit, dispatch }, formData) {
            const response = await axios.post('http://localhost:8000/api/create/user', formData)
            // commit('newUser', formData)
            dispatch('fetchUsers')
        }
    },

});

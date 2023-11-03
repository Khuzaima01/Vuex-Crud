import { createStore } from "vuex";
import axios from "axios";

let baseUrl = 'http://localhost:8000';
export default createStore({
    state: {
        users: [],
        message: '',
    },
    getters: {
        allUsers: (state) => state.users,
        messages: (state) => state.message,
    },
    mutations: {
        setUsers: (state, users) => (state.users = users),
        newUser: (state, newUser) => (state.users.unshift(newUser)),
        deleteUser: (state, userId) => {
            state.users = state.users.filter((user) => user.id !== userId)
        }
    },
    actions: {
        async fetchUsers({ commit }) {
            const response = await axios.get(`${baseUrl}/api/users`);
            commit('setUsers', response.data);
        },
        async addUser({ commit, dispatch, state }, formData) {
            const response = await axios.post(`${baseUrl}/api/create/user`, formData)
            commit('newUser', response.data.newUser);
            commit('updateMessage', response.data.message);
            console.log(state)
        },
        async deleteUser({ commit }, userId) {
            const response = await axios.post(`${baseUrl}/api/delete/user/${userId}`)
            commit('deleteUser', userId);
        },
    },

});

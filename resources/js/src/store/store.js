import { createStore } from "vuex";
import axios from "axios";

// base url of the api
let baseUrl = 'http://localhost:8000/api';

export default createStore({
    state: {
        // state for all the users data
        users: [],
        // state for messages
        message: '',
    },
    getters: {
        // func to get all the users data from the state
        allUsers: (state) => state.users,
    },
    mutations: {
        // func to add all the users data in the state
        setUsers: (state, users) => (state.users = users),
        // func to add a new user in the state
        newUser: (state, newUser) => (state.users.unshift(newUser)),
        // func to update a user
        updatedUser: (state, updatedUser) => {
            const index = state.users.findIndex(user => user.id === updatedUser.id);
            if (index !== -1) {
                state.users.splice(index, 1, updatedUser);
            }
        },
        // func to add all the messages coming from api in the state 
        updateMessage: (state, message) => (state.message = message),
        // func to delete a user
        deleteUser: (state, userId) => {
            state.users = state.users.filter((user) => user.id !== userId)
        }
    },
    actions: {
        // action to fetch users
        async fetchUsers({ commit }) {
            const response = await axios.get(`${baseUrl}/users`);
            // commit data to setUser mutation 
            commit('setUsers', response.data);
        },
        // action to add a new user
        async addUser({ commit, state }, formData) {
            const response = await axios.post(`${baseUrl}/create/user`, formData)
            // commit data to newUser mutation 
            commit('newUser', response.data.newUser);
            // commit messages to updateMessage mutation 
            commit('updateMessage', response.data.message);
        },
        // action to add a update a user
        async updateUser({ commit }, formData) {
            console.log(formData)
            const response = await axios.post(`${baseUrl}/update/user/${formData.id}`, formData)
            // commit data to newUser mutation 
            commit('updatedUser', response.data.updatedUser);
            // commit messages to updateMessage mutation 
            commit('updateMessage', response.data.message);
        },
        // action to delete a user
        async deleteUser({ commit }, userId) {
            const response = await axios.post(`${baseUrl}/delete/user/${userId}`)
            // commit data to deleteUser mutation 
            commit('deleteUser', userId);
        },
    },

});

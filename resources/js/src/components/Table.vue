<template>
  <div class=" mt-3 bg-white mx-72">

    <div v-if="message" class=" px-3 py-2 bg-green-400 rounded my-4">
      {{ message }}
    </div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-center text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Id
            </th>
            <th scope="col" class="px-6 py-3">
              Name
            </th>
            <th scope="col" class="px-6 py-3">
              Email
            </th>
            <th scope="col" colspan="2" class="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in allUsers" :key="item.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {{ item.id }}
            </th>
            <td class="px-6 py-4">
              {{ item.name }}
            </td>
            <td class="px-6 py-4">
              {{ item.email }}
            </td>
            <td class="px-6 py-4">
              <p @click="openEditModal"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer">Edit</p>
            </td>


            <!-- Edit Modal -->
            <div v-if="isEditModalOpen" class="fixed inset-0 flex items-center justify-center z-50">
              <div class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

              <div class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                <div class="modal-content py-4 text-left px-6">
                  <div class="flex justify-between items-center pb-3">
                    <p class="text-2xl font-bold">Edit User</p>
                    <button class="modal-close p-2 -mt-2 -mr-2 text-3xl" @click="closeEditModal">×</button>
                  </div>
                  <!-- Your edit form content goes here -->
                  <form>
                    <div class="mb-4">
                      <label for="item" class="block text-gray-600 text-sm font-semibold mb-2">Name:</label>
                      <input type="text" id="item" v-model="name"
                        class="w-full rounded border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    </div>
                    <div class="mb-4">
                      <label for="item" class="block text-gray-600 text-sm font-semibold mb-2">Email:</label>
                      <input type="email" id="item" v-model="email"
                        class="w-full rounded border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    </div>
                    <div class="mb-4">
                      <label for="item" class="block text-gray-600 text-sm font-semibold mb-2">Password:</label>
                      <input type="text" id="item" v-model="password"
                        class="w-full rounded border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    </div>
                    <div class="text-right">
                      <button class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
                        @click="saveChanges">Save</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <td class="px-6 py-4">
              <p @click="handleDelete(item.id)"
                class="font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer">Delete</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';
export default {
  name: 'Table',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      
      isEditModalOpen: false,
      editedItem: "Initial Item", // This should be bound to the item you want to edit
    };
  },
  methods: {
    ...mapActions(['fetchUsers', 'deleteUser']),
    handleDelete(userId) {
      this.deleteUser(userId);
    },

    openEditModal() {
      this.isEditModalOpen = true;
    },
    closeEditModal() {
      this.isEditModalOpen = false;
    },
    saveChanges() {
      this.closeEditModal();
    },
  },
  computed: {
    ...mapState(['message']),
    ...mapGetters(['allUsers']),
  },
  created() {
    this.fetchUsers();
  },


}
</script>

<style></style>
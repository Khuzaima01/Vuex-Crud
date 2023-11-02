<template lang="">
    <div>
        <form @submit="onSubmit" class="bg-white w-fit mx-auto p-5 rounded-lg shadow-lg mt-4">
            <h1 class=" text-3xl py-4">AddUser</h1>
            <div class=" py-3">
                <label for="" class="block">Name</label>
                <input type="text" v-model="name" class="border-2 rounded border-gray-500 w-96 py-2">
            </div>
            <div class=" py-3">
                <label for="" class="block">Email</label>
                <input type="email" v-model="email" class="border-2 rounded border-gray-500 w-96 py-2">
            </div>
            <div class=" py-3">
                <label for="" class="block">Password</label>
                <input type="text" v-model="password" class="border-2 rounded border-gray-500 w-96 py-2">
            </div>
            <div>
                <button type="submit" class="bg-blue-700 w-full mt-3 rounded py-2 text-white">Submit</button>
            </div>
        </form>
    </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            name: '',
            email: '',
            password: '',
        }
    },
    methods: {
        ...mapActions(['addUser']),
        onSubmit(e) {
            e.preventDefault();
            const formData = {
                name: this.name,
                email: this.email,
                password: this.password
            };
            this.addUser(formData);
            this.name = '';
            this.email = '';
            this.password= '';
        }
    },
}
</script>
<style lang="">
    
</style>
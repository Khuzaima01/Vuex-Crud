<template>
    <div>
        <AddUser />
        <TableVue />
    </div>
</template>

<script lang="js">
import TableVue from './src/components/Table.vue';
import AddUser from './src/components/AddUser.vue';

export default {
    components: {
        TableVue,
        AddUser,
    }
}
</script>

<style></style>
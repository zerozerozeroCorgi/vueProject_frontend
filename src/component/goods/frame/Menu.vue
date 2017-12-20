<template>
    <p>
        <router-link :to="{name: 'gd', params: {id: item.id}}" v-for="item in menu" :key="item.id">
            {{item.title}}
            <app-menu v-if="item.subcates && item.subcates.length != 0"></app-menu>
        </router-link>
    </p>
</template>

<script>
    export default {
        name: "app-menu",
        props: ["menu"]
    }
</script>

<style scoped>

</style>
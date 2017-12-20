<template>
    <div>
        <app-brumdsnav></app-brumdsnav>
        <app-top></app-top>
        <app-list></app-list>
    </div>
</template>

<script>
    import BrumdsnavComponent from "./frame/BrumdsNav.vue";
    import TopComponent from "./frame/Top.vue";
    import ListComponent from "./frame/List.vue";

    export default {
        components: {
            appBrumdsnav: BrumdsnavComponent,
            appList: ListComponent,
            appTop: TopComponent
        }
    }
</script>

<style scoped>

</style>
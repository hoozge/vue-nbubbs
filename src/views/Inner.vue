<template>
    <PageHeader/>
    <router-view/>
</template>

<script>
    import PageHeader from "@/components/PageHeader";
    export default {
        name: "Inner",
        components:{
            PageHeader
        }
    }
</script>

<style scoped>

</style>
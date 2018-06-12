<template>
    <Breadcrumb class="breadcrumb">
        <template v-for="(route, index) in $route.matched">
            <BreadcrumbItem :key="index"
                            :to="route.path"
                            v-if="index < $route.matched.length - 1">{{ route.meta.title }}</BreadcrumbItem>
            <BreadcrumbItem :key="index"
                            v-else>{{ route.meta.title }}</BreadcrumbItem>
        </template>
    </Breadcrumb>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
    .breadcrumb {
        padding-bottom: 20px;
    }
</style>

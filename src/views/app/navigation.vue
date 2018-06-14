<template>
    <ul class="menu">
        <navigate v-for="(route, index) in routes" :key="index" :route="route"></navigate>
    </ul>
</template>index

<script>
import Navigate from './components/navigate'

export default {
    components: {
        Navigate
    },
    data () {
        return {
            routes: JSON.parse(JSON.stringify(this.$router.options.routes))
        }
    }
}
</script>

<style lang="scss" scoped>
    .menu {
        padding-top: 56px;
    }
</style>

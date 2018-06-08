<template>
    <ul class="menu">
        <navigate :route="route"></navigate>
    </ul>
</template>

<script>
import Navigate from './components/navigate'

export default {
    components: {
        Navigate
    },
    data () {
        return {
            route: JSON.parse(JSON.stringify(this.$router.options.routes[0]))
        }
    }
}
</script>

<style lang="scss" scoped>
    .menu {
        padding-top: 56px;
    }
</style>

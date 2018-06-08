<template>
    <li class="menu-item" v-if="visible">
        <template v-if="hasChildren">
            <div class="menu-title">{{ route.meta.name }}</div>
        </template>
        <template v-else>
            <router-link class="router"
                         :class="{active: $route.name === route.name}"
                         :to="{name: route.name}">{{ route.meta.name }}</router-link>
        </template>
        <ul class="submenu" v-if="hasChildren">
            <navigate
                class="item"
                v-for="(item, index) in route.children"
                :key="index"
                :route="item">
            </navigate>
        </ul>
    </li>
</template>

<script>
export default {
    name: 'navigate',
    props: {
        route: {
            type: Object
        }
    },
    computed: {
        hasChildren () {
            return typeof this.route.children !== 'undefined'
        },
        visible () {
            return !this.route.meta.hidden || this.route.children
        }
    }
}
</script>

<style lang="scss" scoped>
    li {
        list-style: none;
    }

    .menu-item {
        font-size: 14px;
        line-height: 40px;

        &>.submenu {
            padding-left: 5%;
        }
    }

    .menu-title {
        color: #fff;
    }

    .router {
        display: block;
        padding-left: 10px;
        line-height: 40px;
        height: 40px;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        color: #fff;

        &:hover,
        &.active {
            background-color: #2a2c44;
        }
    }
</style>

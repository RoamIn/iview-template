<template>
    <section class="list-layout">
        <div class="search">
            <slot name="search"></slot>
        </div>

        <div class="handle">
            <slot name="handle"></slot>
        </div>

        <div class="table">
            <slot name="table"></slot>
        </div>

        <div class="pagination">
            <slot name="page">

            </slot>
        </div>
    </section>
</template>

<script>
export default {
    data () {
        return {
        }
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
    .list-layout {
        padding: 24px 32px;
        background-color: #fff;
    }

    .handle {
        margin-bottom: 24px;
        padding: 5px;
        background: #f5f6fa;
    }

    .pagination {
        padding: 24px 0;
    }
</style>

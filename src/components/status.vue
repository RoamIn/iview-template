<template>
    <div class="status-wrapper">
        <span class="status" :class="type"></span>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'Status',
    props: {
        type: {
            type: String,
            default: 'info'
        }
    }
}
</script>

<style lang="scss" scoped>
    .status {
        $size: 8px;

        display: inline-block;
        margin-right: 5px;
        width: $size;
        height: $size;
        border-radius: 50%;

        $status-list: (
            info: #2d8cf0,
            success: #19be6b,
            warning: #ff9900,
            ghost: #bbbec4,
            error: #ed3f14
        );

        @each $status, $color in $status-list {
            &.#{ $status } {
                background-color: rgba($color, .9);
                box-shadow: 0 0 8px $color;
            }
        }
    }
</style>

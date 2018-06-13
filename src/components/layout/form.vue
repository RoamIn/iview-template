<template>
    <section class="form-layout">
        <slot></slot>
    </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
    .form-layout {
        padding: 24px 32px;
        background-color: #fff;
    }

    .form {
        width: 460px;
    }
</style>

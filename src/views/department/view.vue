<template>
    <form-layout>
        <Form class="form" ref="form"
              :model="form.data"
              :label-width="120">

            <FormItem label="Username">
                <p>{{ form.data.username }}</p>
            </FormItem>

            <FormItem label="Nickname">
                <p>{{ form.data.nickname }}</p>
            </FormItem>

            <FormItem label="Email">
                <p>{{ form.data.email }}</p>
            </FormItem>

            <FormItem label="Mobile">
                <p>{{ form.data.mobile }}</p>
            </FormItem>

            <FormItem v-show="form.hasError">
                <Alert type="error">
                    <span slot="desc">{{ form.message }}</span>
                </Alert>
            </FormItem>

            <FormItem>
                <Button type="ghost" :disabled="form.isLoading" @click="back">返回</Button>
            </FormItem>
        </Form>
    </form-layout>
</template>

<script>
import FormLayout from '@/components/layout/form'

const SCHEMA = {
    id: 0,
    username: '',
    nickname: '',
    status: '',
    email: '',
    mobile: ''
}

export default {
    components: {
        FormLayout
    },
    created () {
        this.form.data.id = this.$route.params.id
        this.getInfo(this.form.data.id)
    },
    data () {
        return {
            form: {
                data: JSON.parse(JSON.stringify(SCHEMA)),
                isLoading: false,
                hasError: false,
                message: ''
            }
        }
    },
    methods: {
        getInfo (id) {
            this.$ajax('getUserInfo', {id}).then((res) => {
                Object.assign(this.form.data, res.data)
            }).catch((error) => {
                this.form.hasError = true
                this.form.message = error.message
            })
        },
        back () {
            this.$router.push({name: 'userList'})
        }
    },
    beforeRouteLeave (to, from, next) {
        // 设置下一个路由的 meta
        to.meta.keepAlive = true // 缓存，即不刷新
        next()
    }
}
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

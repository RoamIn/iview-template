<template>
    <form-layout>
        <Form class="form" ref="form"
              :model="form.data"
              :rules="form.rules"
              :label-width="120">

            <FormItem label="Username" prop="username">
                <Input class="form-ele" placeholder="20个字以内" :maxlength="20"
                       v-model="form.data.username"></Input>
            </FormItem>

            <FormItem label="Nickname" prop="nickname">
                <Input class="form-ele" placeholder="20个字以内" :maxlength="20"
                       v-model="form.data.nickname"></Input>
            </FormItem>

            <FormItem label="Email" prop="email">
                <Input class="form-ele" placeholder="example@email.com" :maxlength="50"
                       v-model="form.data.email"></Input>
            </FormItem>

            <FormItem label="Mobile" prop="mobile">
                <Input class="form-ele" :maxlength="11"
                       v-model="form.data.mobile"></Input>
            </FormItem>

            <FormItem v-show="form.hasError">
                <Alert type="error">
                    <span slot="desc">{{ form.message }}</span>
                </Alert>
            </FormItem>

            <FormItem>
                <Button type="primary" :loading="form.isLoading" @click="handleSubmit">保存</Button>
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
    data () {
        return {
            form: {
                data: JSON.parse(JSON.stringify(SCHEMA)),
                rules: {
                    username: [{required: true, message: '必填', trigger: 'blur'}],
                    nickname: [{required: true, message: '必填', trigger: 'blur'}],
                    email: [
                        {required: true, message: '必填', trigger: 'blur'},
                        {type: 'email', message: '格式错误', trigger: 'blur'}
                    ],
                    mobile: [{required: true, message: '必填', trigger: 'blur'}]
                },
                hasSaved: false, // 是否已经保存，用于返回是否刷新
                isLoading: false,
                hasError: false,
                message: ''
            }
        }
    },
    methods: {
        handleSubmit () {
            this.$refs.form.validate((valid) => {
                if (!valid) {
                    return
                }

                this.save()
            })
        },
        save () {
            const data = JSON.parse(JSON.stringify(this.form.data))

            this.form.hasError = false
            this.form.isLoading = true

            this.$ajax('createUser', data, false).then((res) => {
                this.$Message.success({
                    content: '操作成功',
                    onClose: () => {
                        this.form.hasSaved = true
                        this.form.isLoading = false
                        this.back()
                    }
                })
            }).catch((error) => {
                this.form.isLoading = false
                this.form.hasError = true
                this.form.message = error.message
            })
        },
        back () {
            this.$router.push({name: 'applicationList'})
        },
        beforeRouteLeave (to, from, next) {
            // 设置下一个路由的 meta
            to.meta.keepAlive = !this.form.hasSaved // 如果已经保存，则返回刷新；否则返回不刷新
            next()
        }
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

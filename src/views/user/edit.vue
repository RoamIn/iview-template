<template>
    <section>
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

            <FormItem>
                <Button type="primary" :loading="form.isLoading" @click="handleSubmit">保存</Button>
                <Button type="ghost" @click="back">返回</Button>
            </FormItem>
        </Form>
    </section>
</template>

<script>
import ListLayout from '@/components/list-layout'

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
        ListLayout
    },
    created () {
        this.form.data.id = this.$route.params.id
        this.getInfo(this.form.data.id)
    },
    data () {
        return {
            form: {
                data: JSON.parse(JSON.stringify(SCHEMA)),
                rules: {
                    username: [{required: true, message: '必填', trigger: 'blur'}],
                    nickname: [{required: true, message: '必填', trigger: 'blur'}],
                    email: [{required: true, message: '必填', trigger: 'blur'}],
                    mobile: [{required: true, message: '必填', trigger: 'blur'}]
                },
                isLoading: false
            }
        }
    },
    methods: {
        getInfo (id) {
            this.$ajax('getUserInfo', {id}).then((res) => {
                Object.assign(this.form.data, res.data)
            })
        },
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

            this.$ajax('updateUser', data).then((res) => {
                this.$Message(res.data)
            })
        },
        back () {
            this.$router.push({name: 'userList'})
        }

    }
}
</script>

<style lang="scss" scoped>

</style>

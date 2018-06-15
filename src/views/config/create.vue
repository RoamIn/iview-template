<template>
    <form-layout>
        <Form class="form" ref="form"
              :model="form.data"
              :rules="form.rules"
              :label-width="120">

            <FormItem label="关键字" prop="contentKey">
                <Input class="form-ele" placeholder="" v-model.trim="form.data.contentKey"></Input>
            </FormItem>

            <FormItem label="数据类型" prop="contentType">
                <Select class="form-ele" v-model.trim="form.data.contentType">
                    <Option value="json">JSON</Option>
                    <Option value="string">String</Option>
                </Select>
            </FormItem>

            <FormItem label="内容" prop="content">
                <Input class="form-textarea" type="textarea" placeholder="Enter something..."
                       :autosize="{minRows: 5,maxRows: 15}"
                       v-model.trim="form.data.content"></Input>
            </FormItem>

            <FormItem label="描述" prop="desc">
                <Input class="form-textarea" type="textarea" placeholder="简单描述一下..."
                       :autosize="{minRows: 2,maxRows: 5}"
                       v-model.trim="form.data.desc"></Input>
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
    contentKey: '',
    contentType: '',
    content: '',
    status: 'NORMAL',
    desc: ''
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
                    contentKey: [{ required: true, message: '必填', trigger: 'change' }],
                    contentType: [{ required: true, message: '必填', trigger: 'change' }],
                    content: [
                        { required: true, message: '必填', trigger: 'change' },
                        {
                            validator: (rule, value, callback) => {
                                if (this.form.data.contentType === 'json') {
                                    try {
                                        JSON.parse(value)
                                    } catch (error) {
                                        callback(new Error('格式错误'))
                                    }
                                }

                                callback()
                            },
                            trigger: 'change'
                        }
                    ],
                    desc: [{ required: true, message: '必填', trigger: 'change' }]
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
            this.form.hasError = false

            this.$refs.form.validate((valid) => {
                if (!valid) {
                    return
                }

                this.save()
            })
        },
        save () {
            const data = JSON.parse(JSON.stringify(this.form.data))

            this.form.isLoading = true

            this.$ajax('createConfig', data, false).then((res) => {
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
            this.$router.push({name: 'configList'})
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

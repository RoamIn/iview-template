<template>
    <list-layout>
        <Form slot="search" action="javascript:;" ref="searchForm" inline>
            <FormItem>
                <Input placeholder="Name"
                       v-model="params.name"></Input>
            </FormItem>
            <FormItem>
                <Button class="m-l-xs" html-type="submit" type="primary" icon="search"
                        @click="search()">搜索
                </Button>
            </FormItem>
        </Form>

       <div slot="handle">
           <Button class="m-l-xs" html-type="submit" type="primary" icon="plus"
                   @click="create()">创建
           </Button>
       </div>

        <Table slot="table" :columns="table.columns"
               :data="table.data"></Table>

        <Page slot="page" show-elevator
              :page-size="page.size"
              :current="page.current"
              :total="page.total"
              @on-change="search"></Page>
    </list-layout>
</template>

<script>
import ListLayout from '@/components/layout/list'

export default {
    components: {
        ListLayout
    },
    created () {
        this.search()
    },
    data () {
        return {
            params: {
                name: ''
            },
            table: {
                columns: [
                    {
                        width: 100,
                        title: '#',
                        key: 'id'
                    },
                    {
                        title: 'Username',
                        key: 'username'
                    },
                    {
                        title: 'Nickname',
                        key: 'nickname'
                    },
                    {
                        title: 'Email',
                        key: 'email'
                    },
                    {
                        title: 'Mobile',
                        key: 'mobile'
                    },
                    {
                        title: 'Status',
                        key: 'status',
                        align: 'center',
                        render: (h, {row}) => {
                            return h('Status', {
                                props: {
                                    type: row.status === 'NORMAL' ? 'success' : 'error'
                                }
                            }, row.status)
                        }
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        align: 'center',
                        render: (h, {row}) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'success',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.view(row)
                                        }
                                    }
                                }, 'View'),
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.edit(row)
                                        }
                                    }
                                }, 'Edit')
                            ])
                        }
                    }
                ],
                data: []
            },
            page: {
                size: 10,
                total: 0,
                current: 1
            }
        }
    },
    methods: {
        search (page = 1) {
            const data = JSON.parse(JSON.stringify(this.params))

            data.page = page
            data.limit = this.page.size
            this.page.current = page

            this.$ajax('searchUserList', data).then((res) => {
                this.table.data = res.data.list
                this.page.total = parseInt(res.data.totalCount)
            })
        },
        view ({id}) {
            this.$router.push({
                name: 'viewUser',
                params: {
                    id: id
                }
            })
        },
        create () {
            this.$router.push({
                name: 'createUser'
            })
        },
        edit ({id}) {
            this.$router.push({
                name: 'editUser',
                params: {
                    id: id
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .pagination {
        padding: 24px 0;
    }
</style>

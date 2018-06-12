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
import ListLayout from '@/components/list-layout'

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
                        title: '#',
                        key: 'core_user_id'
                    },
                    {
                        title: 'Name',
                        key: 'core_user_name'
                    },
                    {
                        title: 'UserName',
                        key: 'display_name'
                    },
                    {
                        title: 'Email',
                        key: 'email'
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
                this.table.data = res.data.user_list
                this.page.total = parseInt(res.data.totalCount)
            })
        },
        view (item) {
            console.log(JSON.stringify(item, null, 4))
        },
        edit (item) {
            console.log(JSON.stringify(item, null, 4))
        }
    }
}
</script>

<style lang="scss" scoped>
    .pagination {
        padding: 24px 0;
    }
</style>

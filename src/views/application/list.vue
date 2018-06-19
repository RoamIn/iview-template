<template>
    <list-layout>
        <Form slot="search" action="javascript:;" ref="searchForm" inline>
            <FormItem>
                <Cascader class="form-ele" placeholder="Department"
                          clearable
                          filterable
                          :data="departmentCascaderTree" v-model="params.departmentId"></Cascader>
            </FormItem>

            <FormItem>
                <Select class="form-ele" placeholder="User"
                        clearable
                        filterable
                        v-model="params.userId">
                    <Option v-for="user in userList" :key="user.id" :value="user.id">（{{ user.username }}）{{ user.nickname }}</Option>
                </Select>
            </FormItem>

            <FormItem>
                <Select class="form-ele" placeholder="Reason"
                        clearable
                        filterable
                        v-model="params.reasonId">
                    <Option v-for="item in reasonList" :key="item.id" :value="item.id">{{ item.name }}</Option>
                </Select>
            </FormItem>

            <FormItem>
                <Select class="form-ele" placeholder="Status"
                        clearable
                        filterable
                        v-model="params.applicationStatus">
                    <Option v-for="(v, k) in applicationStatusMap" :key="k" :value="k">{{ v }}</Option>
                </Select>
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
import {mapGetters, mapActions} from 'vuex'
import {getArrayLastOne} from '@/utils/data-converter'
import ListLayout from '@/components/layout/list'

export default {
    components: {
        ListLayout
    },
    created () {
        this.search()

        this.getUserList()
        this.getReasonList()
        this.getDepartmentTree()
        this.getApplicationStatusMap()
    },
    data () {
        return {
            params: {
                userId: '',
                departmentId: [],
                reasonId: '',
                applicationStatus: ''
            },
            table: {
                columns: [
                    {
                        width: 100,
                        title: '#',
                        key: 'id'
                    },
                    {
                        title: '申请部门',
                        key: 'departmentId',
                        render: (h, {row}) => {
                            return h('div', this.getDepartmentFullName(row.departmentId))
                        }
                    },
                    {
                        title: '申请人',
                        key: 'userId',
                        render: (h, {row}) => {
                            return h('div', this.getUserName(row.userId))
                        }
                    },
                    {
                        title: '费用事由',
                        key: 'reasonId',
                        render: (h, {row}) => {
                            return h('div', this.getReasonName(row.reasonId))
                        }
                    },
                    {
                        title: '状态',
                        key: 'status',
                        align: 'center',
                        render: (h, {row}) => {
                            return h('Status', {
                                props: {
                                    type: row.status === 'NORMAL' ? 'success' : 'error'
                                }
                            }, this.applicationStatusMap[row.status])
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
                                }, 'View')
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
    computed: {
        ...mapGetters([
            'userList',
            'userMap',
            'reasonList',
            'reasonMap',
            'departmentCascaderTree',
            'departmentMap',
            'applicationStatusMap'
        ])
    },
    methods: {
        ...mapActions([
            'getUserList',
            'getReasonList',
            'getDepartmentTree',
            'getApplicationStatusMap'
        ]),
        search (page = 1) {
            const data = JSON.parse(JSON.stringify(this.params))

            data.page = page
            data.limit = this.page.size
            data.departmentId = getArrayLastOne(data.departmentId)

            this.page.current = page

            this.$ajax('searchApplicationList', data).then((res) => {
                this.table.data = res.data.list
                this.page.total = parseInt(res.data.totalCount)
            })
        },
        view ({id}) {
            this.$router.push({
                name: 'viewApplication',
                params: {
                    id: id
                }
            })
        },
        create () {
            this.$router.push({
                name: 'createApplication'
            })
        },
        edit ({id}) {
            this.$router.push({
                name: 'editApplication',
                params: {
                    id: id
                }
            })
        },
        getUserName (userId) {
            const user = this.userMap[userId]

            return typeof user === 'undefined' ? '' : user.nickname
        },
        getReasonName (reasonId) {
            const reason = this.reasonMap[reasonId]

            return typeof reason === 'undefined' ? '' : reason.name
        },
        getDepartmentFullName (departmentId) {
            const department = this.departmentMap[departmentId]

            return typeof department === 'undefined' ? '' : department.path.join('/')
        }
    }
}
</script>

<style lang="scss" scoped>

</style>

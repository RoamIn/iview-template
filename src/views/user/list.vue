<template>
    <div>
        <Form ref="searchForm" class="pull-right" inline>
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

        <Table :columns="table.columns"
               :data="table.data"></Table>

        <Page :total="100" show-elevator></Page>
    </div>
</template>

<script>
export default {
    created () {
        this.fetchData()
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
                    }
                ],
                data: []
            }
        }
    },
    methods: {
        fetchData (data) {
            this.$ajax('searchUserList').then((res) => {
                this.table.data = res.data.user_list
            })
        }
    }
}
</script>

<style lang="scss" scoped>

</style>

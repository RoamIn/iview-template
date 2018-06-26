<template>
    <Row>
        <Col span="12" offset="6">
            {{ data }}
        </Col>
        <Col span="12" offset="6">
            <BetterAutoComplete :data="list"
                                :show-keys="showKeys"
                                v-model="data"></BetterAutoComplete>
        </Col>
    </Row>
</template>

<script>
import BetterAutoComplete from '@/components/better-auto-complete'

export default {
    components: {
        BetterAutoComplete
    },
    data () {
        return {
            list: [
                { id: 1, name: '炸酱面' },
                { id: 2, name: '红烧牛肉面' },
                { id: 3, name: '过桥米线' },
                { id: 4, name: '重庆小面' },
                { id: 5, name: '热干面' },
                { id: 6, name: '臊子面' },
                { id: 7, name: '担担面' }
            ],
            showKeys: ['id', 'name'],
            matchKeys: ['id', 'name'],
            keys: ['id', 'name'],
            data: 6
        }
    }
}
</script>

<style lang="scss" scoped>

</style>

<template>
    <div class="auto-complete">
        <Input :icon="icon"
               @on-focus="focusHandle"
               @on-blur="blurHandle"
               v-model.trim="key"></Input>
        <transition name="fade">
            <div class="ivu-select-dropdown"
                 v-show="dropVisible">
                <ul class="ivu-dropdown-menu">
                    <li class="ivu-dropdown-item" v-for="(item, i) in matchedList"
                        :key="i" @click="select(item)">
                        <template v-for="key in showKeys">{{ item[key] }}</template>
                    </li>

                    <li class="ivu-dropdown-item empty" v-show="matchedList.length === 0">暂无数据</li>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script>
import Drop from 'iview/src/components/select/dropdown'

export default {
    components: {
        Drop
    },
    props: {
        data: {
            type: Array,
            default () {
                return [
                    '驴打滚',
                    '炸酱面',
                    '豆汁儿',
                    '冰糖葫芦',
                    '北京烤鸭'
                ]
            }
        },
        showKeys: {
            type: Array,
            default () {
                return []
            }
        },
        matchedKeys: {
            type: Array,
            default () {
                return []
            }
        },
        keys: {
            type: Array,
            default () {
                return []
            }
        },
        icon: {
            type: String,
            default: ''
        },
        value: {
            type: [String, Number],
            default: ''
        }
    },
    data () {
        return {
            currentValue: this.value,
            key: '',
            dropVisible: false
        }
    },
    computed: {
        matchedList () {
            return this.data.filter((item) => {
                return item[this.showKeys[1]].indexOf(this.key) !== -1
            })
        }
    },
    methods: {
        select (item) {
            console.log(item.name)
            this.setCurrentValue(item)
            this.key = item.name
        },
        setCurrentValue (item) {
            this.currentValue = item.id
            this.dropVisible = false
            console.log(item)
            this.$emit('input', this.currentValue)
        },
        focusHandle () {
            this.dropVisible = true
        },
        blurHandle () {
            // this.dropVisible = false
        }
    },
    watch: {
        value (val) {
            if (this.currentValue !== val) {
                this.setCurrentValue(val)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .ivu-select-dropdown {
        width: 100%;
    }

    .ivu-dropdown-item.empty {
        cursor: default;
        color: #c3cbd6
    }
</style>

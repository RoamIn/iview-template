<template>
    <div>
        <Input :icon="icon"
               @on-focus="focusHandle"
               @on-blur="blurHandle"
               v-model.trim="key"></Input>
        <transition name="transition-drop">
            <div class="ivu-select-dropdown"
                 v-show="dropVisible">
                <ul class="ivu-dropdown-menu">
                    <li class="ivu-dropdown-item" v-for="(item, i) in filteredList"
                        :key="i" @click="select(item)">
                        <template v-for="key in showKeys">{{ item[key] }}</template>
                    </li>

                    <li class="ivu-dropdown-item empty" v-show="filteredList.length === 0">暂无数据</li>
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
        filteredList () {
            return this.data.filter((item) => {
                return item[this.showKeys[1]].indexOf(this.key) !== -1
            })
        }
    },
    methods: {
        select (item) {
            console.log(item.name)
            this.setCurrentValue(item.name)
        },
        setCurrentValue (val) {
            if (this.currentValue === val) {
                return
            }

            this.currentValue = val
            this.dropVisible = false
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
            this.setCurrentValue(val)
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

    .transition-drop-appear,.transition-drop-enter-active {
        animation-duration: .3s;
        animation-fill-mode: both;
        animation-play-state: paused
    }

    .transition-drop-leave-active {
        animation-duration: .3s;
        animation-fill-mode: both;
        animation-play-state: paused
    }

    .transition-drop-appear,.transition-drop-enter-active {
        animation-name: ivuTransitionDropIn;
        animation-play-state: running
    }

    .transition-drop-leave-active {
        animation-name: ivuTransitionDropOut;
        animation-play-state: running
    }

    .transition-drop-appear,.transition-drop-enter-active {
        opacity: 0;
        animation-timing-function: ease-in-out
    }

    .transition-drop-leave-active {
        animation-timing-function: ease-in-out
    }

    @keyframes ivuTransitionDropIn {
        0% {
            opacity: 0;
            transform: scaleY(.8)
        }

        100% {
            opacity: 1;
            transform: scaleY(1)
        }
    }

    @keyframes ivuTransitionDropOut {
        0% {
            opacity: 1;
            transform: scaleY(1)
        }

        100% {
            opacity: 0;
            transform: scaleY(.8)
        }
    }
</style>

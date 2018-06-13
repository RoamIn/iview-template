<template>
    <div id="root">
        <aside :class="{'collapsed': isCollapsed}">
            <Navigation></Navigation>
        </aside>

        <main>
            <header>
                <Icon class="icon-menu"
                      size="26"
                      type="android-menu"
                      :class="{ 'rotate': isCollapsed }"
                      @click="toggleCollapse"></Icon>

                <div class="right">
                    <span class="item help">
                        <Tooltip content="Here is the prompt text">
                            <Icon type="ios-help-outline" size="20"></Icon>
                        </Tooltip>
                    </span>
                    <span class="item notice">
                        <Poptip title="Title" content="content" placement="bottom-end">
                            <Badge count="6" overflow-count="10">
                                <Icon type="ios-bell-outline" size="20"></Icon>
                            </Badge>
                        </Poptip>
                    </span>

                    <Dropdown trigger="click">
                            <span class="item user">
                                <span class="avatar"></span>
                                <span class="user-name">Vinci</span>
                            </span>

                        <DropdownMenu slot="list">
                            <DropdownItem>
                                <Icon type="ios-person-outline"></Icon>&emsp;个人信息
                            </DropdownItem>
                            <DropdownItem divided>
                                <a href="javascript:void(0)" @click="logout">
                                    <Icon type="log-out"></Icon>&emsp;退出
                                </a>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </header>

            <div class="content">
                <breadcrumb-nav></breadcrumb-nav>

                <keep-alive>
                    <router-view v-if="$route.meta.keepAlive">
                        <!-- 这里是会被缓存的视图组件 -->
                    </router-view>
                </keep-alive>

                <router-view v-if="!$route.meta.keepAlive">
                    <!-- 这里是不被缓存的视图组件 -->
                </router-view>
            </div>

            <footer>
                <div class="copyright">Copyright &copy; 2018</div>
            </footer>
        </main>
    </div>
</template>

<script>
import authority from '@/utils/authority'

import BreadcrumbNav from './breadcrumb-nav'
import Navigation from './navigation'

export default {
    components: {
        Navigation,
        BreadcrumbNav
    },
    data () {
        return {
            isCollapsed: false
        }
    },
    computed: {},
    methods: {
        toggleCollapse () {
            this.isCollapsed = ~this.isCollapsed
        },
        logout () {
            authority.logout()
            this.$router.go({
                name: 'login'
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "~scss/_mixins";

    #root {
        display: flex;
        min-height: 100vh;
        flex: auto;
        flex-direction: row;

        background-color: #f5f6fa;
    }

    aside {
        flex: 0 0 256px;
        width: 256px;
        background-color: #323656;
        user-select: none;
        transition: all .2s;

        &.collapsed {
            flex: 0 0 80px;
            width: 80px;
        }
    }

    main {
        overflow-x: hidden;
        display: flex;
        min-height: 100vh;
        flex: auto;
        flex-direction: column;
    }

    header {
        padding-right: 12px;
        height: 64px;
        line-height: 64px;
        background: #fff;

        .icon-menu {
            padding: 0 24px;
            line-height: 64px;
            cursor: pointer;
            color: #bfc5d1;

            &.rotate {
                transform: rotate(90deg);
            }
        }

        .right {
            float: right;
            display: flex;
            flex-flow: row nowrap;
            align-items: center;

            .item {
                display: inline-flex;
                padding: 0 16px;
                flex-flow: row nowrap;
                align-items: center;
                cursor: pointer;

                &:hover {
                    background-color: #f6f7fa;
                }
            }
        }

        .avatar {
            display: inline-block;
            margin-right: 8px;
            @include circle(24px);
            background-color: #4c84ff;
        }
    }

    .content {
        margin: 24px 24px 0px;
        height: 100%;
    }

    footer {
        padding: 0 16px;
        margin: 48px 0 24px;
        text-align: center;
        flex: 0 0 auto;
        font-size: 14px;
        color: rgba(0, 0, 0, .45);
    }
</style>

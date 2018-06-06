<template>
  <Layout class="layout">
    <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
      <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
        <MenuItem name="1-1">
          <router-link :to="{ name: 'dashboard' }">
            <Icon type="ios-navigate"></Icon>
            <span>Dashboard</span>
          </router-link>
        </MenuItem>
        <MenuItem name="1-2">
          <router-link :to="{ name: 'user' }">
            <Icon type="peoples"></Icon>
            <span>User</span>
          </router-link>
        </MenuItem>
        <MenuItem name="1-3">
          <router-link :to="{ name: 'echart' }">
            <Icon type="settings"></Icon>
            <span>Echart</span>
          </router-link>
        </MenuItem>
      </Menu>
    </Sider>
    <Layout>
      <Header :style="{padding: 0}" class="layout-header-bar">
        <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '20px 20px 0'}" type="navicon-round"
              size="24"></Icon>
      </Header>
      <Content :style="{ margin: '20px', minHeight: '260px'}">
        <router-view></router-view>
      </Content>
    </Layout>
  </Layout>
</template>

<script>
  export default {
    data() {
      return {
        isCollapsed: false
      }
    },
    computed: {
      rotateIcon() {
        return [
          'menu-icon',
          this.isCollapsed ? 'rotate-icon' : ''
        ]
      },
      menuitemClasses() {
        return [
          'menu-item',
          this.isCollapsed ? 'collapsed-menu' : ''
        ]
      }
    },
    methods: {
      collapsedSider() {
        this.$refs.side1.toggleCollapse()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .layout {
    overflow: hidden;
    position: relative;
    min-height: 100vh;
    background: #f5f7f9;
  }

  .layout-header-bar {
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
  }

  .layout-logo-left {
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
  }

  .menu-icon {
    transition: all .3s;
  }

  .rotate-icon {
    transform: rotate(-90deg);
  }

  .menu-item {
    span {
      display: inline-block;
      overflow: hidden;
      width: 69px;
      text-overflow: ellipsis;
      white-space: nowrap;
      vertical-align: bottom;
      transition: width .2s ease .2s;
    }

    i {
      transform: translateX(0px);
      transition: font-size .2s ease, transform .2s ease;
      vertical-align: middle;
      font-size: 16px;
    }
  }

  .collapsed-menu {
    span {
      width: 0px;
      transition: width .2s ease;
    }

    i {
      transform: translateX(5px);
      transition: font-size .2s ease .2s, transform .2s ease .2s;
      vertical-align: middle;
      font-size: 22px;
    }
  }
</style>

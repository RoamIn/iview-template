import Vue from 'vue'
import Vuex from 'vuex'

// common
import state from './state'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

// modules
import config from './modules/config'
import user from './modules/user'
import department from './modules/department'

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    modules: {
        config,
        user,
        department
    }
})

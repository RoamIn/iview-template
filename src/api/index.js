// Common
import common from './common'

// module
import user from './user'
import config from './config'
import department from './department'
import application from './application'

export default {
    baseURL: '/index.php',
    ...common,
    ...user,
    ...config,
    ...department,
    ...application
}

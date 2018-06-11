module.exports = {
    '/index.php/public/lebbay/login': {
        'method': 'POST',
        'res': () => {
            return {
                'code': 'OK',
                'data': {
                    'token': 'abcdefg',
                    'expire': 60 * 60,
                    'display_name': '庖丁',
                    'core_user_id': 1,
                    'core_user_name': 'dpao',
                    'core_user_org': 'CIA'
                }
            }
        }
    }
}

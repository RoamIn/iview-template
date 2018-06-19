module.exports = {
    '/index.php/applicationController/query': {
        'method': 'POST',
        'res': () => {
            return {
                'code': 'OK',
                'data': {
                    'list': [
                        {
                            'id': 1,
                            'departmentId': 74,
                            'userId': 2,
                            'reasonId': 45,
                            'status': 'APPROVED'
                        }
                    ],
                    'totalCount': '22'
                }
            }
        }
    },
    '/index.php/applicationController/getInfo': {
        'method': 'GET',
        'res': () => {
            return {
                'code': 'OK',
                'data': {
                    'id': '1',
                    'username': 'lwwu',
                    'nickname': '吴廉伟',
                    'status': 'NORMAL',
                    'email': 'lwwu@email.com',
                    'mobile': '18868889888'
                }
            }
        }
    },
    '/index.php/applicationController/create': {
        'method': 'POST',
        'res': () => {
            return {
                'code': 'OK',
                'data': 'Create Success'
            }
        }
    },
    '/index.php/applicationController/update': {
        'method': 'POST',
        'res': () => {
            return {
                'code': 'Failed',
                'data': 'Failed to load response data.'
            }
        }
    }
}

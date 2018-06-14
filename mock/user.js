module.exports = {
    '/index.php/core/CoreUserController/searchUserList': {
        'method': 'POST',
        'res': () => {
            return {
                "code": "OK",
                "data": {
                    "list": [
                        {
                            "id": "1",
                            "username": "lwwu",
                            "nickname": "吴廉伟",
                            "status": "NORMAL",
                            "email": "lwwu@email.com",
                            "mobile": '18868889888'
                        },
                        {
                            "id": "2",
                            "username": "yydai",
                            "nickname": "戴媛媛",
                            "status": "NORMAL",
                            "email": "yydai@email.com",
                            "mobile": '18868889888'
                        },
                        {
                            "id": "3",
                            "username": "xlshi",
                            "nickname": "石晓磊",
                            "status": "FROZEN",
                            "email": "xlshi@email.com",
                            "mobile": '18868889888'
                        },
                        {
                            "id": "4",
                            "username": "yyli",
                            "nickname": "李园园",
                            "status": "NORMAL",
                            "email": "yyli@email.com",
                            "mobile": '18868889888'
                        },
                        {
                            "id": "5",
                            "username": "hxyang",
                            "nickname": "杨红霞",
                            "status": "NORMAL",
                            "email": "hxyang@email.com",
                            "mobile": '18868889888'
                        },
                        {
                            "id": "6",
                            "username": "lhuang1",
                            "nickname": "黄琳",
                            "status": "FROZEN",
                            "email": "lhuang1@email.com",
                            "mobile": '18868889888'
                        },
                        {
                            "id": "7",
                            "username": "zlwang",
                            "nickname": "王中丽",
                            "status": "NORMAL",
                            "email": "zlwang@email.com",
                            "mobile": '18868889888'
                        },
                        {
                            "id": "8",
                            "username": "xycao",
                            "nickname": "曹小燕",
                            "status": "NORMAL",
                            "email": "xycao@email.com",
                            "mobile": '18868889888'
                        },
                        {
                            "id": "9",
                            "username": "mlxu",
                            "nickname": "许梦琳",
                            "status": "NORMAL",
                            "email": "mlxu@email.com",
                            "mobile": '18868889888'
                        },
                        {
                            "id": "10",
                            "username": "ghwu",
                            "nickname": "吴国慧",
                            "status": "NORMAL",
                            "email": "ghwu@email.com",
                            "mobile": '18868889888'
                        }
                    ],
                    "totalCount": "22"
                }
            }
        }
    },
    '/index.php/core/CoreUserController/getUserInfo': {
        'method': 'GET',
        'res': () => {
            return {
                "code": "OK",
                "data": {
                    "id": "1",
                    "username": "lwwu",
                    "nickname": "吴廉伟",
                    "status": "NORMAL",
                    "email": "lwwu@email.com",
                    "mobile": '18868889888'
                }
            }
        }
    },
    '/index.php/core/CoreUserController/createUser': {
        'method': 'POST',
        'res': () => {
            return {
                "code": "OK",
                "data": "Create Success"
            }
        }
    },
    '/index.php/core/CoreUserController/updateUser': {
        'method': 'POST',
        'res': () => {
            return {
                "code": "Failed",
                "data": "Failed to load response data."
            }
        }
    }
}

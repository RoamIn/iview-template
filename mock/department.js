module.exports = {
    '/index.php/core/CoreDepartmentController/searchDepartmentList': {
        'method': 'POST',
        'res': () => {
            return {
                "code": "OK",
                "data": [
                    {
                        "id": 1,
                        "name": "YYS",
                        "superId": "0",
                        "children": [
                            {
                                "id": "2",
                                "name": "R",
                                "superId": "1",
                                "children": [
                                    {
                                        "id": "3",
                                        "name": "山兔",
                                        "superId": "2",
                                        "children": []
                                    },
                                    {
                                        "id": "4",
                                        "name": "椒图",
                                        "superId": "2",
                                        "children": []
                                    },
                                    {
                                        "id": "5",
                                        "name": "座敷童子",
                                        "superId": "2",
                                        "children": []
                                    },
                                    {
                                        "id": "6",
                                        "name": "蛋",
                                        "superId": "2",
                                        "children": [
                                            {
                                                "id": "8",
                                                "name": "红蛋",
                                                "superId": "6",
                                                "children": []
                                            },
                                            {
                                                "id": "9",
                                                "name": "白蛋",
                                                "superId": "6",
                                                "children": []
                                            },
                                            {
                                                "id": "14",
                                                "name": "蓝蛋",
                                                "superId": "6",
                                                "children": []
                                            },
                                            {
                                                "id": "28",
                                                "name": "蓝蛋",
                                                "superId": "6",
                                                "children": []
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "13",
                                "name": "SR",
                                "superId": "1",
                                "children": [
                                    {
                                        "id": "81",
                                        "name": "姑获鸟",
                                        "superId": "75",
                                        "children": []
                                    },
                                    {
                                        "id": "82",
                                        "name": "犬神",
                                        "superId": "75",
                                        "children": []
                                    },
                                    {
                                        "id": "83",
                                        "name": " 吸血姬",
                                        "superId": "75",
                                        "children": []
                                    },
                                    {
                                        "id": "84",
                                        "name": "雪女",
                                        "superId": "75",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "id": "15",
                                "name": "SSR",
                                "superId": "1",
                                "children": [
                                    {
                                        "id": "65",
                                        "name": "大天狗",
                                        "superId": "15",
                                        "children": []
                                    },
                                    {
                                        "id": "66",
                                        "name": "茨木童子",
                                        "superId": "15",
                                        "children": []
                                    },
                                    {
                                        "id": "67",
                                        "name": "彼岸花",
                                        "superId": "15",
                                        "children": []
                                    },
                                    {
                                        "id": "68",
                                        "name": "雪童子",
                                        "superId": "15",
                                        "children": []
                                    },
                                    {
                                        "id": "69",
                                        "name": "小鹿男",
                                        "superId": "15",
                                        "children": []
                                    },
                                    {
                                        "id": "70",
                                        "name": "青行灯",
                                        "superId": "15",
                                        "children": []
                                    },
                                    {
                                        "id": "71",
                                        "name": "辉夜姬",
                                        "superId": "15",
                                        "children": []
                                    },
                                    {
                                        "id": "72",
                                        "name": "妖刀姬",
                                        "superId": "15",
                                        "children": []
                                    },
                                    {
                                        "id": "73",
                                        "name": "荒",
                                        "superId": "15",
                                        "children": []
                                    },
                                    {
                                        "id": "74",
                                        "name": "玉藻前",
                                        "superId": "15",
                                        "children": []
                                    },
                                    {
                                        "id": "76",
                                        "name": "酒吞童子",
                                        "superId": "15",
                                        "children": []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    },
    '/index.php/core/CoreDepartmentController/getDepartmentInfo': {
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
    '/index.php/core/CoreDepartmentController/createDepartment': {
        'method': 'POST',
        'res': () => {
            return {
                "code": "OK",
                "data": "Create Success"
            }
        }
    },
    '/index.php/core/CoreDepartmentController/updateDepartment': {
        'method': 'POST',
        'res': () => {
            return {
                "code": "Failed",
                "data": "Failed to load response data."
            }
        }
    }
}

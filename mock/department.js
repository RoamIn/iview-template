module.exports = {
    '/index.php/departmentController/getDepartmentTree': {
        'method': 'GET',
        'res': () => {
            return {
                'code': 'OK',
                'data': [
                    {
                        'id': 1,
                        'name': 'X',
                        'superId': '0',
                        'departments': [
                            {
                                'id': '2',
                                'name': 'CIA',
                                'superId': '1',
                                'departments': [
                                    {
                                        'id': '3',
                                        'name': '总经办',
                                        'superId': '2',
                                        'departments': []
                                    },
                                    {
                                        'id': '4',
                                        'name': '鞋子采购',
                                        'superId': '2',
                                        'departments': []
                                    },
                                    {
                                        'id': '5',
                                        'name': '客服',
                                        'superId': '2',
                                        'departments': []
                                    }
                                ]
                            },
                            {
                                'id': '15',
                                'name': 'RDC',
                                'superId': '1',
                                'departments': [
                                    {
                                        'id': '65',
                                        'name': '技术组',
                                        'superId': '15',
                                        'departments': []
                                    },
                                    {
                                        'id': '66',
                                        'name': '网站产品组',
                                        'superId': '15',
                                        'departments': []
                                    },
                                    {
                                        'id': '74',
                                        'name': '研发部',
                                        'superId': '15',
                                        'departments': []
                                    },
                                    {
                                        'id': '75',
                                        'name': '生产部',
                                        'superId': '15',
                                        'departments': [
                                            {
                                                'id': '81',
                                                'name': '开发报价',
                                                'superId': '75',
                                                'departments': []
                                            },
                                            {
                                                'id': '82',
                                                'name': 'AD跟单',
                                                'superId': '75',
                                                'departments': []
                                            }
                                        ]
                                    },
                                    {
                                        'id': '76',
                                        'name': '采购部',
                                        'superId': '15',
                                        'departments': []
                                    },
                                    {
                                        'id': '77',
                                        'name': '贸易部',
                                        'superId': '15',
                                        'departments': []
                                    },
                                    {
                                        'id': '78',
                                        'name': '摄影',
                                        'superId': '15',
                                        'departments': []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    }
}

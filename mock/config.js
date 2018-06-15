module.exports = {
    '/index.php/configController/query': {
        'method': 'GET',
        'res': () => {
            return {
                'code': 'OK',
                'data': {
                    'list': [{
                        'id': '1',
                        'contentKey': 'currency',
                        'contentType': 'json',
                        'desc': '\u8d27\u5e01\u7c7b\u578b',
                        'content': [{
                            'currencyCode': 'EUR',
                            'currencyName': '\u6b27\u5143',
                            'sign': '\u20ac'
                        }, {
                            'currencyCode': 'HKD',
                            'sign': '\uff04',
                            'currencyName': '\u6e2f\u5e01'
                        }, {
                            'currencyCode': 'GBP',
                            'sign': '\u00a3',
                            'currencyName': '\u82f1\u9551'
                        }, {
                            'currencyCode': 'RMB',
                            'sign': '\uffe5',
                            'currencyName': '\u4eba\u6c11\u5e01'
                        }, {
                            'currencyCode': 'USD',
                            'sign': '$',
                            'currencyName': '\u7f8e\u5143'
                        }],
                        'status': 'NORMAL',
                        'createUser': '11',
                        'createTime': '2018-04-23 16:42:37',
                        'updateTime': '2018-06-06 09:43:30'
                    }, {
                        'id': '13',
                        'contentKey': 'account_type',
                        'contentType': 'json',
                        'desc': '\u8d26\u53f7\u7c7b\u578b',
                        'content': {
                            'domestic': '\u56fd\u5185\u94f6\u884c',
                            'out': '\u56fd\u5916\u94f6\u884c',
                            'online': '\u5728\u7ebf\u652f\u4ed8'
                        },
                        'status': 'NORMAL',
                        'createUser': '1',
                        'createTime': '2018-05-03 18:00:19',
                        'updateTime': '2018-05-24 11:53:58'
                    }, {
                        'id': '14',
                        'contentKey': 'payment_type',
                        'contentType': 'json',
                        'desc': '\u6253\u6b3e\u65b9\u5f0f',
                        'content': ['\u7535\u6c47', '\u9884\u4ed8\u6b3e', '\u5907\u7528\u91d1'],
                        'status': 'NORMAL',
                        'createUser': '1',
                        'createTime': '2018-05-03 18:01:41',
                        'updateTime': '2018-05-26 18:03:14'
                    }, {
                        'id': '15',
                        'contentKey': 'invoice_type',
                        'contentType': 'json',
                        'desc': '\u53d1\u7968\u7c7b\u578b',
                        'content': ['\u666e\u7968', '\u589e\u7968', '\u623f\u79df\u6536\u636e', '\u501f\u6b3e\u5355', '\u5f62\u5f0f\u53d1\u7968'],
                        'status': 'NORMAL',
                        'createUser': '1',
                        'createTime': '2018-05-03 18:02:47',
                        'updateTime': '2018-06-11 17:13:21'
                    }, {
                        'id': '17',
                        'contentKey': 'application_status',
                        'contentType': 'json',
                        'desc': '\u4ed8\u6b3e\u72b6\u6001',
                        'content': {
                            'INIT': '\u5f85\u5ba1\u6279',
                            'APPROVED': '\u5f85\u7ecf\u529e',
                            'HANDLED': '\u5f85\u4ed8\u6b3e',
                            'PAYED': '\u5f85\u51b2\u8d26',
                            'CHARGE_OFFED': '\u5f85\u786e\u8ba4\u53d1\u7968',
                            'CHECKED': '\u53d1\u7968\u5df2\u786e\u8ba4',
                            'FINISH': '\u5df2\u5b8c\u7ed3',
                            'CANCELED': '\u5df2\u64a4\u56de',
                            'DELETED': '\u5df2\u5220\u9664',
                            'REJECTED': '\u5f85\u4fee\u6539',
                            'ABOLISH': '\u5df2\u4f5c\u5e9f'
                        },
                        'status': 'NORMAL',
                        'createUser': '1',
                        'createTime': '2018-05-07 10:25:36',
                        'updateTime': '2018-06-01 17:50:51'
                    }],
                    'totalPages': 1,
                    'totalCount': '9'
                }
            }
        }
    },
    '/index.php/configController/getInfo': {
        'method': 'GET',
        'res': () => {
            return {
                'code': 'OK',
                'data': {
                    'id': '17',
                    'contentKey': 'application_status',
                    'contentType': 'json',
                    'desc': '\u4ed8\u6b3e\u72b6\u6001',
                    'content': {
                        'INIT': '\u5f85\u5ba1\u6279',
                        'APPROVED': '\u5f85\u7ecf\u529e',
                        'HANDLED': '\u5f85\u4ed8\u6b3e',
                        'PAYED': '\u5f85\u51b2\u8d26',
                        'CHARGE_OFFED': '\u5f85\u786e\u8ba4\u53d1\u7968',
                        'CHECKED': '\u53d1\u7968\u5df2\u786e\u8ba4',
                        'FINISH': '\u5df2\u5b8c\u7ed3',
                        'CANCELED': '\u5df2\u64a4\u56de',
                        'DELETED': '\u5df2\u5220\u9664',
                        'REJECTED': '\u5f85\u4fee\u6539',
                        'ABOLISH': '\u5df2\u4f5c\u5e9f'
                    },
                    'status': 'NORMAL',
                    'createUser': '1',
                    'createTime': '2018-05-07 10:25:36',
                    'updateTime': '2018-06-01 17:50:51'
                }
            }
        }
    },
    '/index.php/configController/create': {
        'method': 'POST',
        'res': () => {
            return {
                'code': 'OK',
                'data': 'Create Success'
            }
        }
    },
    '/index.php/configController/update': {
        'method': 'POST',
        'res': () => {
            return {
                'code': 'Failed',
                'data': 'Failed to load response data.'
            }
        }
    },
    '/index.php/configController/getApplicationStatus': {
        'method': 'GET',
        'res': () => {
            return {
                'code': 'OK',
                'data': {
                    'INIT': '\u5f85\u5ba1\u6279',
                    'APPROVED': '\u5f85\u7ecf\u529e',
                    'HANDLED': '\u5f85\u4ed8\u6b3e',
                    'PAYED': '\u5f85\u51b2\u8d26',
                    'CHARGE_OFFED': '\u5f85\u786e\u8ba4\u53d1\u7968',
                    'CHECKED': '\u53d1\u7968\u5df2\u786e\u8ba4',
                    'FINISH': '\u5df2\u5b8c\u7ed3',
                    'CANCELED': '\u5df2\u64a4\u56de',
                    'DELETED': '\u5df2\u5220\u9664',
                    'REJECTED': '\u5f85\u4fee\u6539',
                    'ABOLISH': '\u5df2\u4f5c\u5e9f'
                }
            }
        }
    },
    '/index.php/configController/getReasonList': {
        'method': 'GET',
        'res': () => {
            return {
                'code': 'OK',
                'data': [{
                    'id': '43',
                    'name': '\u5feb\u9012\u8d39',
                    'status': 'NORMAL',
                    'createUser': '7',
                    'createTime': '2018-06-05 16:20:24',
                    'updateTime': '2018-06-05 16:20:24'
                }, {
                    'id': '44',
                    'name': '\u8017\u6750\u8d39',
                    'status': 'NORMAL',
                    'createUser': '7',
                    'createTime': '2018-06-05 16:20:29',
                    'updateTime': '2018-06-05 16:20:29'
                }, {
                    'id': '45',
                    'name': '\u5dee\u65c5\u8d39',
                    'status': 'NORMAL',
                    'createUser': '7',
                    'createTime': '2018-06-05 16:20:34',
                    'updateTime': '2018-06-05 16:20:34'
                }, {
                    'id': '46',
                    'name': '\u793e\u4fdd\u516c\u79ef\u91d1',
                    'status': 'NORMAL',
                    'createUser': '7',
                    'createTime': '2018-06-05 16:20:38',
                    'updateTime': '2018-06-05 16:20:38'
                }, {
                    'id': '47',
                    'name': '\u62db\u8058\u8d39',
                    'status': 'NORMAL',
                    'createUser': '7',
                    'createTime': '2018-06-05 16:20:42',
                    'updateTime': '2018-06-05 16:20:42'
                }, {
                    'id': '48',
                    'name': '\u623f\u79df\u8d39',
                    'status': 'NORMAL',
                    'createUser': '7',
                    'createTime': '2018-06-05 16:20:46',
                    'updateTime': '2018-06-05 16:20:46'
                }, {
                    'id': '49',
                    'name': '\u62bc\u91d1',
                    'status': 'NORMAL',
                    'createUser': '7',
                    'createTime': '2018-06-05 16:20:50',
                    'updateTime': '2018-06-05 16:20:50'
                }, {
                    'id': '50',
                    'name': '\u7269\u4e1a\u6c34\u7535\u8d39',
                    'status': 'NORMAL',
                    'createUser': '7',
                    'createTime': '2018-06-05 16:20:55',
                    'updateTime': '2018-06-05 16:20:55'
                }, {
                    'id': '51',
                    'name': '\u996e\u7528\u6c34',
                    'status': 'NORMAL',
                    'createUser': '7',
                    'createTime': '2018-06-05 16:21:01',
                    'updateTime': '2018-06-05 16:21:01'
                }, {
                    'id': '52',
                    'name': '\u7535\u4fe1\u8d39',
                    'status': 'NORMAL',
                    'createUser': '7',
                    'createTime': '2018-06-05 16:21:06',
                    'updateTime': '2018-06-05 16:21:06'
                }, {
                    'id': '53',
                    'name': '\u88c5\u4fee\u8d39',
                    'status': 'NORMAL',
                    'createUser': '7',
                    'createTime': '2018-06-05 16:21:10',
                    'updateTime': '2018-06-05 16:21:10'
                }, {
                    'id': '54',
                    'name': '\u7ef4\u4fee\u8d39',
                    'status': 'NORMAL',
                    'createUser': '7',
                    'createTime': '2018-06-05 16:21:19',
                    'updateTime': '2018-06-05 16:21:19'
                }, {
                    'id': '55',
                    'name': '\u529e\u516c\u7528\u54c1',
                    'status': 'NORMAL',
                    'createUser': '7',
                    'createTime': '2018-06-05 16:21:23',
                    'updateTime': '2018-06-05 16:21:23'
                }, {
                    'id': '56',
                    'name': '\u529e\u516c\u8bbe\u5907',
                    'status': 'NORMAL',
                    'createUser': '7',
                    'createTime': '2018-06-05 16:21:27',
                    'updateTime': '2018-06-05 16:21:27'
                }, {
                    'id': '57',
                    'name': '\u798f\u5229\u8d39',
                    'status': 'NORMAL',
                    'createUser': '7',
                    'createTime': '2018-06-05 16:21:32',
                    'updateTime': '2018-06-05 16:21:32'
                }, {
                    'id': '58',
                    'name': '\u5ba1\u8ba1\u8d39',
                    'status': 'NORMAL',
                    'createUser': '98',
                    'createTime': '2018-06-05 17:48:17',
                    'updateTime': '2018-06-05 17:48:17'
                }]
            }
        }
    }
}

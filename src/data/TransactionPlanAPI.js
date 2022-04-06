


// 이 파일은 수정할 필요 없습니다. 밖에서 import 해서 쓰시면 됩니다.
export default class TransactionPlanAPI {

    static instance = new TransactionPlanAPI();

    // 코딩 테스트 개발용 더미 데이터 셋입니다.
    // View 혹은 Controller 로직에서 호출해서 사용하세요.

    getUserTransactionPlans = () => {
        return [
            {
                "payment_date_offset": 2592000,
                "currency": "KRW",
                "first_payment_date": 1645498228,
                "is_refunded": false,
                "price_changed": true,
                "has_incorrect_plan": true,
                "status": "changed",
                "next_payment_timestamp_corr": 0,
                "partition": "user_transaction_plan",
                "name": "리디북스",
                "next_payment_ymd": "20220322",
                "nickname": "리디북스",
                "last_transaction_name": "리디북스",
                "disabled": false,
                "last_payment_ymd": "20220222",
                "payment_info": {
                    "easy": null,
                    "card": null,
                    "vendor_type": "bank",
                    "bank_account": {
                        "currency": "KRW",
                        "visible": true,
                        "image_id": "MyrA73r5UmQbpPusVpktwi",
                        "cert_expired_date": 1669042800,
                        "account_number": "110492044158",
                        "finance_vendor_id": "FWsvVUiXbPQkEtyxSQtYgZ",
                        "partition": "user_bank_account",
                        "creation_date": 1646265855.6975107,
                        "small_image_id": "fDtk7Ztw8sGLv6q9tRKtua",
                        "account_name": "[한도제한계좌2]쏠편한 입출금통장(저축예금)",
                        "balance": "874301",
                        "code": "0088",
                        "last_update_date": "20220316",
                        "user_id": "YhPRJVzKoFHrdjmg4eW3Mu",
                        "nickname": "쏠편한 입출금통장",
                        "account_deposit_type": "11",
                        "client_type": "P",
                        "owner": "4eE4U7AnGWSJK3y8LHpYmH",
                        "id": "EHsi5vEXrU4TwpWwrNGZQq",
                        "vendor_name": "신한은행",
                        "hidden": false
                    }
                },
                "is_new": false,
                "owner": "4eE4U7AnGWSJK3y8LHpYmH",
                "id": "TJnVNS7JdCZRV6tLZmcZJ8",
                "next_payment_date": 1647917428,
                "management_service": {
                    "exclusion_summary": "",
                    "payment_summary": "",
                    "category_id": "EDnDJ2T26d7T8KEndBtSzT",
                    "detail": "신간도 베스트셀러도 월정액으로 제한 없이 보는 리디북스의 이북 서비스입니다.",
                    "unsubscribe_by_web": {
                        "link": "https://select.ridibooks.com/settings",
                        "descriptions": [
                            {
                                "description": "로그인해 주세요"
                            },
                            {
                                "description": "구독 관리를 눌러주세요"
                            },
                            {
                                "description": "구독 해지 예약을 눌러주세요"
                            },
                            {
                                "description": "확인을 눌러주세요"
                            }
                        ],
                        "enabled": true
                    },
                    "sub_name": "Ridi Books - Ridi Selcet",
                    "image_id": "NSxdibbzWhoYY3YkvmWqyT",
                    "unsubscribe_by_auto": {
                        "terminator_cmd": "ridibooks.terminate",
                        "find_password_link": "https://ridibooks.com/account/find-password",
                        "terminator_props": [
                            {
                                "prop": {
                                    "name": "아이디",
                                    "key": "id"
                                }
                            },
                            {
                                "prop": {
                                    "name": "비밀번호",
                                    "key": "password"
                                }
                            }
                        ]
                    },
                    "on_promotion": false,
                    "partition": "management_service",
                    "name": "리디북스",
                    "creation_date": 1591155943,
                    "unsubscribe_by_phone": {
                        "phone": "1644-0331",
                        "ars_number": "1"
                    },
                    "payment_summary_text": "",
                    "unsubscribe_by_app": {
                        "ios_scheme": "",
                        "enabled": false,
                        "android_scheme": ""
                    },
                    "name_eng": "RIDIBOOKS",
                    "category": "읽을거리",
                    "keywords": "E북. 읽을거리, 리디셀렉트",
                    "plans": [],
                    "homepage": "https://select.ridibooks.com/",
                    "owner": "4eE4U7AnGWSJK3y8LHpYmH",
                    "id": "CbZHqjqGq8ixpF4eAtbn9M",
                    "type": "product",
                    "payment_summary_regex": ""
                },
                "service_name": "리디북스",
                "last_payment_date": 1645498228,
                "plan": {
                    "week": null,
                    "month": 1,
                    "year": null,
                    "day": null
                },
                "source": "auto",
                "creation_date": 1646378151.462876,
                "payment_type": "subscription",
                "user_id": "YhPRJVzKoFHrdjmg4eW3Mu",
                "update_by": "v3",
                "price": 4900,
                "hidden": false,
                "transactions": [
                    {
                        "currency": "KRW",
                        "inbound": 0,
                        "status": "normal",
                        "balance_after_transaction": 1011368,
                        "finance_vendor_id": "FWsvVUiXbPQkEtyxSQtYgZ",
                        "partition": "user_transaction",
                        "bank_account_id": null,
                        "name": "리디북스",
                        "account_name": "[한도제한계좌2]쏠편한 입출금통장(저축예금)",
                        "account_image_id": "MyrA73r5UmQbpPusVpktwi",
                        "root_transaction_id": null,
                        "bank_account": {
                            "id": "EHsi5vEXrU4TwpWwrNGZQq"
                        },
                        "codef_transaction_id": "6220060228e6690b2f5bd54f",
                        "nickname": "리디북스",
                        "payment_date": 1645498228,
                        "transaction_plan": {
                            "id": "TJnVNS7JdCZRV6tLZmcZJ8"
                        },
                        "is_subscription": true,
                        "disabled": false,
                        "names": [
                            null,
                            "신한체",
                            "리디북스",
                            "원신한"
                        ],
                        "outbound": 4900,
                        "owner": "4eE4U7AnGWSJK3y8LHpYmH",
                        "payment_year_month": "202202",
                        "id": "AanWT9onH7Su5WoZNeKcVE",
                        "payment_date_str": "20220222-115028",
                        "parent_transaction_id": null,
                        "summary": "리디북스",
                        "batch_creation_id": "3ac22980-f042-4364-b75e-93a6c1594dff",
                        "account_number": "110492044158",
                        "source": "auto",
                        "creation_date": 1646265884.838814,
                        "payment_type": "subscription",
                        "vendor_type": "bank",
                        "payment_method_name": "쏠편한 입출금통장(저축예금)",
                        "user_id": "YhPRJVzKoFHrdjmg4eW3Mu",
                        "memo": "신한체",
                        "type": "transaction"
                    }
                ],
                "is_duplicate": false
            },
            {
                "payment_date_offset": 2592000,
                "currency": "KRW",
                "first_payment_date": 1645507446,
                "is_refunded": false,
                "price_changed": true,
                "has_incorrect_plan": true,
                "status": "changed",
                "next_payment_timestamp_corr": 0,
                "partition": "user_transaction_plan",
                "name": "지니뮤직",
                "next_payment_ymd": "20220324",
                "nickname": "지니뮤직",
                "last_transaction_name": "지니뮤직",
                "disabled": false,
                "last_payment_ymd": "20220222",
                "payment_info": {
                    "easy": null,
                    "card": null,
                    "vendor_type": "bank",
                    "bank_account": {
                        "currency": "KRW",
                        "visible": true,
                        "image_id": "MyrA73r5UmQbpPusVpktwi",
                        "cert_expired_date": 1669042800,
                        "account_number": "110492044158",
                        "finance_vendor_id": "FWsvVUiXbPQkEtyxSQtYgZ",
                        "partition": "user_bank_account",
                        "creation_date": 1646265855.6975107,
                        "small_image_id": "fDtk7Ztw8sGLv6q9tRKtua",
                        "account_name": "[한도제한계좌2]쏠편한 입출금통장(저축예금)",
                        "balance": "874301",
                        "code": "0088",
                        "last_update_date": "20220316",
                        "user_id": "YhPRJVzKoFHrdjmg4eW3Mu",
                        "nickname": "쏠편한 입출금통장",
                        "account_deposit_type": "11",
                        "client_type": "P",
                        "owner": "4eE4U7AnGWSJK3y8LHpYmH",
                        "id": "EHsi5vEXrU4TwpWwrNGZQq",
                        "vendor_name": "신한은행",
                        "hidden": false
                    }
                },
                "is_new": false,
                "owner": "4eE4U7AnGWSJK3y8LHpYmH",
                "id": "4UYgFkGmJhWqmZDa5Rbt9i",
                "next_payment_date": 1648099446,
                "management_service": {
                    "payment_summary": "",
                    "category_id": "RMxUATnf5K2ckx7ZXNnz6D",
                    "detail": "국내 대표 음악 스트리밍 서비스 지니에서 FLAC 고음질 음악을 즐길 수 있습니다.",
                    "unsubscribe_by_web": {
                        "link": "",
                        "enabled": false
                    },
                    "unsubscribe_by_store": {
                        "enabled": false
                    },
                    "image_id": "WrKTEfVXzUkYWXsQjjuc7K",
                    "unsubscribe_by_auto": {
                        "find_password_link": "https://www.genie.co.kr/member/find/findPwd",
                        "find_id_link": "https://www.genie.co.kr/member/find/findId",
                        "sign_up_link": "https://www.genie.co.kr/member/signUp"
                    },
                    "payment_summary_regex": "",
                    "partition": "management_service",
                    "name": "지니뮤직",
                    "unsubscribe_by_phone": {
                        "phone": "1577-5337",
                        "enabled": true,
                        "ars_number": "1 3 3"
                    },
                    "enroll_count": 0,
                    "name_eng": "Genie",
                    "keywords": "음악, 지니, 뮤직",
                    "plans": [],
                    "owner": "4eE4U7AnGWSJK3y8LHpYmH",
                    "unsubscribe_by_app_ios": {
                        "scheme": "fb256937297704300://",
                        "descriptions": [
                            {
                                "image_id": "DcdLoDFwp9N7V9ZoCu9RWn",
                                "description": "화면 상단의 계정 버튼을 눌러 주세요"
                            },
                            {
                                "image_id": "gdEREHzSaUQWG5LCvDNswA",
                                "description": "정기 결제 설정 탭을 눌러 주세요"
                            },
                            {
                                "image_id": "MjGgAG2Thesf5Z8osfz7iw",
                                "description": "해지 신청 버튼을 눌러 주세요"
                            },
                            {
                                "image_id": "hpXe576KiyMDDLoWN4pNM5",
                                "description": "해지 계속 버튼을 눌러 주세요"
                            },
                            {
                                "image_id": "J7FjoQ3mBMbKhuSLLcQho5",
                                "description": "해지 계속 버튼을 한번 더 눌러 주세요"
                            },
                            {
                                "image_id": "SiAfpMuFvE978sjZn4KRJT",
                                "description": "계속 해지 버튼을 눌러 주세요"
                            },
                            {
                                "image_id": "BAWH9Y8wkg45xigzReGRDk",
                                "description": "종료 버튼으로 해지를  완료할 수 있어요"
                            }
                        ],
                        "enabled": true
                    },
                    "id": "3SD8e4Lp5PULdbfijjHkXq",
                    "phone": "1577-5337",
                    "exclusion_summary": "",
                    "has_fixed_price": false,
                    "sub_name": "genie music",
                    "on_promotion": false,
                    "creation_date": 1591155941,
                    "payment_summary_text": "",
                    "unsubscribe_by_app": {
                        "ios_scheme": "https://apps.apple.com/kr/app/%EC%A7%80%EB%8B%88-%EB%AE%A4%EC%A7%81-genie/id858266085",
                        "descriptions": [
                            {
                                "image_id": "5KmVwkF7y8QbtbEbEAQfnR"
                            },
                            {
                                "image_id": "Y3zNbTkt6mQFB7fhpggrgr"
                            },
                            {
                                "image_id": "mW4VWEUAdUw3GYyVqomJEh"
                            },
                            {
                                "image_id": "csmrdrDSLi6t8wcF7Ahsem"
                            },
                            {
                                "image_id": "ZXywkZrcQ9mdQXjqXisqsc"
                            },
                            {
                                "image_id": "fhbs7Ybh6MWNXyAgsuLsGH"
                            },
                            {
                                "image_id": "aVMYaxQJLMBXacCkVNShE2"
                            }
                        ],
                        "enabled": true,
                        "android_scheme": "https://play.google.com/store/apps/details?id=com.ktmusic.geniemusic&hl=ko"
                    },
                    "unsubscribe_by_app_android": {
                        "scheme": "fb256937297704300://",
                        "descriptions": [
                            {
                                "image_id": "jidz3fFN6PxnToNoQ3dYAQ",
                                "description": "화면 상단의 계정 버튼을 눌러 주세요"
                            },
                            {
                                "image_id": "bKSjwZaHrvfRvdM432xH8B",
                                "description": "정기 결제 설정 탭을 눌러 주세요"
                            },
                            {
                                "image_id": "DC5b78HfcCh8jhYXVjc8Tr",
                                "description": "해지 신청 버튼을 눌러 주세요"
                            },
                            {
                                "image_id": "3kbuDxiM8FdebxGfBxSiZ3",
                                "description": "해지 계속 버튼을 눌러 주세요"
                            },
                            {
                                "image_id": "ZuXtE6ZGFZYXoEN2XDRgbr",
                                "description": "해지 계속 버튼을 한번 더 눌러 주세요"
                            },
                            {
                                "image_id": "mi3h4FVAEF48JqsDQ4SP3C",
                                "description": "계속 해지 버튼을 눌러 주세요"
                            },
                            {
                                "image_id": "FwptamS6WDZf4FT3BGrWsw",
                                "description": "종료 버튼으로 해지를  완료할 수 있어요"
                            }
                        ],
                        "enabled": true
                    },
                    "category": "영상·음악",
                    "homepage": "https://genie.co.kr/",
                    "type": "product"
                },
                "service_name": "지니뮤직",
                "last_payment_date": 1645507446,
                "plan": {
                    "week": null,
                    "month": null,
                    "year": null,
                    "day": 30
                },
                "source": "auto",
                "creation_date": 1646378151.4206266,
                "payment_type": "subscription",
                "user_id": "YhPRJVzKoFHrdjmg4eW3Mu",
                "update_by": "v3",
                "price": 6050,
                "hidden": false,
                "transactions": [
                    {
                        "currency": "KRW",
                        "inbound": 0,
                        "status": "normal",
                        "balance_after_transaction": 1010218,
                        "finance_vendor_id": "FWsvVUiXbPQkEtyxSQtYgZ",
                        "partition": "user_transaction",
                        "bank_account_id": null,
                        "name": "지니뮤직",
                        "account_name": "[한도제한계좌2]쏠편한 입출금통장(저축예금)",
                        "account_image_id": "MyrA73r5UmQbpPusVpktwi",
                        "root_transaction_id": null,
                        "bank_account": {
                            "id": "EHsi5vEXrU4TwpWwrNGZQq"
                        },
                        "codef_transaction_id": "6220060228e6690b2f5bd54f",
                        "nickname": "지니뮤직",
                        "payment_date": 1645507446,
                        "transaction_plan": {
                            "id": "4UYgFkGmJhWqmZDa5Rbt9i"
                        },
                        "is_subscription": true,
                        "disabled": false,
                        "names": [
                            null,
                            "신한체",
                            "지니뮤직",
                            "원신한"
                        ],
                        "outbound": 6050,
                        "owner": "4eE4U7AnGWSJK3y8LHpYmH",
                        "payment_year_month": "202202",
                        "id": "nmUezTujbk5yUyRpDDersv",
                        "payment_date_str": "20220222-142406",
                        "parent_transaction_id": null,
                        "summary": "지니뮤직",
                        "batch_creation_id": "3ac22980-f042-4364-b75e-93a6c1594dff",
                        "account_number": "110492044158",
                        "source": "auto",
                        "creation_date": 1646265884.8555398,
                        "payment_type": "subscription",
                        "vendor_type": "bank",
                        "payment_method_name": "쏠편한 입출금통장(저축예금)",
                        "user_id": "YhPRJVzKoFHrdjmg4eW3Mu",
                        "memo": "신한체",
                        "type": "transaction"
                    }
                ],
                "is_duplicate": false
            },
            {
                "payment_date_offset": 2592000,
                "currency": "KRW",
                "first_payment_date": 1643105125,
                "is_refunded": false,
                "price_changed": false,
                "has_incorrect_plan": false,
                "status": "paid",
                "next_payment_timestamp_corr": 0,
                "partition": "user_transaction_plan",
                "name": "라이나생명",
                "next_payment_ymd": "20220325",
                "nickname": "라이나생명",
                "last_transaction_name": "라이나02003",
                "disabled": false,
                "last_payment_ymd": "20220225",
                "payment_info": {
                    "easy": null,
                    "card": null,
                    "vendor_type": "bank",
                    "bank_account": {
                        "currency": "KRW",
                        "visible": true,
                        "image_id": "MyrA73r5UmQbpPusVpktwi",
                        "cert_expired_date": 1669042800,
                        "account_number": "110492044158",
                        "finance_vendor_id": "FWsvVUiXbPQkEtyxSQtYgZ",
                        "partition": "user_bank_account",
                        "creation_date": 1646265855.6975107,
                        "small_image_id": "fDtk7Ztw8sGLv6q9tRKtua",
                        "account_name": "[한도제한계좌2]쏠편한 입출금통장(저축예금)",
                        "balance": "874301",
                        "code": "0088",
                        "last_update_date": "20220316",
                        "user_id": "YhPRJVzKoFHrdjmg4eW3Mu",
                        "nickname": "쏠편한 입출금통장",
                        "account_deposit_type": "11",
                        "client_type": "P",
                        "owner": "4eE4U7AnGWSJK3y8LHpYmH",
                        "id": "EHsi5vEXrU4TwpWwrNGZQq",
                        "vendor_name": "신한은행",
                        "hidden": false
                    }
                },
                "is_new": false,
                "owner": "4eE4U7AnGWSJK3y8LHpYmH",
                "id": "YJFMs9Y3DmoWwnVr72caYt",
                "next_payment_date": 1648202417,
                "management_service": {
                    "payment_summary": "",
                    "has_fixed_price": true,
                    "no_holiday_payment": true,
                    "sub_name": "Lina",
                    "image_id": "adqhksxe7LEPMkvq2uarSU",
                    "payment_summary_regex": "",
                    "partition": "management_service",
                    "name": "라이나생명",
                    "creation_date": 1592309479,
                    "payment_summary_text": "",
                    "plans": [],
                    "owner": "AckYtn7vaA4KN4mEigkJA3",
                    "id": "i8CBzaexwmrJqXDAXpijQo",
                    "phone": "1588-0058",
                    "is_life_expense": true,
                    "exclusion_summary": ""
                },
                "service_name": "라이나생명",
                "last_payment_date": 1645783217,
                "plan": {
                    "week": null,
                    "month": 1,
                    "year": null,
                    "day": null
                },
                "source": "auto",
                "creation_date": 1646265898.021248,
                "payment_type": "subscription",
                "user_id": "YhPRJVzKoFHrdjmg4eW3Mu",
                "update_by": "v3",
                "price": 28200,
                "hidden": false,
                "transactions": [
                    {
                        "currency": "KRW",
                        "inbound": 0,
                        "status": "normal",
                        "balance_after_transaction": 2118223,
                        "finance_vendor_id": "FWsvVUiXbPQkEtyxSQtYgZ",
                        "partition": "user_transaction",
                        "bank_account_id": null,
                        "name": "라이나01002",
                        "account_name": "[한도제한계좌2]쏠편한 입출금통장(저축예금)",
                        "account_image_id": "MyrA73r5UmQbpPusVpktwi",
                        "bank_account": {
                            "id": "EHsi5vEXrU4TwpWwrNGZQq"
                        },
                        "codef_transaction_id": "6220060228e6690b2f5bd54f",
                        "nickname": "라이나01002",
                        "payment_date": 1643105125,
                        "transaction_plan": {
                            "id": "YJFMs9Y3DmoWwnVr72caYt"
                        },
                        "is_subscription": true,
                        "disabled": false,
                        "names": [
                            null,
                            "FB보험",
                            "라이나01002",
                            "종각BC"
                        ],
                        "outbound": 28200,
                        "owner": "4eE4U7AnGWSJK3y8LHpYmH",
                        "payment_year_month": "202201",
                        "id": "6LCVYVRhie9y2TiwcGWEm6",
                        "payment_date_str": "20220125-190525",
                        "summary": "라이나01002",
                        "batch_creation_id": "3ac22980-f042-4364-b75e-93a6c1594dff",
                        "account_number": "110492044158",
                        "source": "auto",
                        "creation_date": 1646265884.2095406,
                        "payment_type": "subscription",
                        "vendor_type": "bank",
                        "payment_method_name": "쏠편한 입출금통장(저축예금)",
                        "user_id": "YhPRJVzKoFHrdjmg4eW3Mu",
                        "memo": "FB보험",
                        "type": "transaction"
                    },
                    {
                        "currency": "KRW",
                        "inbound": 0,
                        "status": "normal",
                        "balance_after_transaction": 928957,
                        "finance_vendor_id": "FWsvVUiXbPQkEtyxSQtYgZ",
                        "partition": "user_transaction",
                        "bank_account_id": null,
                        "name": "라이나02003",
                        "account_name": "[한도제한계좌2]쏠편한 입출금통장(저축예금)",
                        "account_image_id": "MyrA73r5UmQbpPusVpktwi",
                        "bank_account": {
                            "id": "EHsi5vEXrU4TwpWwrNGZQq"
                        },
                        "codef_transaction_id": "6220060228e6690b2f5bd54f",
                        "nickname": "라이나02003",
                        "payment_date": 1645783217,
                        "transaction_plan": {
                            "id": "YJFMs9Y3DmoWwnVr72caYt"
                        },
                        "is_subscription": true,
                        "disabled": false,
                        "names": [
                            null,
                            "FB보험",
                            "라이나02003",
                            "종각BC"
                        ],
                        "outbound": 28200,
                        "owner": "4eE4U7AnGWSJK3y8LHpYmH",
                        "payment_year_month": "202202",
                        "id": "7c5GRWLeXHxZfReXog8BXD",
                        "payment_date_str": "20220225-190017",
                        "summary": "라이나02003",
                        "batch_creation_id": "3ac22980-f042-4364-b75e-93a6c1594dff",
                        "account_number": "110492044158",
                        "source": "auto",
                        "creation_date": 1646265885.233785,
                        "payment_type": "subscription",
                        "vendor_type": "bank",
                        "payment_method_name": "쏠편한 입출금통장(저축예금)",
                        "user_id": "YhPRJVzKoFHrdjmg4eW3Mu",
                        "memo": "FB보험",
                        "type": "transaction"
                    }
                ],
                "is_duplicate": false
            },
            {
                "payment_date_offset": 2592000,
                "currency": "KRW",
                "first_payment_date": 1640562756,
                "is_refunded": false,
                "price_changed": false,
                "has_incorrect_plan": false,
                "status": "paid",
                "next_payment_timestamp_corr": 0,
                "partition": "user_transaction_plan",
                "name": "신한은행 적금",
                "next_payment_ymd": "20220328",
                "nickname": "신한은행 적금",
                "last_transaction_name": "230260364403",
                "disabled": false,
                "last_payment_ymd": "20220228",
                "payment_info": {
                    "easy": null,
                    "card": null,
                    "vendor_type": "bank",
                    "bank_account": {
                        "currency": "KRW",
                        "visible": true,
                        "image_id": "MyrA73r5UmQbpPusVpktwi",
                        "cert_expired_date": 1669042800,
                        "account_number": "110492044158",
                        "finance_vendor_id": "FWsvVUiXbPQkEtyxSQtYgZ",
                        "partition": "user_bank_account",
                        "creation_date": 1646265855.6975107,
                        "small_image_id": "fDtk7Ztw8sGLv6q9tRKtua",
                        "account_name": "[한도제한계좌2]쏠편한 입출금통장(저축예금)",
                        "balance": "874301",
                        "code": "0088",
                        "last_update_date": "20220316",
                        "user_id": "YhPRJVzKoFHrdjmg4eW3Mu",
                        "nickname": "쏠편한 입출금통장",
                        "account_deposit_type": "11",
                        "client_type": "P",
                        "owner": "4eE4U7AnGWSJK3y8LHpYmH",
                        "id": "EHsi5vEXrU4TwpWwrNGZQq",
                        "vendor_name": "신한은행",
                        "hidden": false
                    }
                },
                "is_new": false,
                "owner": "4eE4U7AnGWSJK3y8LHpYmH",
                "id": "YBeSc2nNuXu7z3ZXeiEinV",
                "next_payment_date": 1648426457,
                "management_service": {
                    "payment_summary": "",
                    "category_id": "b5Sp7A88EEeKDp3itbi5K6",
                    "detail": "대출 / 적금 및 펀드, 청약 등",
                    "unsubscribe_by_web": {
                        "link": null,
                        "enabled": false
                    },
                    "image_id": "7fCWEnZsbXemn8vYHapSvP",
                    "payment_summary_regex": "",
                    "partition": "management_service",
                    "name": "신한은행 적금",
                    "unsubscribe_by_phone": {
                        "description": "",
                        "ars_number": null,
                        "phone": null,
                        "enabled": false
                    },
                    "name_eng": "Shinhan Bank",
                    "plans": [],
                    "filled_image_id": "grvUwAZxWEmzmhdyA3Ekzz",
                    "owner": "4eE4U7AnGWSJK3y8LHpYmH",
                    "id": "RLocqsnWQjeyKKfUX3efp5",
                    "negative_image_id": "HBu8irfPPbbWVCRWNE5MMs",
                    "phone": "1599-8000",
                    "exclusion_summary": "",
                    "payment_memos": [
                        {
                            "finance_vendor_id": "FWsvVUiXbPQkEtyxSQtYgZ",
                            "memo": "^[0-9]{3}\\-[0-9]{3}\\-[0-9]{2}\\$,^월부금 납입이체$,^\\d\\d\\d\\-\\d\\d\\d\\-\\d\\d\\d\\d\\d\\d$,^적립CC,^[0-9]{1,3}\\.적금\\(폰요$,^[0-9]{11,12}$"
                        }
                    ],
                    "has_fixed_price": true,
                    "no_holiday_payment": true,
                    "sub_name": "Shinhan",
                    "on_promotion": false,
                    "creation_date": 1591155941,
                    "payment_summary_text": "",
                    "unsubscribe_by_app": {
                        "ios_scheme": null,
                        "enabled": false,
                        "android_scheme": null
                    },
                    "category": "금융",
                    "is_life_expense": true,
                    "type": "living"
                },
                "service_name": "신한은행 적금",
                "last_payment_date": 1646007257,
                "plan": {
                    "week": null,
                    "month": 1,
                    "year": null,
                    "day": null
                },
                "source": "auto",
                "creation_date": 1646265898.0141397,
                "payment_type": "subscription",
                "user_id": "YhPRJVzKoFHrdjmg4eW3Mu",
                "update_by": "v3",
                "price": 700000,
                "hidden": false,
                "transactions": [
                    {
                        "currency": "KRW",
                        "inbound": 0,
                        "status": "normal",
                        "balance_after_transaction": 3227896,
                        "finance_vendor_id": "FWsvVUiXbPQkEtyxSQtYgZ",
                        "partition": "user_transaction",
                        "bank_account_id": null,
                        "name": "230260364403",
                        "account_name": "[한도제한계좌2]쏠편한 입출금통장(저축예금)",
                        "account_image_id": "MyrA73r5UmQbpPusVpktwi",
                        "bank_account": {
                            "id": "EHsi5vEXrU4TwpWwrNGZQq"
                        },
                        "codef_transaction_id": "6220060228e6690b2f5bd54f",
                        "nickname": "230260364403",
                        "payment_date": 1640562756,
                        "transaction_plan": {
                            "id": "YBeSc2nNuXu7z3ZXeiEinV"
                        },
                        "is_subscription": true,
                        "disabled": false,
                        "names": [
                            null,
                            "적립CC",
                            "230260364403",
                            "문정역"
                        ],
                        "outbound": 700000,
                        "owner": "4eE4U7AnGWSJK3y8LHpYmH",
                        "payment_year_month": "202112",
                        "id": "4CwTZkKeVwavzUNRSvjRUQ",
                        "payment_date_str": "20211227-085236",
                        "summary": "230260364403",
                        "batch_creation_id": "3ac22980-f042-4364-b75e-93a6c1594dff",
                        "account_number": "110492044158",
                        "source": "auto",
                        "creation_date": 1646265881.399729,
                        "payment_type": "subscription",
                        "vendor_type": "bank",
                        "payment_method_name": "쏠편한 입출금통장(저축예금)",
                        "user_id": "YhPRJVzKoFHrdjmg4eW3Mu",
                        "memo": "적립CC",
                        "type": "transaction"
                    },
                    {
                        "currency": "KRW",
                        "inbound": 0,
                        "status": "normal",
                        "balance_after_transaction": 3257184,
                        "finance_vendor_id": "FWsvVUiXbPQkEtyxSQtYgZ",
                        "partition": "user_transaction",
                        "bank_account_id": null,
                        "name": "230260364403",
                        "account_name": "[한도제한계좌2]쏠편한 입출금통장(저축예금)",
                        "account_image_id": "MyrA73r5UmQbpPusVpktwi",
                        "bank_account": {
                            "id": "EHsi5vEXrU4TwpWwrNGZQq"
                        },
                        "codef_transaction_id": "6220060228e6690b2f5bd54f",
                        "nickname": "230260364403",
                        "payment_date": 1643153923,
                        "transaction_plan": {
                            "id": "YBeSc2nNuXu7z3ZXeiEinV"
                        },
                        "is_subscription": true,
                        "disabled": false,
                        "names": [
                            null,
                            "적립CC",
                            "230260364403",
                            "문정역"
                        ],
                        "outbound": 700000,
                        "owner": "4eE4U7AnGWSJK3y8LHpYmH",
                        "payment_year_month": "202201",
                        "id": "Ld5sDB6eq6VLLzk97zjG8Y",
                        "payment_date_str": "20220126-083843",
                        "summary": "230260364403",
                        "batch_creation_id": "3ac22980-f042-4364-b75e-93a6c1594dff",
                        "account_number": "110492044158",
                        "source": "auto",
                        "creation_date": 1646265884.1920826,
                        "payment_type": "subscription",
                        "vendor_type": "bank",
                        "payment_method_name": "쏠편한 입출금통장(저축예금)",
                        "user_id": "YhPRJVzKoFHrdjmg4eW3Mu",
                        "memo": "적립CC",
                        "type": "transaction"
                    },
                    {
                        "currency": "KRW",
                        "inbound": 0,
                        "status": "normal",
                        "balance_after_transaction": 1076361,
                        "finance_vendor_id": "FWsvVUiXbPQkEtyxSQtYgZ",
                        "partition": "user_transaction",
                        "bank_account_id": null,
                        "name": "230260364403",
                        "account_name": "[한도제한계좌2]쏠편한 입출금통장(저축예금)",
                        "account_image_id": "MyrA73r5UmQbpPusVpktwi",
                        "bank_account": {
                            "id": "EHsi5vEXrU4TwpWwrNGZQq"
                        },
                        "codef_transaction_id": "6220060228e6690b2f5bd54f",
                        "nickname": "230260364403",
                        "payment_date": 1646007257,
                        "transaction_plan": {
                            "id": "YBeSc2nNuXu7z3ZXeiEinV"
                        },
                        "is_subscription": true,
                        "disabled": false,
                        "names": [
                            null,
                            "적립CC",
                            "230260364403",
                            "디영1"
                        ],
                        "outbound": 700000,
                        "owner": "4eE4U7AnGWSJK3y8LHpYmH",
                        "payment_year_month": "202202",
                        "id": "gdADMwjHf28dNUdMMbTmVG",
                        "payment_date_str": "20220228-091417",
                        "summary": "230260364403",
                        "batch_creation_id": "3ac22980-f042-4364-b75e-93a6c1594dff",
                        "account_number": "110492044158",
                        "source": "auto",
                        "creation_date": 1646265885.4367013,
                        "payment_type": "subscription",
                        "vendor_type": "bank",
                        "payment_method_name": "쏠편한 입출금통장(저축예금)",
                        "user_id": "YhPRJVzKoFHrdjmg4eW3Mu",
                        "memo": "적립CC",
                        "type": "transaction"
                    }
                ],
                "is_duplicate": false
            },
            {
                "payment_date_offset": 2592000,
                "currency": "KRW",
                "first_payment_date": 1640598969,
                "is_refunded": false,
                "price_changed": false,
                "has_incorrect_plan": false,
                "status": "paid",
                "next_payment_timestamp_corr": 0,
                "partition": "user_transaction_plan",
                "name": "LG U+ 통신비",
                "next_payment_ymd": "20220328",
                "nickname": "LG U+ 통신비",
                "last_transaction_name": "LGU+22691061",
                "disabled": false,
                "last_payment_ymd": "20220228",
                "payment_info": {
                    "easy": null,
                    "card": null,
                    "vendor_type": "bank",
                    "bank_account": {
                        "currency": "KRW",
                        "visible": true,
                        "image_id": "MyrA73r5UmQbpPusVpktwi",
                        "cert_expired_date": 1669042800,
                        "account_number": "110492044158",
                        "finance_vendor_id": "FWsvVUiXbPQkEtyxSQtYgZ",
                        "partition": "user_bank_account",
                        "creation_date": 1646265855.6975107,
                        "small_image_id": "fDtk7Ztw8sGLv6q9tRKtua",
                        "account_name": "[한도제한계좌2]쏠편한 입출금통장(저축예금)",
                        "balance": "874301",
                        "code": "0088",
                        "last_update_date": "20220316",
                        "user_id": "YhPRJVzKoFHrdjmg4eW3Mu",
                        "nickname": "쏠편한 입출금통장",
                        "account_deposit_type": "11",
                        "client_type": "P",
                        "owner": "4eE4U7AnGWSJK3y8LHpYmH",
                        "id": "EHsi5vEXrU4TwpWwrNGZQq",
                        "vendor_name": "신한은행",
                        "hidden": false
                    }
                },
                "is_new": false,
                "owner": "4eE4U7AnGWSJK3y8LHpYmH",
                "id": "JmmWinVGaybNtnEM6obXD2",
                "next_payment_date": 1648461252,
                "management_service": {
                    "payment_summary": "",
                    "category_id": "2mzAFBYePZe3xXhCuSocRL",
                    "detail": "핸드폰 및 인터넷 요금",
                    "fix_payment_method": true,
                    "unsubscribe_by_web": {
                        "link": null,
                        "enabled": false
                    },
                    "image_id": "N8bMdmFunVC5KtzLokWU9w",
                    "payment_summary_regex": "",
                    "partition": "management_service",
                    "name": "LG U+ 통신비",
                    "unsubscribe_by_phone": {
                        "description": "",
                        "ars_number": null,
                        "phone": null,
                        "enabled": false
                    },
                    "name_eng": "LG U+",
                    "plans": [],
                    "filled_image_id": "9qkrX9W4U2HfxV8eNsquDM",
                    "owner": "4eE4U7AnGWSJK3y8LHpYmH",
                    "id": "T8GESppEHbSD8QHgTCfBea",
                    "negative_image_id": "Y4VKY3GcGHQyphsTiXcGKf",
                    "phone": "114",
                    "has_fixed_price": false,
                    "no_holiday_payment": true,
                    "sub_name": "LG U+ ",
                    "on_promotion": false,
                    "creation_date": 1591155941,
                    "payment_summary_text": "",
                    "unsubscribe_by_app": {
                        "ios_scheme": null,
                        "enabled": false,
                        "android_scheme": null
                    },
                    "category": "통신요금",
                    "is_life_expense": true,
                    "type": "living",
                    "exclusion_summary": ""
                },
                "service_name": "LG U+ 통신비",
                "last_payment_date": 1646042052,
                "plan": {
                    "week": null,
                    "month": 1,
                    "year": null,
                    "day": null
                },
                "source": "auto",
                "creation_date": 1646265898.0182488,
                "payment_type": "subscription",
                "user_id": "YhPRJVzKoFHrdjmg4eW3Mu",
                "update_by": "v3",
                "price": 110190,
                "hidden": false,
                "transactions": [
                    {
                        "currency": "KRW",
                        "inbound": 0,
                        "status": "normal",
                        "balance_after_transaction": 3117706,
                        "finance_vendor_id": "FWsvVUiXbPQkEtyxSQtYgZ",
                        "partition": "user_transaction",
                        "bank_account_id": null,
                        "name": "LGU+22691061",
                        "account_name": "[한도제한계좌2]쏠편한 입출금통장(저축예금)",
                        "account_image_id": "MyrA73r5UmQbpPusVpktwi",
                        "bank_account": {
                            "id": "EHsi5vEXrU4TwpWwrNGZQq"
                        },
                        "codef_transaction_id": "6220060228e6690b2f5bd54f",
                        "nickname": "LGU+22691061",
                        "payment_date": 1640598969,
                        "transaction_plan": {
                            "id": "JmmWinVGaybNtnEM6obXD2"
                        },
                        "is_subscription": true,
                        "disabled": false,
                        "names": [
                            null,
                            "FB통신",
                            "LGU+22691061",
                            "여중대"
                        ],
                        "outbound": 110190,
                        "owner": "4eE4U7AnGWSJK3y8LHpYmH",
                        "payment_year_month": "202112",
                        "id": "HiXgGfMv7KruZpEdvcmvfK",
                        "payment_date_str": "20211227-185609",
                        "summary": "LGU+22691061",
                        "batch_creation_id": "3ac22980-f042-4364-b75e-93a6c1594dff",
                        "account_number": "110492044158",
                        "source": "auto",
                        "creation_date": 1646265881.023346,
                        "payment_type": "subscription",
                        "vendor_type": "bank",
                        "payment_method_name": "쏠편한 입출금통장(저축예금)",
                        "user_id": "YhPRJVzKoFHrdjmg4eW3Mu",
                        "memo": "FB통신",
                        "type": "transaction"
                    },
                    {
                        "currency": "KRW",
                        "inbound": 0,
                        "status": "normal",
                        "balance_after_transaction": 2051994,
                        "finance_vendor_id": "FWsvVUiXbPQkEtyxSQtYgZ",
                        "partition": "user_transaction",
                        "bank_account_id": null,
                        "name": "LGU+22691061",
                        "account_name": "[한도제한계좌2]쏠편한 입출금통장(저축예금)",
                        "account_image_id": "MyrA73r5UmQbpPusVpktwi",
                        "bank_account": {
                            "id": "EHsi5vEXrU4TwpWwrNGZQq"
                        },
                        "codef_transaction_id": "6220060228e6690b2f5bd54f",
                        "nickname": "LGU+22691061",
                        "payment_date": 1643190042,
                        "transaction_plan": {
                            "id": "JmmWinVGaybNtnEM6obXD2"
                        },
                        "is_subscription": true,
                        "disabled": false,
                        "names": [
                            null,
                            "FB통신",
                            "LGU+22691061",
                            "여중대"
                        ],
                        "outbound": 110190,
                        "owner": "4eE4U7AnGWSJK3y8LHpYmH",
                        "payment_year_month": "202201",
                        "id": "i4jkBLPKTSKFqupqLqR8nw",
                        "payment_date_str": "20220126-184042",
                        "summary": "LGU+22691061",
                        "batch_creation_id": "3ac22980-f042-4364-b75e-93a6c1594dff",
                        "account_number": "110492044158",
                        "source": "auto",
                        "creation_date": 1646265884.1811068,
                        "payment_type": "subscription",
                        "vendor_type": "bank",
                        "payment_method_name": "쏠편한 입출금통장(저축예금)",
                        "user_id": "YhPRJVzKoFHrdjmg4eW3Mu",
                        "memo": "FB통신",
                        "type": "transaction"
                    },
                    {
                        "currency": "KRW",
                        "inbound": 0,
                        "status": "normal",
                        "balance_after_transaction": 883191,
                        "finance_vendor_id": "FWsvVUiXbPQkEtyxSQtYgZ",
                        "partition": "user_transaction",
                        "bank_account_id": null,
                        "name": "LGU+22691061",
                        "account_name": "[한도제한계좌2]쏠편한 입출금통장(저축예금)",
                        "account_image_id": "MyrA73r5UmQbpPusVpktwi",
                        "bank_account": {
                            "id": "EHsi5vEXrU4TwpWwrNGZQq"
                        },
                        "codef_transaction_id": "6220060228e6690b2f5bd54f",
                        "nickname": "LGU+22691061",
                        "payment_date": 1646042052,
                        "transaction_plan": {
                            "id": "JmmWinVGaybNtnEM6obXD2"
                        },
                        "is_subscription": true,
                        "disabled": false,
                        "names": [
                            null,
                            "FB통신",
                            "LGU+22691061",
                            "여중대"
                        ],
                        "outbound": 110190,
                        "owner": "4eE4U7AnGWSJK3y8LHpYmH",
                        "payment_year_month": "202202",
                        "id": "SAFqVMWepHBJWrSV2ki92h",
                        "payment_date_str": "20220228-185412",
                        "summary": "LGU+22691061",
                        "batch_creation_id": "3ac22980-f042-4364-b75e-93a6c1594dff",
                        "account_number": "110492044158",
                        "source": "auto",
                        "creation_date": 1646265885.1167455,
                        "payment_type": "subscription",
                        "vendor_type": "bank",
                        "payment_method_name": "쏠편한 입출금통장(저축예금)",
                        "user_id": "YhPRJVzKoFHrdjmg4eW3Mu",
                        "memo": "FB통신",
                        "type": "transaction"
                    }
                ],
                "is_duplicate": false
            },
            {
                "payment_date_offset": 2592000,
                "currency": "KRW",
                "first_payment_date": 1641081611,
                "is_refunded": false,
                "price_changed": true,
                "has_incorrect_plan": false,
                "status": "changed",
                "next_payment_timestamp_corr": 0,
                "partition": "user_transaction_plan",
                "name": "유튜브 프리미엄",
                "next_payment_ymd": "20220402",
                "nickname": "유튜브 프리미엄",
                "last_transaction_name": "유튜브프리미엄",
                "disabled": false,
                "last_payment_ymd": "20220302",
                "payment_info": {
                    "easy": null,
                    "card": null,
                    "vendor_type": "bank",
                    "bank_account": {
                        "currency": "KRW",
                        "visible": true,
                        "image_id": "MyrA73r5UmQbpPusVpktwi",
                        "cert_expired_date": 1669042800,
                        "account_number": "110492044158",
                        "finance_vendor_id": "FWsvVUiXbPQkEtyxSQtYgZ",
                        "partition": "user_bank_account",
                        "creation_date": 1646265855.6975107,
                        "small_image_id": "fDtk7Ztw8sGLv6q9tRKtua",
                        "account_name": "[한도제한계좌2]쏠편한 입출금통장(저축예금)",
                        "balance": "874301",
                        "code": "0088",
                        "last_update_date": "20220316",
                        "user_id": "YhPRJVzKoFHrdjmg4eW3Mu",
                        "nickname": "쏠편한 입출금통장",
                        "account_deposit_type": "11",
                        "client_type": "P",
                        "owner": "4eE4U7AnGWSJK3y8LHpYmH",
                        "id": "EHsi5vEXrU4TwpWwrNGZQq",
                        "vendor_name": "신한은행",
                        "hidden": false
                    }
                },
                "is_new": false,
                "owner": "4eE4U7AnGWSJK3y8LHpYmH",
                "id": "m4KoAxQZhnJhUYRMG4uuJY",
                "next_payment_date": 1648857610,
                "management_service": {
                    "payment_summary": "",
                    "category_id": "RMxUATnf5K2ckx7ZXNnz6D",
                    "detail": "유튜브를 광고 없이, 데이터 없이, 백그라운드 재생으로 즐길 수 있는 프리미엄 멤버십입니다.",
                    "fix_payment_method": true,
                    "unsubscribe_by_web": {
                        "link": "https://www.youtube.com/paid_memberships",
                        "descriptions": [
                            {
                                "description": "이용하고 계신 계정으로 로그인해주세요"
                            },
                            {
                                "description": "유튜브 프리미엄에서 멤버십 관리를 눌러주세요"
                            },
                            {
                                "description": "화면 우측의 비활성화 버튼을 눌러주세요"
                            },
                            {
                                "description": "화면 중간의 그대로 취소를 눌러주세요"
                            },
                            {
                                "description": "화면 중간의 취소 버튼을 눌러 해지를 완료하세요"
                            }
                        ]
                    },
                    "unsubscribe_by_store": {
                        "enabled": false
                    },
                    "image_id": "RaFvSRyVrRbFKEDrC8upxx",
                    "unsubscribe_by_auto": {
                        "find_password_link": "https://accounts.google.com/signin/v2/challenge/pwd?continue=https%3A%2F%2Fm.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Dm%26hl%3Dko%26next%3D%252F&hl=ko&passive=false&service=youtube&uilel=0&flowName=GlifWebSignIn&flowEntry=AddSession&cid=1&navigationDirection=forward&TL=AM3QAYYTEhqSmfAOJLDQyiwY66n4bWwLg9yWrwqhmdYn_SjbAssJIsmp2Djx94vf",
                        "terminator_props": [
                            {
                                "prop": {
                                    "name": "이메일",
                                    "key": "email"
                                }
                            },
                            {
                                "prop": {
                                    "name": "비밀번호",
                                    "key": "password"
                                }
                            }
                        ],
                        "need_captcha_request": true,
                        "terminator_cmd": "youtube.terminate"
                    },
                    "payment_summary_regex": "",
                    "partition": "management_service",
                    "name": "유튜브 프리미엄",
                    "enroll_count": 0,
                    "name_eng": "YouTube Premium",
                    "keywords": "스트리밍",
                    "plans": [],
                    "filled_image_id": "cKJcyoTSXoUx6ZqCv5mZqN",
                    "owner": "4eE4U7AnGWSJK3y8LHpYmH",
                    "unsubscribe_by_app_ios": {
                        "descriptions": [
                            {
                                "image_id": "GLdnoQnwo9t2PNiKgYwL6D",
                                "description": "우측 상단 프로필 사진을 \\n 눌러주세요"
                            },
                            {
                                "image_id": "6nseFfDWZU9uqLU875nExw",
                                "description": "내 Premium 혜택을 \\n 눌러주세요"
                            },
                            {
                                "image_id": "atNnZJz3R6oLkEFvVn3qqH",
                                "description": "멤버십 관리를 \\n 눌러주세요"
                            },
                            {
                                "image_id": "NQw99uDxKwaWaesxaxGVkZ",
                                "description": "유튜브 프리미엄을 \\n 눌러주세요"
                            },
                            {
                                "image_id": "JhkzXXsVLDECrjekFgW8NT",
                                "description": "APPLE 구독정보 관리를 \\n 눌러주세요"
                            },
                            {
                                "image_id": "SB7tCdKX22xfCmxMcwboti",
                                "description": "YouTube Premium을 \\n 눌러주세요"
                            },
                            {
                                "image_id": "jVYKV6eomaJmsf6i8Ypd3h",
                                "description": "구독 취소를 눌러 해지를 \\n 완료할 수 있어요"
                            }
                        ],
                        "enabled": true
                    },
                    "id": "LXXUX2Dniu9Hn5G9Qc5VBv",
                    "negative_image_id": "hrZJWBnyEhqjBCgPHw73R7",
                    "exclusion_summary": "",
                    "has_fixed_price": false,
                    "sub_name": "Youtube Premium",
                    "on_promotion": false,
                    "creation_date": 1591155941,
                    "payment_summary_text": "",
                    "unsubscribe_by_app": {
                        "enabled": true
                    },
                    "unsubscribe_by_app_android": {
                        "descriptions": [
                            {
                                "image_id": "HnrqEUBAioyybKobxcEovY",
                                "description": "우측 상단 프로필 사진을 \\n 눌러주세요"
                            },
                            {
                                "image_id": "jBMyJDXum2PrFeTFbt5G86",
                                "description": "내 Premium 혜택을 \\n 눌러주세요"
                            },
                            {
                                "image_id": "CndUwRq3V9uZvJefNWqRGP",
                                "description": "유튜브 프리미엄을 \\n 눌러주세요"
                            },
                            {
                                "image_id": "ddarbCxD7gvuzJX2rqMNad",
                                "description": "비활성화를 \\n 눌러주세요"
                            },
                            {
                                "image_id": "69nyu9VHVjeZMv9hGWhF8X",
                                "description": "그대로 취소를 \\n 눌러주세요"
                            },
                            {
                                "image_id": "fuJHezzzdEjWVxGsyEaxwd",
                                "description": "다음을 \\n 눌러주세요"
                            },
                            {
                                "image_id": "KfgwiAGVcXrh8Xkzs5YxsA",
                                "description": "취소 사유를 \\n 선택해 주세요"
                            },
                            {
                                "image_id": "9CM4xDT5fcHZFzbfkXhEbu",
                                "description": "PREMIUM 취소를 \\n 눌러주세요"
                            },
                            {
                                "image_id": "fbqVKaw7TUonvaP5ZGYcJb",
                                "description": "닫기로 해지를 \\n 완료할 수 있어요"
                            }
                        ],
                        "enabled": true
                    },
                    "category": "영상·음악",
                    "homepage": "https://www.youtube.com/premium",
                    "type": "product"
                },
                "service_name": "유튜브 프리미엄",
                "last_payment_date": 1646179210,
                "plan": {
                    "week": null,
                    "month": 1,
                    "year": null,
                    "day": null
                },
                "source": "auto",
                "creation_date": 1646378151.415548,
                "payment_type": "subscription",
                "user_id": "YhPRJVzKoFHrdjmg4eW3Mu",
                "update_by": "v3",
                "price": 8690,
                "hidden": false,
                "transactions": [
                    {
                        "currency": "KRW",
                        "inbound": 0,
                        "status": "normal",
                        "balance_after_transaction": 2995499,
                        "finance_vendor_id": "FWsvVUiXbPQkEtyxSQtYgZ",
                        "partition": "user_transaction",
                        "bank_account_id": null,
                        "name": "유튜브프리미엄",
                        "account_name": "[한도제한계좌2]쏠편한 입출금통장(저축예금)",
                        "account_image_id": "MyrA73r5UmQbpPusVpktwi",
                        "root_transaction_id": null,
                        "bank_account": {
                            "id": "EHsi5vEXrU4TwpWwrNGZQq"
                        },
                        "codef_transaction_id": "6220060228e6690b2f5bd54f",
                        "nickname": "유튜브프리미엄",
                        "payment_date": 1641081611,
                        "transaction_plan": {
                            "id": "m4KoAxQZhnJhUYRMG4uuJY"
                        },
                        "is_subscription": true,
                        "disabled": false,
                        "names": [
                            null,
                            "신한체",
                            "유튜브프리미엄",
                            "원신한"
                        ],
                        "outbound": 8690,
                        "owner": "4eE4U7AnGWSJK3y8LHpYmH",
                        "payment_year_month": "202201",
                        "id": "AEfG8pDKLuXGxf588vUNxE",
                        "payment_date_str": "20220102-090011",
                        "parent_transaction_id": null,
                        "summary": "유튜브프리미엄",
                        "batch_creation_id": "3ac22980-f042-4364-b75e-93a6c1594dff",
                        "account_number": "110492044158",
                        "source": "auto",
                        "creation_date": 1646265881.1622858,
                        "payment_type": "subscription",
                        "vendor_type": "bank",
                        "payment_method_name": "쏠편한 입출금통장(저축예금)",
                        "user_id": "YhPRJVzKoFHrdjmg4eW3Mu",
                        "memo": "신한체",
                        "type": "transaction"
                    },
                    {
                        "currency": "KRW",
                        "inbound": 0,
                        "status": "normal",
                        "balance_after_transaction": 1609256,
                        "finance_vendor_id": "FWsvVUiXbPQkEtyxSQtYgZ",
                        "partition": "user_transaction",
                        "bank_account_id": null,
                        "name": "유튜브프리미엄",
                        "account_name": "[한도제한계좌2]쏠편한 입출금통장(저축예금)",
                        "account_image_id": "MyrA73r5UmQbpPusVpktwi",
                        "root_transaction_id": null,
                        "bank_account": {
                            "id": "EHsi5vEXrU4TwpWwrNGZQq"
                        },
                        "codef_transaction_id": "6220060228e6690b2f5bd54f",
                        "nickname": "유튜브프리미엄",
                        "payment_date": 1643760011,
                        "transaction_plan": {
                            "id": "m4KoAxQZhnJhUYRMG4uuJY"
                        },
                        "is_subscription": true,
                        "disabled": false,
                        "names": [
                            null,
                            "신한체",
                            "유튜브프리미엄",
                            "원신한"
                        ],
                        "outbound": 7900,
                        "owner": "4eE4U7AnGWSJK3y8LHpYmH",
                        "payment_year_month": "202202",
                        "id": "JovURcsMcyRTY6GNJvLAgr",
                        "payment_date_str": "20220202-090011",
                        "parent_transaction_id": null,
                        "summary": "유튜브프리미엄",
                        "batch_creation_id": "3ac22980-f042-4364-b75e-93a6c1594dff",
                        "account_number": "110492044158",
                        "source": "auto",
                        "creation_date": 1646265884.6141655,
                        "payment_type": "subscription",
                        "vendor_type": "bank",
                        "payment_method_name": "쏠편한 입출금통장(저축예금)",
                        "user_id": "YhPRJVzKoFHrdjmg4eW3Mu",
                        "memo": "신한체",
                        "type": "transaction"
                    },
                    {
                        "currency": "KRW",
                        "inbound": 0,
                        "status": "normal",
                        "balance_after_transaction": 874201,
                        "finance_vendor_id": "FWsvVUiXbPQkEtyxSQtYgZ",
                        "partition": "user_transaction",
                        "bank_account_id": null,
                        "name": "유튜브프리미엄",
                        "account_name": "[한도제한계좌2]쏠편한 입출금통장(저축예금)",
                        "account_image_id": "MyrA73r5UmQbpPusVpktwi",
                        "root_transaction_id": null,
                        "bank_account": {
                            "id": "EHsi5vEXrU4TwpWwrNGZQq"
                        },
                        "codef_transaction_id": "6220060228e6690b2f5bd54f",
                        "nickname": "유튜브프리미엄",
                        "payment_date": 1646179210,
                        "transaction_plan": {
                            "id": "m4KoAxQZhnJhUYRMG4uuJY"
                        },
                        "is_subscription": true,
                        "disabled": false,
                        "names": [
                            null,
                            "신한체",
                            "유튜브프리미엄",
                            "원신한"
                        ],
                        "outbound": 8690,
                        "owner": "4eE4U7AnGWSJK3y8LHpYmH",
                        "payment_year_month": "202203",
                        "id": "NXfxS5w42euvH7n7iGrZJs",
                        "payment_date_str": "20220302-090010",
                        "parent_transaction_id": null,
                        "summary": "유튜브프리미엄",
                        "batch_creation_id": "3ac22980-f042-4364-b75e-93a6c1594dff",
                        "account_number": "110492044158",
                        "source": "auto",
                        "creation_date": 1646265885.2163866,
                        "payment_type": "subscription",
                        "vendor_type": "bank",
                        "payment_method_name": "쏠편한 입출금통장(저축예금)",
                        "user_id": "YhPRJVzKoFHrdjmg4eW3Mu",
                        "memo": "신한체",
                        "type": "transaction"
                    }
                ],
                "is_duplicate": false
            },
            {
                "payment_date_offset": 2592000,
                "currency": "KRW",
                "first_payment_date": 1641090044,
                "is_refunded": false,
                "price_changed": false,
                "has_incorrect_plan": false,
                "status": "paid",
                "next_payment_timestamp_corr": 0,
                "partition": "user_transaction_plan",
                "name": "디즈니 플러스",
                "next_payment_ymd": "20220402",
                "nickname": "디즈니 플러스",
                "last_transaction_name": "디즈니플러스",
                "disabled": false,
                "last_payment_ymd": "20220302",
                "payment_info": {
                    "easy": null,
                    "card": null,
                    "vendor_type": "bank",
                    "bank_account": {
                        "currency": "KRW",
                        "visible": true,
                        "image_id": "MyrA73r5UmQbpPusVpktwi",
                        "cert_expired_date": 1669042800,
                        "account_number": "110492044158",
                        "finance_vendor_id": "FWsvVUiXbPQkEtyxSQtYgZ",
                        "partition": "user_bank_account",
                        "creation_date": 1646265855.6975107,
                        "small_image_id": "fDtk7Ztw8sGLv6q9tRKtua",
                        "account_name": "[한도제한계좌2]쏠편한 입출금통장(저축예금)",
                        "balance": "874301",
                        "code": "0088",
                        "last_update_date": "20220316",
                        "user_id": "YhPRJVzKoFHrdjmg4eW3Mu",
                        "nickname": "쏠편한 입출금통장",
                        "account_deposit_type": "11",
                        "client_type": "P",
                        "owner": "4eE4U7AnGWSJK3y8LHpYmH",
                        "id": "EHsi5vEXrU4TwpWwrNGZQq",
                        "vendor_name": "신한은행",
                        "hidden": false
                    }
                },
                "is_new": false,
                "owner": "4eE4U7AnGWSJK3y8LHpYmH",
                "id": "jqrxv8k3BJ7xw4hF5bzx3n",
                "next_payment_date": 1648866033,
                "management_service": {
                    "payment_summary": "",
                    "unsubscribe_by_web": {
                        "link": "https://www.disneyplus.com/ko-kr/account",
                        "descriptions": [
                            {
                                "description": "로그인해 주세요"
                            },
                            {
                                "description": "멤버십에서 디즈니+를 눌러주세요"
                            },
                            {
                                "description": "스크롤을 내려 멤버십 취소를 눌러주세요"
                            },
                            {
                                "description": "디즈니+ 멤버십 취소를 눌러주세요"
                            },
                            {
                                "description": "해지 사유를 선택하고 계속 취소 진행을 눌러주세요"
                            }
                        ],
                        "enabled": true
                    },
                    "unsubscribe_by_store": {
                        "enabled": true
                    },
                    "sub_name": "Disneny Plus",
                    "image_id": "dxX4dX8J56yi6b6mk5Vv5T",
                    "unsubscribe_by_auto": {
                        "is_recommended": true,
                        "terminator_cmd": "disneyplus.terminate",
                        "terminator_props": [
                            {
                                "prop": {
                                    "name": "이메일",
                                    "key": "email"
                                }
                            },
                            {
                                "prop": {
                                    "name": "비밀번호",
                                    "key": "password"
                                }
                            }
                        ]
                    },
                    "payment_summary_regex": "",
                    "partition": "management_service",
                    "name": "디즈니 플러스",
                    "creation_date": 1634710017.3160753,
                    "unsubscribe_by_phone": {
                        "phone": "080-822-1416",
                        "enabled": true
                    },
                    "payment_summary_text": "",
                    "plans": [],
                    "filled_image_id": "MKtejMKsYMxQiny3AF78eb",
                    "owner": "dkGDLFzV26tUaE7kcCjrST",
                    "id": "ZmiWKrBsM9aeb26RQpHhML",
                    "negative_image_id": "KQEqbyaMisjNVWyqTbbJf5",
                    "exclusion_summary": ""
                },
                "service_name": "디즈니 플러스",
                "last_payment_date": 1646187633,
                "plan": {
                    "week": null,
                    "month": 1,
                    "year": null,
                    "day": null
                },
                "source": "auto",
                "creation_date": 1646378151.3903434,
                "payment_type": "subscription",
                "user_id": "YhPRJVzKoFHrdjmg4eW3Mu",
                "update_by": "v3",
                "price": 9900,
                "hidden": false,
                "transactions": [
                    {
                        "currency": "KRW",
                        "inbound": 0,
                        "status": "normal",
                        "balance_after_transaction": 2985599,
                        "finance_vendor_id": "FWsvVUiXbPQkEtyxSQtYgZ",
                        "partition": "user_transaction",
                        "bank_account_id": null,
                        "name": "디즈니플러스",
                        "account_name": "[한도제한계좌2]쏠편한 입출금통장(저축예금)",
                        "account_image_id": "MyrA73r5UmQbpPusVpktwi",
                        "root_transaction_id": null,
                        "bank_account": {
                            "id": "EHsi5vEXrU4TwpWwrNGZQq"
                        },
                        "codef_transaction_id": "6220060228e6690b2f5bd54f",
                        "nickname": "디즈니플러스",
                        "payment_date": 1641090044,
                        "transaction_plan": {
                            "id": "jqrxv8k3BJ7xw4hF5bzx3n"
                        },
                        "is_subscription": true,
                        "disabled": false,
                        "names": [
                            null,
                            "신한체",
                            "디즈니플러스",
                            "원신한"
                        ],
                        "outbound": 9900,
                        "owner": "4eE4U7AnGWSJK3y8LHpYmH",
                        "payment_year_month": "202201",
                        "id": "aY698tRTEkFknF3ZqbLFmC",
                        "payment_date_str": "20220102-112044",
                        "parent_transaction_id": null,
                        "summary": "디즈니플러스",
                        "batch_creation_id": "3ac22980-f042-4364-b75e-93a6c1594dff",
                        "account_number": "110492044158",
                        "source": "auto",
                        "creation_date": 1646265881.6396277,
                        "payment_type": "subscription",
                        "vendor_type": "bank",
                        "payment_method_name": "쏠편한 입출금통장(저축예금)",
                        "user_id": "YhPRJVzKoFHrdjmg4eW3Mu",
                        "memo": "신한체",
                        "type": "transaction"
                    },
                    {
                        "currency": "KRW",
                        "inbound": 0,
                        "status": "normal",
                        "balance_after_transaction": 1599356,
                        "finance_vendor_id": "FWsvVUiXbPQkEtyxSQtYgZ",
                        "partition": "user_transaction",
                        "bank_account_id": null,
                        "name": "디즈니플러스",
                        "account_name": "[한도제한계좌2]쏠편한 입출금통장(저축예금)",
                        "account_image_id": "MyrA73r5UmQbpPusVpktwi",
                        "root_transaction_id": null,
                        "bank_account": {
                            "id": "EHsi5vEXrU4TwpWwrNGZQq"
                        },
                        "codef_transaction_id": "6220060228e6690b2f5bd54f",
                        "nickname": "디즈니플러스",
                        "payment_date": 1643768438,
                        "transaction_plan": {
                            "id": "jqrxv8k3BJ7xw4hF5bzx3n"
                        },
                        "is_subscription": true,
                        "disabled": false,
                        "names": [
                            null,
                            "신한체",
                            "디즈니플러스",
                            "원신한"
                        ],
                        "outbound": 9900,
                        "owner": "4eE4U7AnGWSJK3y8LHpYmH",
                        "payment_year_month": "202202",
                        "id": "TkMFt3Smw2jJHJ62M2wUE2",
                        "payment_date_str": "20220202-112038",
                        "parent_transaction_id": null,
                        "summary": "디즈니플러스",
                        "batch_creation_id": "3ac22980-f042-4364-b75e-93a6c1594dff",
                        "account_number": "110492044158",
                        "source": "auto",
                        "creation_date": 1646265884.4582098,
                        "payment_type": "subscription",
                        "vendor_type": "bank",
                        "payment_method_name": "쏠편한 입출금통장(저축예금)",
                        "user_id": "YhPRJVzKoFHrdjmg4eW3Mu",
                        "memo": "신한체",
                        "type": "transaction"
                    },
                    {
                        "currency": "KRW",
                        "inbound": 0,
                        "status": "normal",
                        "balance_after_transaction": 864301,
                        "finance_vendor_id": "FWsvVUiXbPQkEtyxSQtYgZ",
                        "partition": "user_transaction",
                        "bank_account_id": null,
                        "name": "디즈니플러스",
                        "account_name": "[한도제한계좌2]쏠편한 입출금통장(저축예금)",
                        "account_image_id": "MyrA73r5UmQbpPusVpktwi",
                        "root_transaction_id": null,
                        "bank_account": {
                            "id": "EHsi5vEXrU4TwpWwrNGZQq"
                        },
                        "codef_transaction_id": "6220060228e6690b2f5bd54f",
                        "nickname": "디즈니플러스",
                        "payment_date": 1646187633,
                        "transaction_plan": {
                            "id": "jqrxv8k3BJ7xw4hF5bzx3n"
                        },
                        "is_subscription": true,
                        "disabled": false,
                        "names": [
                            null,
                            "신한체",
                            "디즈니플러스",
                            "원신한"
                        ],
                        "outbound": 9900,
                        "owner": "4eE4U7AnGWSJK3y8LHpYmH",
                        "payment_year_month": "202203",
                        "id": "W4hYfgKdGUUHkCy6mv5WGY",
                        "payment_date_str": "20220302-112033",
                        "parent_transaction_id": null,
                        "summary": "디즈니플러스",
                        "batch_creation_id": "3ac22980-f042-4364-b75e-93a6c1594dff",
                        "account_number": "110492044158",
                        "source": "auto",
                        "creation_date": 1646265885.1070306,
                        "payment_type": "subscription",
                        "vendor_type": "bank",
                        "payment_method_name": "쏠편한 입출금통장(저축예금)",
                        "user_id": "YhPRJVzKoFHrdjmg4eW3Mu",
                        "memo": "신한체",
                        "type": "transaction"
                    }
                ],
                "is_duplicate": false
            }
        ]
    }

}

export const navigator_list = [
    {
        name: '申请用户管理',
        key: 'student_module',
        type: 'menu',
        mId: 0,
        children: [
            {
                name: '已注册用户列表',
                key: 'registered_user',
                id: 0,
            },
            {
                name: '注册用户验证列表',
                key: 'user_validate',
                id: 1,
            },
        ],
    },
    {
        name: '预约管理',
        key: 'book_module',
        type: 'module',
        id: 2,
    },
    {
        name: '修改个人信息',
        key: 'personal_module',
        type: 'module',
        id: 3,
    },
    {
        name: '管理员管理',
        key: 'admin_module',
        type: 'menu',
        mId: 1,
        children: [
            {
                name: '管理员列表',
                key: 'admin_list',
                id: 4,
            },
            {
                name: '收件人管理',
                key: 'receiver_list',
                id: 5,
            },
        ],
    },
    {
        name: '锁定管理',
        key: 'lock_module',
        type: 'menu',
        mId: 2,
        children: [
            {
                name: '锁定列表',
                key: 'lock_list',
                id: 6,
            },
            {
                name: '添加锁定',
                key: 'add_lock',
                id: 7,
            }
        ],
    },
];

export const registered_user_table = [
    {
        name: '用户名',
        type: 'content',
        key: 'user_name',
        width: 523,
    },
    {
        name: '电子邮箱',
        type: 'content',
        key: 'email',
        width: 523,
    },
    {
        name: '状态',
        type: 'button',
        key: 'status',
        width: 523,
    },
];

export const validate_user_table = [
    {
        name: '学号',
        type: 'content',
        key: 'student_id',
        width: 380,
    },
    {
        name: '姓名',
        type: 'content',
        key: 'student_name',
        width: 380,
    },
    {
        name: '编辑',
        type: 'button',
        key: 'edit_info',
        width: 380,
    },
    {
        name: '删除',
        type: 'button',
        key: 'delete_info',
        width: 380,
    },
];

export const book_info_table = [
    {
        name: '申请人',
        type: 'content',
        key: 'applier',
        width: 173,
    },
    {
        name: '联系方式',
        type: 'content',
        key: 'phone_number',
        width: 173,
    },
    {
        name: '申请场地',
        type: 'content',
        key: 'place',
        width: 173,
    },
    {
        name: '主办方',
        type: 'content',
        key: 'holder',
        width: 173,
    },
    {
        name: '申请主题',
        type: 'content',
        key: 'title',
        width: 173,
    },
    {
        name: '申请内容',
        type: 'content',
        key: 'content',
        width: 173,
    },
    {
        name: '申请时间',
        type: 'content',
        key: 'time',
        width: 173,
    },
    {
        name: '状态',
        type: 'button',
        key: 'status',
        width: 173,
    },
    {
        name: '查看详情',
        type: 'button',
        key: 'detailed_info',
        width: 173,
    },
];

export const user_info_form = [
    {
        name: '学号',
        key: 'student_id',
        type: 'input',
    },
    {
        name: '姓名',
        key: 'student_name',
        type: 'input',
    }
];

export const set_status_form = [
    {
        name: '违规情况',
        key: 'status',
        type: 'toggle',
    },
    {
        name: '说明',
        key: 'ps',
        type: 'textarea',
    }
];

export const detailed_apply_info_form = [
    {
        name: '申请人',
        key: 'applier',
        type: 'input',
    },
    {
        name: '申请人联系方式',
        key: 'phone',
        type: 'input',
    },
    {
        name: '主办方',
        key: 'holder',
        type: 'input',
    },
    {
        name: '申请场地',
        key: 'place',
        type: 'input',
    },
    {
        name: '申请主题',
        key: 'title',
        type: 'input',
    },
    {
        name: '申请内容',
        key: 'content',
        type: 'input',
    },
    {
        name: '申请时间',
        key: 'content',
        type: 'time',
    },
    {
        name: '使用图片',
        key: 'img',
        type: 'custom',
    },
    {
        name: '当前状态',
        key: 'status',
        type: 'selection',
    },
    {
        name: '备注',
        key: 'ps',
        type: 'textarea',
    },
];

export const edit_admin_info = [
    {
        name: '邮箱',
        key: 'email',
        type: 'input',
    },
    {
        name: '登录名',
        key: 'admin_name',
        type: 'input',
    }
];

export const edit_admin_password = [
    {
        name: '密码',
        key: 'password',
        type: 'input',
    },
    {
        name: 'password',
        key: 'admin_name',
        type: 'input',
    }
];

export const admin_table = [
    {
        name: '用户名',
        type: 'content',
        key: 'admin_name',
        width: 380,
    }, {
        name: '电子邮箱',
        type: 'content',
        key: 'email',
        width: 380,
    }, {
        name: '状态',
        type: 'button',
        key: 'status',
        width: 380,
    }, {
        name: '删除',
        type: 'button',
        key: 'delete',
        width: 380,
    },
];

export const receiver_table = [
    {
        name: '用户名',
        type: 'content',
        key: 'admin_name',
        width: 380,
    }, {
        name: '电子邮箱',
        type: 'content',
        key: 'email',
        width: 380,
    }, {
        name: '状态',
        type: 'button',
        key: 'status',
        width: 380,
    }, {
        name: '删除',
        type: 'button',
        key: 'delete',
        width: 380,
    },
];

export const root_log_in = [
    {
        name: '用户名',
        key: 'admin',
        type: 'content',
    },
    {
        name: '密码',
        key: 'password',
        type: 'password',
    }
];
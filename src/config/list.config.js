const logInList = [
    {
        name: '学号',
        key: 'stu_id',
    },
    {
        name: '密码',
        key: 'password',
    },
    {
        name: '验证码',
        key: 'validate_code',
    }
];
const findBackList = [
    {
        name: '请输入学号',
        key: 'stu_id',
    },
];
const registList = [
    {
        name: '学号',
        key: 'stu_id',
    },
    {
        name: '姓名',
        key: 'stu_name',
    },
    {
        name: '电话',
        key: 'phone',
    },
    {
        name: '邮箱',
        key: 'email',
    },
    {
        name: 'password',
        key: '密码',
    }
];
const applyFormList = [
    {
        name: '活动主办方',
        placeHolder: '请输入活动主办方',
        key: 'holder',
    },
    {
        name: '申请主题',
        placeHolder: '请输入申请主题',
        key: 'title',
    },
    {
        name: '申请内容',
        placeHolder: '请输入申请内容',
        key: 'content'
    },
];
const naviList = [
    {
        name: '账号状态',
        key: 'status',
    },
    {
        name: '修改信息',
        key: 'change_info'
    },
    {
        name: '查看预约记录',
        key: 'reservation_log'
    },
    {
        name: '违章记录',
        key: 'regulation_log',
    },
    {
        name: '注销登录',
        key: 'log_out',
    },
    {
        name: '返回首页',
        key: 'return_index',
    },
];
const regulationLogForm = [
    {
        name: '违章时间',
        key: 'regulation_time',
        width: 200,
    },
    {
        name: '违章原因',
        key: 'regulation_reason',
        width: 1219,
    },
];
const changeInfoSels = [
    {
        name: '编辑信息',
        key: 'edit_info'
    },
    {
        name: '修改密码',
        key: 'change_password',
    }
];
const editInfoList = [
    {
        name: '电话',
        key: 'phone',
    },
    {
        name: '邮箱',
        key: 'email',
    },
];
const changePasswordList = [
    {
        name: '输入密码',
        key: 'password',
    },
    {
        name: '重复密码',
        key: 'repeat_password',
    },
];
const detailedInfoForm = [
    {
        name: '主办方',
        key: 'holder',
    },
    {
        name: '申请主题',
        key: 'title',
    },
    {
        name: '申请场地',
        place: 'place',
    },
    {
        name: '申请时间',
        place: 'time',
    },
    {
        name: '当前状态',
        place: 'status',
    },
    {
        name: '备注',
        place: 'ps'
    }
];
const reservationLogList = [
    {
        name: '主办方',
        type: 'content',
        key: 'holder',
    },
    {
        name: '申请场地',
        type: 'content',
        key: 'place',
    },
    {
        name: '申请主题',
        type: 'content',
        key: 'title',
    },
    {
        name: '查看详情',
        type: 'button',
        key: 'detailed',
    },
    {
        name: '上传照片(5张)',
        type: 'button',
        key: 'upload',
    }
];

const description = '歌尔众创空间是中国海洋大学信息科学与工程学院联合歌尔股份有限公司共同创建的创新创教育的产物，是学院校企合作的重要成果。同时是学生碰撞思想、激发创意的空间，科技创新、训练思维的平台，创新创业、项目孵化的基地。';

export {
    logInList,
    findBackList,
    registList,
    applyFormList,
    naviList,
    regulationLogForm,
    changeInfoSels,
    editInfoList,
    changePasswordList,
    detailedInfoForm,
    reservationLogList,
    description,
}

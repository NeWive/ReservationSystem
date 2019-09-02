const logInList = [
    {
        name: '学号',
        key: 'stu_id',
        type: 'text'
    },
    {
        name: '密码',
        key: 'password',
        type: 'password'
    },
    {
        name: '验证码',
        key: 'validate_code',
        type: 'text'
    }
];
const findBackList = [
    {
        name: '请输入学号',
        key: 'stu_id',
    },
];
const registerList = [
    {
        name: '学号',
        key: 'stu_id',
        type: 'text'
    },
    {
        name: '姓名',
        key: 'stu_name',
        type: 'text'
    },
    {
        name: '电话',
        key: 'phone',
        type: 'text'
    },
    {
        name: '邮箱',
        key: 'email',
        type: 'text'
    },
    {
        name: '密码',
        key: 'password',
        type: 'password'
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
];
const regulationLogForm = [
    {
        name: '违章时间',
        key: 'regulation_time',
        width: 200,
        type: 'content',
    },
    {
        name: '违章原因',
        key: 'regulation_reason',
        width: 1010,
        type: 'content',
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
        name: '账号密码',
        key: 'password',
    },
    {
        name: '新的密码',
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
        width: 150,
    },
    {
        name: '申请场地',
        type: 'content',
        key: 'place',
        width: 172,
    },
    {
        name: '申请主题',
        type: 'content',
        key: 'title',
        width: 172,
    },
    {
        name: '申请内容',
        type: 'content',
        key: 'content',
        width: 172,
    },
    {
        name: '申请时间',
        type: 'content',
        key: 'time',
        width: 165,
    },
    {
        name: '状态',
        type: 'panel',
        key: 'status',
        width: 89,
    },
    {
        name: '查看详情',
        type: 'button',
        key: 'detailed',
        width: 150,
    },
    {
        name: '上传照片(5张)',
        type: 'button',
        key: 'upload',
        width: 150,
    }
];

const description = '歌尔众创空间是中国海洋大学信息科学与工程学院联合歌尔股份有限公司共同创建的创新创教育的产物，是学院校企合作的重要成果。同时是学生碰撞思想、激发创意的空间，科技创新、训练思维的平台，创新创业、项目孵化的基地。';

export {
    logInList,
    findBackList,
    registerList,
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

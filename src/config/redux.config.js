const initState = {
    isLogin: true,
    displayedImgIndex: 0,
    logPanelIndex: 0,//0:登陆，1：找回密码，2：注册
    stuInfo: {
        name: '赵狗蛋',
    },
    indexPanelIndex: 0,//0:帐号状态,1:修改信息,2:查看预约记录,3:违章记录,
    selectedTime: 0,
    selectedPlace: 0,
    reservationIndex: 2,
};

const actionType = {
    'SET_IS_LOG_IN': 'isLogin',
    'SET_DISPLAYED_IMG_INDEX': 'displayedImgIndex',
    'SET_LOG_PANEL_INDEX': 'logPanelIndex',
    'SET_INDEX_PANEL_INDEX': 'indexPanelIndex',
    'SET_RESERVATION_INDEX': 'reservationIndex',
    'SET_SELECTED_TIME': 'selectedTime',
    'SET_SELECTED_PLACE': 'selectedPlace',
};

const updateGroup = { type: actionType, action: 0 };
function updateStateHandler(state, action, type) {
    state[updateGroup.type[type]] = action.value;
}

function getInitState(state) {
    let initState = {};
    // eslint-disable-next-line no-unused-vars
    for(let item in state) {
        if(state.hasOwnProperty(item)) {
            initState[item] = state[item];
        }
    }
    return initState;
}

const reducersHandler = (state, action) => {
    let initState = getInitState(state);
    updateStateHandler(initState, action, action.type);
    return initState;
};

const reducer = (state = initState, action) => {
    return reducersHandler(state, action);
};

export {
    reducer
}
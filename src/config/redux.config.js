const initState = {
    isLogin: false,
    displayedImgIndex: 0,
    logPanelIndex: 0,
};

const actionType = {
    'SET_IS_LOG_IN': 'isLogin',
    'SET_DISPLAYED_IMG_INDEX': 'displayedImgIndex',
    'SET_LOG_PANEL_INDEX': 'logPanelIndex',
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
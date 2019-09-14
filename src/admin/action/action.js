import * as constant from "../constant/constant";

export const setIsLogIn = (value) => ({
    type: constant.LOG_IN,
    value,
});

export const setModuleId = (value) => ({
    type: constant.ADMIN_MODULE_ID,
    value,
});

export const setIsMenuOpen = (value) => ({
    type: constant.ADMIN_MENU_OPEN,
    value,
});

export const setPortalStatus = (value) => ({
    type: constant.SET_PORTAL_STATUS,
    value,
});

export const setPortalId = (value) => ({
    type: constant.SET_PORTAL_ID,
    value,
});

export const setPortalTarget = (value) => ({
    type: constant.SET_ADMIN_PORTAL_TARGET,
    value,
});
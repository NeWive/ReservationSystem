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
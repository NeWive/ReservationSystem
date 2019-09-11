import * as constant from "../constant/constant";

export const setIsLogIn = (value) => ({
    type: constant.LOG_IN,
    value,
});

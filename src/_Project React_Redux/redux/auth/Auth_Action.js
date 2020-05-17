export const SET_AUTH_DATA = "SET_USERS_DATA";
export const SET_CAPTCHA = "SET_CAPTCHA";

export const setAuthData = (id, email, login, isAuth) => ({
    type: SET_AUTH_DATA,
    payload: {id, email, login, isAuth}
});

export const setCaptcha = (url) => ({
    type: SET_CAPTCHA,
    payload: url
});


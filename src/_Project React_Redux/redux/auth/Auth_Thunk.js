import {setAuthData, setCaptcha} from "./Auth_Action";
import {LoginAPI} from "../../api/api";
import {stopSubmit} from "redux-form";

export const RequestAuthUserData = () => {
    return async (dispatch) => {
        const data = await LoginAPI.me();
        if (data.resultCode === 0) {
            let {id, email, login} = data.data;
            dispatch(setAuthData(id, email, login, true ))

        }
    }

};
export const loginRequest = (email, password, rememberMe=false, captcha=null) => {
    return async (dispatch) => {
        const data = await LoginAPI.login(email, password, rememberMe, captcha);
        if (data.resultCode === 0) {
            dispatch(RequestAuthUserData())
            dispatch(setCaptcha(null))
        }else if(data.resultCode > 0){
            let errorMessage =data.messages.length > 0 ? data.messages[0] : "Some error"
            dispatch(stopSubmit("login", {_error: errorMessage}))
            if(data.resultCode === 10){
                dispatch(RequestCaptcha())
            }
        }
    }

};
export const logoutRequest = () => {
    return async (dispatch) => {
        const data = await LoginAPI.logout();
        if (data.resultCode === 0) {
            dispatch(setAuthData(null, null, null, false));
        }
    }

};
export const RequestCaptcha = () => {
    return async (dispatch) => {
        const data = await LoginAPI.captcha();
        dispatch(setCaptcha(data.url))

    }

};
import {SET_CAPTCHA, SET_AUTH_DATA} from "./Auth_Action";


let initialState={
    id: null,
    email: '',
    login: '',
    isAuth: false,
    captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.payload,
            };
            case SET_CAPTCHA:
            return {
                ...state,
                captchaUrl: action.payload,
            };

        default:
            return state
    }
};


export default authReducer;
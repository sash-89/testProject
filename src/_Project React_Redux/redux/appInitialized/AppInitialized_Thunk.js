import {RequestAuthUserData} from "../auth/Auth_Thunk";
import {initialization} from "./AppInitialized_Action";


export const initializeApp = () => {
    return async (dispatch) => {
        const promise = await dispatch(RequestAuthUserData());
        await Promise.all([promise])
        await dispatch(initialization())
    }
};
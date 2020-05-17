import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import {reducer as formReducer} from 'redux-form';
import profileReducer from "./profile_page/ProfilePage_Reducer";
import dialogsReducer from "./dialogs_page/D_P_Reducer";
import usersReducer from "./users_page/UsersPage_Reducer";
import authReducer from "./auth/Auth_Reducer";
import appReducer from "./appInitialized/AppInitialized_Reducer";
import shopReducer from "./shop_page/ShopPage_Reducer";
import {rootSaga} from "./shop_page/ShopPage_Saga";

let reducers = combineReducers({
    auth: authReducer,
    appInitialize: appReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    shopPage: shopReducer,
    form: formReducer
});

const sagaMiddleware = createSagaMiddleware()
let store = createStore(reducers, applyMiddleware(thunkMiddleware, sagaMiddleware));
sagaMiddleware.run(rootSaga)

window.store =store;

export default store;
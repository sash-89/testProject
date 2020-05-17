import {INITIALIZED_SUCCESSFULLY} from "./AppInitialized_Action";


let initialState={
    initialized: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESSFULLY:
            return {
                ...state,
                initialized: true,
            };
        default:
            return state
    }
};


export default appReducer;
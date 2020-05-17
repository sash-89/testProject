import {createSelector} from "reselect";

const getAuthId= (state) => {
    return state.auth.id
};

export const getAuthIdSelector = createSelector(getAuthId, (authId) => {
    return authId.filter(id => true);
});



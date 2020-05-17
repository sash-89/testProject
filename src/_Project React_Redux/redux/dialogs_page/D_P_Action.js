export const ADD_MESSAGE = "ADD_MESSAGE";
export const NEW_MESSAGE_TEXT = "NEW_MESSAGE_TEXT";
export const DELETE_MESSAGE = "DELETE_MESSAGE";
export const GET_MESSAGE = "GET_MESSAGE";
export const CHANGE_OLD_MESSAGE_TEXT = "CHANGE_OLD_MESSAGE_TEXT";


export const addMessage = (newMessage) => ({
    type: ADD_MESSAGE,
    payload: newMessage
});
export const changeMessageText = (text) => ({
    type: NEW_MESSAGE_TEXT,
    payload: text
});
export const deleteMessage = (id) => ({
    type: DELETE_MESSAGE,
    payload: id
});
export const getMassage = (id, text) => ({
    type: GET_MESSAGE,
    payload: {id, text}
})
;export const changeOldMessageText = (text) => ({
    type: CHANGE_OLD_MESSAGE_TEXT,
    payload: text
});


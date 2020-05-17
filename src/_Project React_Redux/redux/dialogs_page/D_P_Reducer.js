import {ADD_MESSAGE, CHANGE_OLD_MESSAGE_TEXT, DELETE_MESSAGE, GET_MESSAGE, NEW_MESSAGE_TEXT} from "./D_P_Action";


let initialState={
    messages: [
        {id: 1, text: "Все хорошо"},
        {id: 2, text: "Привет всем"},
        {id: 3, text: "Все круто"},
    ],
    messageText: "",
    message: {id: null, text: null}

};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id:(new Date().getTime()), text: action.payload}],
                messageText : '',
            };
        case NEW_MESSAGE_TEXT:
            return {
                ...state,
                messageText : action.payload,
            };
        case DELETE_MESSAGE:
            return {
                ...state,
                messages : state.messages.filter( message => message.id!==action.payload)
            };
            case GET_MESSAGE:
            return {
                ...state,
                message : action.payload
            };
        case CHANGE_OLD_MESSAGE_TEXT:
            return {
                ...state,
                messages : state.messages.map( message => message.id!==state.message.id ? message
                :   {...message, text: action.payload}),
                message: {id: null, text: null}
    };
        default:
            return state
    }
};


export default dialogsReducer;
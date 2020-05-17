import React, {useState} from 'react';
import style from './Messages/Messages.module.css';
import Messages from "./Messages/Messages";
import MessagesInput from "./MessagesInput/MessagesInput";
import {connect} from "react-redux";
import {
    addMessage,
    changeMessageText,
    changeOldMessageText,
    deleteMessage, getMassage
} from "../../../redux/dialogs_page/D_P_Action";



const MessagesContainer = ({messages, messageText,messageId, addMessage,deleteMessage, getMassage, changeOldMessageText}) => {
    const [menu, menuToggle] = useState(false);
      return (
        <div className={style.Container} onClickCapture={()=>menuToggle(false)}>
            <Messages deleteMessage={deleteMessage} getMassage={getMassage} messages={messages} menu={menu} menuToggle={menuToggle}/>
            <MessagesInput messages={messages} messageText={messageText} addMessage={addMessage}
                           messageId={messageId} changeOldMessageText={changeOldMessageText}/>
        </div>
    )

}
const MapStateToProps =(state)=>({
    messages: state.dialogsPage.messages,
    messageText: state.dialogsPage.messageText,
    messageId: state.dialogsPage.message.id,
});


export default connect (MapStateToProps, {addMessage, changeMessageText, deleteMessage, getMassage, changeOldMessageText})(MessagesContainer);

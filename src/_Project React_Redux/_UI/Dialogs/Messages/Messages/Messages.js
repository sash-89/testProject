import React, {useState} from 'react';
import menuIcon from './three-dots-menu.png';
import style from './Messages.module.css';
import FlipMove from "react-flip-move";



const Messages = ({messages, deleteMessage, getMassage,menu, menuToggle}) => {
    const [messageId, setMessageId] = useState(null);


    const editMode =(id, text)=> {
      return  (
            <div className={style.MenuWrapper}>
                <img className={style.MenuIco} src={menuIcon} alt="menu" onClick={()=>{menuToggle(true);
                    setMessageId(id)}}/>
                {(menu && messageId===id)&&<div
                 className={style.Menu}>
                    <span onClick={()=>deleteMessage(id)}>удалить</span>
                    <span onClick={()=>getMassage(id, text)}>изменить</span>
                </div>
                }
            </div>
        )
    };
    return (
            <div className={style.Messages} >
                <FlipMove duration={300} easing="ease-in-out">
                {messages.map(message => {
                    return (
                        <div className={style.Msg} key={message.id}>
                            <p>{message.text}</p>
                            <div className={style.MenuToggle}>{editMode(message.id, message.text)}</div>
                        </div>
                    )
                })}
                </FlipMove>
            </div>
    )
};


export default Messages;

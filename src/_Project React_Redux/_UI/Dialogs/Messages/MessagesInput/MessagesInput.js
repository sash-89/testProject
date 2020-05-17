import React, {useEffect, useRef} from 'react';
import style from './MessagesInpute.module.css'
import Button from "../../../common/Button/button";
import {Field, reduxForm, reset} from "redux-form";
import {connect} from "react-redux";
import {updateUserStatus} from "../../../../redux/profile_page/ProfilePage_Action";
import FormElement from "../../../common/ReduxForms/FormsControl";

const MessagesForm = ({handleSubmit, initialValues})=>{
    const myR = useRef(null);
    useEffect(() => {
        if(initialValues.messageText) myR.current.focus()
    }, [initialValues.messageText]);

    return(
        <form onSubmit={handleSubmit}>
            <Field refs={myR} className={style.MessagesText} name={"messageText"} element={"textarea"} component={FormElement} placeholder={"Новое сообщение"} />
            <Button className={style.Btn} value={"Добавить Сообщение"}/>
        </form>
    )
};


let MessageReduxForm = reduxForm({form: "message" , enableReinitialize: true })(MessagesForm);

MessageReduxForm = connect(
    state => ({
            initialValues: {
                messageText: state.dialogsPage.message.text
            }}

    ), {updateUserStatus})(MessageReduxForm);


const MessagesInput = ({messages, messageId, addMessage, changeOldMessageText}) => {
    const myRef = useRef(null);
    useEffect(() => {
        myRef.current.scrollIntoView({block: 'start', behavior: 'auto'}) //behavior: 'auto'и 'smooth' - анимация
    }, [messages]);


    const submit = (values, dispatch) => {
        if(messageId) {
            changeOldMessageText(values.messageText);
        }else if (values.messageText) {
            addMessage(values.messageText);
            dispatch(reset("message"))
        }
    };


    return (
            <div ref={myRef}>
                <MessageReduxForm onSubmit={submit}/>
            </div>
    )

};


export default MessagesInput;

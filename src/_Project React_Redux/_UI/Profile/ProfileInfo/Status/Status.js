import React, { useState} from 'react';
import style from './Status.module.css'
import {Field, reduxForm, stopSubmit} from "redux-form";
import FormElement from "../../../common/ReduxForms/FormsControl";
import {maxLengthCreator, required} from "../../../common/ReduxForms/validators";
import {connect} from "react-redux";
import {updateUserStatus} from "../../../../redux/profile_page/ProfilePage_Action";

const StatusForm = (props) => {


    return (
        <form onSubmit={(e)=>stopSubmit(e.preventDefault())}>
            <Field onBlur={props.deactiveEditMode} normalize={(value)=>props.updateUserStatus(value)}
                   placeholder={"Статус"}  autoFocus name={"stat"} component={FormElement} validate={[required, maxLengthCreator]}/>

        </form>
    )

};

let StatusReduxForm = reduxForm({form: "status" , enableReinitialize: true })(StatusForm);

StatusReduxForm = connect(
    state => ({
        initialValues: {
            stat: state.profilePage.status
        }}

    ), {updateUserStatus})(StatusReduxForm);

const Status = ({authorizedUserId, userId,status, updateUserStatusData}) => {
    const [editMode, changeEditMode] = useState(false);
    const divCls = [style.LegendIn, style.LegendUp];

    if (editMode) divCls.pop();

    const activeEditMode = () => {
        authorizedUserId === +userId && changeEditMode(true)

    };

    const deactiveEditMode = () => {
        changeEditMode(false);
        updateUserStatusData(status)
    };

    return (

        <div className={style.Container}>
            <fieldset className={style.Wrapper}>
                <legend className={divCls.join(" ")}>Статус</legend>
                <div className={style.Status}>
                    {!editMode ?
                        <div onDoubleClick={activeEditMode}>&nbsp;{status}</div>
                        : <StatusReduxForm deactiveEditMode={deactiveEditMode} status={status} />
                    }
                </div>
            </fieldset>
        </div>



    );
};

export default Status;

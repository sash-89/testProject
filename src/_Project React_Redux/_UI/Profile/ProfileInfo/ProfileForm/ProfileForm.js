import React from 'react';
import style from './ProfileForm.module.css';
import closeImg from "./close.png";
import {reduxForm} from "redux-form";
import FormElement, {createField} from "../../../common/ReduxForms/FormsControl";
import {connect} from "react-redux";
import {updateUserStatus} from "../../../../redux/profile_page/ProfilePage_Action";
import Button from "../../../common/Button/button";


const ProfileForm = ({ handleSubmit, setEditMode,contacts, error}) => {

    return <form onSubmit={handleSubmit}  className={style.EditForm}>
            <span>
                <img src={closeImg} alt="Закрыть" onClick={()=>setEditMode(false)}/>
                <Button className={style.Btn} value={"Сохранить изменения"}/>
            </span>
            {error && <span className={style.formSummaryError}>
                {error}
            </span>
            }
            <span>
                <b>Full name</b>: {createField("Full name", "fullName", [], FormElement, {autoFocus:true})}
            </span>
            <span>
                <b>Looking for a job</b>: {createField("", "lookingForAJob", [], FormElement, {type: "checkbox"})}
            </span>

            <span>
                <b>My professional skills</b>:
                {createField("My professional skills", "lookingForAJobDescription", [], FormElement)}
            </span>


            <span>
                <b>About me</b>:
                {createField("About me", "aboutMe", [], (props) => FormElement({...props, element: "textarea"}))}
            </span>
            <span>
                <b>Contacts</b> {Object.keys(contacts).map(key => {
                return <span key={key} className={style.Contact}>
                    <b>{key}: {createField(key, "contacts." + key, [], FormElement)}</b>
                </span>
            })}
            </span>
        </form>

}


let ProfileFormData = reduxForm({form: 'edit-profile' , enableReinitialize: true })(ProfileForm);

ProfileFormData = connect(
    state => ({
            initialValues: state.profilePage.userProfile

    }), {updateUserStatus})(ProfileFormData);

export default ProfileFormData;


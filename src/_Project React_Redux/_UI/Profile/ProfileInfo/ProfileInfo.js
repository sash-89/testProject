import React, {useState} from 'react';
import style from './ProfileInfo.module.css'
import avaImg from "../../Users/img_504586.png";
import uploadAva from "./img_401107.png";
import Status from "./Status/Status";
import ProfileDataForm from "./ProfileForm/ProfileForm";
import ProfileData from "./ProfileData/ProfileData";



const ProfileInfo = ({authorizedUserId, userId, userProfile, status, updateUserStatus, updateUserStatusData, saveProfileData, loadPhoto}) => {
    const {contacts, photos}= userProfile;
    const {large}=photos;              /*small*/

    const [editMode, setEditMode] = useState(false);

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            loadPhoto(e.target.files[0]);
        }
    };

    const submit = (formData) => {
        saveProfileData(formData).then(
            () => {
                setEditMode(false);
            }
        );
    };

    return (
        <div className={style.Container}>
            <div className={style.AvatarWrapper}>
                {authorizedUserId === userProfile.userId && <div className={style.UploadIcon}>
                    <label htmlFor="inpFile"><img src={uploadAva} title={"Загрузить аватар"}
                                                  alt="Загрузить аватар"/></label> <input id="inpFile" type="file" accept="image/*"
                                                                                          onChange={onMainPhotoSelected}/>
                </div>}
                <img className={style.Avatar} src={large ? large : avaImg} alt=""/>
            </div>

            <div className={style.Info}>
                {editMode && <span className={style.EditMode}>
                    <ProfileDataForm setEditMode={setEditMode} contacts={contacts} onSubmit={submit}/>
                </span>}
                <ProfileData authorizedUserId={authorizedUserId} userProfile={userProfile} setEditMode={setEditMode}/>
            </div>

            <div className={style.Status}>
                <Status authorizedUserId={authorizedUserId} userId={userId} status={status}
                        updateUserStatus={updateUserStatus} updateUserStatusData={updateUserStatusData}/>
            </div>

        </div>


    );
};

export default ProfileInfo;

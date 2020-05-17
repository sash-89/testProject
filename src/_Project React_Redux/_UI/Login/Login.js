import React from 'react';
import style from './Login.module.css'
import {Field, formValueSelector, reduxForm, reset} from "redux-form";
import Button from "../common/Button/button";
import {connect} from "react-redux";
import {correctEmail, maxLengthCreator, required} from "../common/ReduxForms/validators";
import FormElement from "../common/ReduxForms/FormsControl";
import {loginRequest} from "../../redux/auth/Auth_Thunk";
import {Redirect} from "react-router-dom";

const upper = value => value && value.toLowerCase();

const LoginForm = (props) => {
    const loginCls = [style.LegendIn, style.LegendUp];
    const passwordCls = [style.LegendIn, style.LegendUp];

    if (!props.loginValue) loginCls.pop();
    if (!props.passwordValue) passwordCls.pop();

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={style.Wrapper}>
                <fieldset className={style.Fieldset}>
                    <legend className={loginCls.join(" ")}>Введите Email</legend>
                    <Field  validate={[required, correctEmail]} warn={maxLengthCreator} normalize={upper} className={style.Input} name={"email"} component={FormElement} placeholder={"Введите Email"}/>
                </fieldset>
            </div>
            <div className={style.Wrapper}>
                <fieldset className={style.Fieldset}>
                    <legend className={passwordCls.join(" ")}>Введите пароль</legend>
                    <Field autoComplete="off" className={style.Input} name={"password"} component={"input"} type={"password"} placeholder={"Введите пароль"}/>
                </fieldset>
            </div>

            <div className={style.RememberMe}>
               Remember <Field className={style.RM} name={"rememberMe"} component={"input"} type={"checkbox"}/>
            </div>
            {props.error && <p>{props.error}</p>}

            {props.captcha && <div className={style.Wrapper}>
            <img src={props.captcha} alt="captcha"/>
            <Field autoComplete="off" className={style.Input} name={"captcha"} component={"input"} placeholder={"Введите captcha"}/>
            </div>
            }
            <div >
                <Button disabled={!props.valid} className={style.Btn} value={"Войти"}/>
            </div>
        </form>
    )

};

let LoginReduxForm = reduxForm({form: "login"})(LoginForm);

const selector = formValueSelector('login');// <-- same as form name
LoginReduxForm = connect(
    state => {
        const loginValue = selector(state, 'email');
        const passwordValue = selector(state, 'password');

        return {
            loginValue,
            passwordValue
            // fullName: `${firstName || ''} ${lastName || ''}`
        }
    })(LoginReduxForm);



const Login =({isAuth, captcha, loginRequest})=>{
    if(isAuth) {
        return <Redirect to={"/react-redux/profile/"}/>
    }

    const submit =(formData, dispatch)=>{
        const {email, password, rememberMe, captcha}=formData
        // dispatch(reset("login"));
        loginRequest(email, password, rememberMe, captcha)
    };

    return(
        <div className={style.Container}>
            <LoginReduxForm captcha={captcha} onSubmit={submit}/>
        </div>
    )

};

export default connect (state=>{
   return {isAuth: state.auth.isAuth, captcha: state.auth.captchaUrl}
}, {loginRequest})(Login)

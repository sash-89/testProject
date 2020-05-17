import React from "react";
import style from "./AuthContainer.module.css";
import InputWithValidate from "../components/InputWhisValidate/InputWithValidate";
import is from "is_js";

class AuthContainer extends React.Component {
 state={
     isFormValid: false,
     formControl:{
         email:{
             type: "email",
             label: "Email",
             placeholder: "Введите Email",
             value:"",
             errorMessage:"Ведите корректный Email",
             valid: false,
             touched: false,
             validation:{
                 required: true,
                 email: true
             }
         },
         password: {
             type: "password",
             label: "Пароль",
             placeholder: "Введите пароль",
             value: "",
             errorMessage: "Ведите корректный Пароль",
             valid: false,
             touched: false,
             validation: {
                 required: true,
                 minLength: 6,
             }
         }
     }
 };

    onChangeHandler=(e, controlName)=>{
        const formControl = {...this.state.formControl};
        formControl[controlName].value = e.target.value;
        formControl[controlName].touched = formControl[controlName].value.trim()!=="";
        formControl[controlName].valid = this.validateControl(formControl[controlName].value, formControl[controlName].validation);

        let isFormValid = true;
        Object.keys(formControl).forEach(name => {
            isFormValid=formControl[name].valid && isFormValid
        })

        this.setState({formControl, isFormValid})

    };
    validateControl=(value, validation)=>{

        if(!validation) return true;

        let isValid = true;

        if(validation.required) isValid = value.trim()!=="" && isValid;

        if(validation.email) isValid = is.email(value) && isValid;

        if(validation.minLength)isValid = value.length >= validation.minLength && isValid;

        return isValid

    };


    inHandler=()=>{
    };
    registerHandler=()=>{
    };

    submitHandler= (e) => {
        e.preventDefault()
    };

    renderInputs=()=>{
        return Object.keys(this.state.formControl).map((controlName, index)=>{
            const control=this.state.formControl[controlName];
            return(

                <InputWithValidate
                    key={controlName + index} className={style.Input}
                    type={control.type} label={control.label} placeholder={control.placeholder} value={control.value}
                    errorMessage={control.errorMessage} valid={control.valid} touched={control.touched}
                    shouldValidate={!!control.validation}  onChange={(e)=>this.onChangeHandler(e, controlName)}/>

            )
        })
    };

    render() {
        return (
            <div className={style.Container}>
                <div className={style.Wrapper}>
                    <h1>Авторизация</h1>
                    <form  className={style.Form} onSubmit={this.submitHandler}>
                        {this.renderInputs()}
                        <button disabled={!this.state.isFormValid}>Войти</button>
                        <button >Зарегистрироваться</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AuthContainer;
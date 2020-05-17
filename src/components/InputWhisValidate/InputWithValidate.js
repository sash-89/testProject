import React from 'react'
import style from './InputWithValidate.module.css'

const isInvalid=({valid, touched, shouldValidate})=>{     //shouldValidate-убрать?
    return !valid && touched && shouldValidate
};

const InputWithValidate =({className, placeholder, type, label, value, valid, touched, shouldValidate, onChange, errorMessage}) => {
    const inputType = type || "text";

    const cls= [className];
    const htmlFor = `${inputType}-${Math.random()}`;
    isInvalid({valid, touched, shouldValidate})&&cls.push(style.Invalid);

    return (
        <div>
            <label className={style.Label} htmlFor={htmlFor}>{label}</label>
            <input type={inputType} placeholder={placeholder} className={cls.join(" ")} onChange={onChange} value={value}/>
            {isInvalid({valid, touched, shouldValidate})&&<span className={style.errorSpan}>{errorMessage || "Введите корректное значение"}</span>}
        </div>
    )
};



export default InputWithValidate
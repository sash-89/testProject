import React from 'react'
import style from './input.module.css'



const Input =({autoFocus, className, placeholder, label, type, value, onChange, onBlur, defaultValue}) => {
    const inputType = type || "text";
    const cls= [className];
    const htmlFor = `${inputType}-${Math.random()}`;

    return (
        <>
            <label className={style.Label} htmlFor={htmlFor}>{label}</label>
            <input autoFocus={autoFocus} type={inputType} placeholder={placeholder} className={cls.join(" ")}
                   onChange={onChange} value={value} onBlur={onBlur} defaultValue={defaultValue}/>
        </>
    )
};



export default Input
import React from 'react'
import style from './textarea.module.css'



const Textarea =({className, placeholder, label, value, onChange}) => {

    const cls= [className];
    const htmlFor = `textarea-${Math.random()}`;

    return (
        <>
            <label className={style.Label} htmlFor={htmlFor}>{label}</label>
            <textarea placeholder={placeholder} className={cls.join(" ")} onChange={onChange} value={value}/>
        </>
    )
};



export default Textarea
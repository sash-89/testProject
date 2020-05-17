import React from 'react'
import style from './select.module.css'



const Select =({className, placeholder, type, label, value, options, onChange}) => {
    const htmlFor =`${label}-${Math.random()}`;
return(
    <div className={style.Select}>
        <label htmlFor={htmlFor}>{label}</label>
        <select id={htmlFor}
                value={value}
                onChange={onChange}
        >
            {options.map( (option, index)=>{
                return(
                    <option
                    value={option.value}
                    key={option.value = index}
                    >{option.text}</option>
                )
            })}

        </select>
    </div>
)
};



export default Select
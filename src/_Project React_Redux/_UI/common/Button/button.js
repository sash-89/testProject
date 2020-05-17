import React from 'react'
import style from './button.module.css'



const Button =({className, value, disabled,  onClick}) => {

    const cls= [style.Button, className];

    return (
        <>
            <button disabled={disabled} className={cls.join(" ")} onClick={onClick}>{value}</button>
        </>
    )
};



export default Button
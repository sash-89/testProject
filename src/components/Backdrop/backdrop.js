import React from 'react'
import style from './backdrop.module.css'


const Backdrop =({closeBackdrope}) => {
    return (
        <div className={style.Backdrop} onClick={closeBackdrope}></div>
    )
};



export default Backdrop
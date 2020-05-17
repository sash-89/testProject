import React from 'react';
import style from './Car.module.css';

const Car =({name, year, showInput, onChangeName, onDelete, showCarsInput}) => {
    let carClasses = [style.Car, style.Car1];
    let inputClasses = [];

    if (showInput) {carClasses.pop()}

    if (name.length > 10) {inputClasses.push(style.warning)}

    return (

        <div className={carClasses.join(" ")}>
            <h3>Car: {name} </h3>
            <div>
                <p>Year: {year}</p>
                <input className={inputClasses.join(" ")}
                       onChange={onChangeName} onFocus={showCarsInput} onBlur={showCarsInput}
                       value={name}/>
                <button onClick={onDelete} onFocus={showCarsInput} onBlur={showCarsInput}>Удалить</button>
                <br/>
                {inputClasses[0] === style.warning && <p className={style.showWarn}>Введено более 10 символов </p>}
            </div>
        </div>
    )
}

export default Car;

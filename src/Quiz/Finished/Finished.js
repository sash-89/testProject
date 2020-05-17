import React from 'react';
import style from './Finished.module.css';


const Finished=({quiz, result, reStart})=> {

   const trueResult= result.reduce(( total, elem, i)=>{
        if (result[i]==='success'){
            total++
        }
        return total;
    },0);

    return (
        <div className={style.Container}>
            <h1>Quiz Finished</h1>
            <div className={style.Wrapper}>
                {quiz.map((q, i)=>{
                    return (
                        <p key={i}><span>{`${i+1}.  `}</span>{q.question}
                        <img src={result[i]==='success'? "https://krovgrad.by/wp-content/uploads/2018/02/%D0%B8%D0%BA%D0%BE%D0%BD%D0%BA%D0%B0-%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0-1.png"
                            :"https://bakinaleksandr.ru/wp-content/uploads/2019/03/ec1b.png"} alt=""/>
                        </p>

                        )

                })}
                <br/>
                <p>Правильно {trueResult} из {quiz.length}</p>
                <br/>
                <input type="button" value={"Повторить"} onClick={reStart}/>
            </div>
        </div>
    )
}

export default Finished;

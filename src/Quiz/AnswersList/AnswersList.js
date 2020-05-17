import React from 'react';
import style from './AnswersList.module.css';
import AnswersItem from "./AnswersItem/AnswersItem";


const AnswersList=({answers, answerQuestion, answerState, rightAnswerState})=> {
    return (
        <ul className={style.Wrapper}>
            {
                answers.map((a, i) => {
                    return (
                        <AnswersItem key={i} answers={a}
                                     answerState={answerState && answerState[a.id]}
                                     rightAnswerState={rightAnswerState && rightAnswerState[a.id]}
                                     answerQuestion={answerQuestion}/>
                    )
                })
            }
        </ul>
    )
}

export default AnswersList;

import React from 'react';
import style from './AnswersItem.module.css';


const AnswersItem=({answers, answerQuestion, answerState, rightAnswerState})=> {
const liClasses =[style.list];
   (answerState)&&liClasses.push(style[answerState]);
   (rightAnswerState!==answerState)&&liClasses.push(style[rightAnswerState]);

    return (
        <li  className={liClasses.join(" ")} onClick={() => answerQuestion(answers.id)}>
            {answers.text}
        </li>
    )
};

export default AnswersItem;

import React from 'react';
import style from './Quiz.module.css';
import AnswersList from "./AnswersList/AnswersList";


const Quiz=({quiz, pageNumber, allPage, answerQuestion, answerState, rightAnswerState})=> {

    return (
        <div className={style.Wrapper}>
            <h1>
                Quiz
            </h1>
            <div className={style.ActiveQuiz}>

                <p>
                    <span>
                        <strong>{pageNumber+ ". "} </strong>
                        {quiz.question}
                        <small>{`${pageNumber} из ${allPage}`}</small>
                    </span>
                </p>
              <AnswersList answers={quiz.answers} rightAnswerState={rightAnswerState} answerState={answerState} answerQuestion={answerQuestion}/>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Quiz;

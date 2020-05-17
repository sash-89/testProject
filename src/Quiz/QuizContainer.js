import React from 'react';
import style from './QuizContainer.module.css';
import Quiz from "./Quiz";
import Finished from "./Finished/Finished";
import QuizCreator from "./QuizCreator/QuizCreator";
import {creatControl, validate, validateForm} from "../components/Form/formFramework";



const creatOptionControl =(number)=>{
    return  creatControl({
            label: `Вариант ${number}`,
            errorMessage: "Значение не может быть пустым",
            id: number
        },
        {required: true})
};
const creatFormControl=()=>{
    return {
        question: creatControl({
            label: "Введите вопрос",
            errorMessage: " вопрос не может быть пустым"
        },{required: true}),
        option1: creatOptionControl(1),
        option2: creatOptionControl(2),
        option3: creatOptionControl(3),
        option4: creatOptionControl(4),
    }
};

class QuizContainer extends React.Component {
state={
    isFinished: false,
    pageNumber: 0,
    answerState: null,
    result: [],
    rightAnswerState: null,
    openQuestionBlock: false,
    quiz:[
        {
            id:1,
            question:'Какого цвета небо?',
            rightAnswer: 1,
            answers:[
                {id:1, text: 'Синий'},
                {id:2, text: 'Желтый'},
                {id:3, text: 'Зеленый'},
                {id:4, text: 'Крассный'},
            ]
        },
        {
            id:2,
            question:'Столица Армении?',
            rightAnswer: 3,
            answers:[
                {id:1, text: 'Москва'},
                {id:2, text: 'Лондон'},
                {id:3, text: 'Ереван'},
                {id:4, text: 'Мадрид'},
            ]
        },
    ],
    newQuestion:{
        quiz:[],
        isFormValid: false,
        formControls:creatFormControl(),
        rightAnswer:1
    }
};


    addQuestionHandler=(e)=>{
        e.preventDefault();
        const quiz = this.state.newQuestion.quiz;
        const index = this.state.quiz.length+this.state.newQuestion.quiz.length;

        const {question, option1, option2, option3, option4} = this.state.newQuestion.formControls
        const questionItem = {
            id: index,
            question: question.value,
            rightAnswer: this.state.newQuestion.rightAnswer,
            answers: [
                {id: option1.id, text: option1.value},
                {id: option2.id, text: option2.value},
                {id: option3.id, text: option3.value},
                {id: option4.id, text: option4.value},
            ]
        };
        quiz.push(questionItem)
        this.setState({
            newQuestion: {quiz,
            isFormValid: false,
            formControls: creatFormControl(),
            rightAnswer: 1}
        })
        console.log(this.state.newQuestion)
    };


    selectChangeHandler=(e)=>{
        this.setState({newQuestion:{...this.state.newQuestion, rightAnswer: +e.target.value}})
        console.log(this.state.newQuestion.rightAnswer)
    };

    changeHandler=(value, controlName)=>{
        const formControls= {...this.state.newQuestion.formControls};
        formControls[controlName].touched = true;
        formControls[controlName].value = value;
        formControls[controlName].valid = validate(formControls[controlName].value, formControls[controlName].validation);

        this.setState({newQuestion:{...this.state.newQuestion, formControls, isFormValid: validateForm(formControls)}})

    };

    creatQuizHandler=(e, quiz)=>{
        e.preventDefault();
        const newQuestions =[...this.state.quiz, ...quiz];

        this.setState({quiz: newQuestions,
            newQuestion: {quiz: [],
                isFormValid: false,
                formControls: creatFormControl(),
                rightAnswer: 1}
        })
        console.log(this.state.newQuestion.quiz)

    };





    answerQuestion=(AnswerId)=>{
        const lastPage = this.state.pageNumber+1===this.state.quiz.length;
        const RightAnswer = AnswerId===this.state.quiz[this.state.pageNumber].rightAnswer;
        if(this.state.answerState){
            return
        }
        let result = [...this.state.result];
        if(RightAnswer){
            result.push('success');
            this.setState({answerState:{[AnswerId]:'success'}, result:result });
        }else{
            result.push('error');
            this.setState({answerState:{[AnswerId]:'error'}, result:result});

            const timeout = setTimeout(()=>{
                this.setState({rightAnswerState:{[this.state.quiz[this.state.pageNumber].rightAnswer]:'success'}});

                clearTimeout(timeout);
            },300)
        }

        const timeout = setTimeout(()=>{
            if(lastPage){
                this.setState({isFinished: true})
            }else {
                this.setState({pageNumber: this.state.pageNumber + 1, answerState: null, rightAnswerState: null})
            }
            clearTimeout(timeout);
        },1000)
    };

    reStart=()=>{
        this.setState({isFinished: false, pageNumber: 0, answerState: null, rightAnswerState: null, result: []})
    };
componentDidMount() {
}



    render() {
        return (
            <div className={style.Container}>
                <div className={style.Wrapper}>
                    {this.state.isFinished ? <Finished result={this.state.result} quiz={this.state.quiz} reStart={this.reStart}/> :
                        <>
                            <button className={style.newQuest} onClick={()=>this.setState({openQuestionBlock: !this.state.openQuestionBlock})}>Добавить вопрос</button>
                            {this.state.openQuestionBlock && <QuizCreator
                                newQuestion={this.state.newQuestion}
                                quiz={this.state.quiz}
                                creatQuizHandler={(e)=>this.creatQuizHandler(e, this.state.newQuestion.quiz)}
                                addQuestionHandler={(e)=>this.addQuestionHandler(e)}
                                selectChangeHandler={(e)=>this.selectChangeHandler(e)}
                                changeHandler={this.changeHandler}


                            />}
                            <Quiz quiz={this.state.quiz[this.state.pageNumber]}
                                  pageNumber={this.state.pageNumber + 1}
                                  answerState={this.state.answerState}
                                  rightAnswerState={this.state.rightAnswerState}
                                  allPage={this.state.quiz.length}
                                  answerQuestion={this.answerQuestion}/>
                         </>
                    }
                </div>
            </div>
        )
    }
}

export default QuizContainer;

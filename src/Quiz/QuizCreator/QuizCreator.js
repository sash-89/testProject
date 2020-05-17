import React from 'react';
import style from './QuizCreator.module.css';
// import {creatControl, validate, validateForm} from "../../components/Form/formFramework";
import InputWhisValidate from "../../components/InputWhisValidate/InputWithValidate";
import Select from "../../components/Select/select";

// const creatOptionControl =(number)=>{
//     return  creatControl({
//             label: `Вариант ${number}`,
//             errorMessage: "Значение не может быть пустым",
//             id: number
//         },
//         {required: true})
// };
// const creatFormControl=()=>{
//     return {
//         question: creatControl({
//             label: "Введите вопрос",
//             errorMessage: " вопрос не может быть пустым"
//         },{required: true}),
//         option1: creatOptionControl(1),
//         option2: creatOptionControl(2),
//         option3: creatOptionControl(3),
//         option4: creatOptionControl(4),
//     }
// };

class QuizCreator extends React.Component {
// state={
//     quiz:[],
//     isFormValid: false,
//     formControls:creatFormControl(),
//     rightAnswer:1
// };

    submitHandler = (e)=>{
     e.preventDefault()
    };

    // addQuestionHandler=(e)=>{
    //     e.preventDefault();
    //     const quiz = this.state.quiz;
    //     const index = quiz.length+3;
    //
    //     const {question, option1, option2, option3, option4} = this.state.formControls
    //     const questionItem = {
    //         id: index,
    //         question: question.value,
    //         rightAnswer: this.state.rightAnswer,
    //         answers: [
    //             {id: option1.id, text: option1.value},
    //             {id: option2.id, text: option2.value},
    //             {id: option3.id, text: option3.value},
    //             {id: option4.id, text: option4.value},
    //         ]
    //     };
    //     quiz.push(questionItem)
    //     this.setState({
    //         quiz,
    //         isFormValid: false,
    //         formControls: creatFormControl(),
    //         rightAnswer: 1
    //     })
    // };
    //
    //
    // selectChangeHandler=(e)=>{
    //     this.setState({rightAnswer: e.target.value})
    // };
    //
    // changeHandler=(value, controlName)=>{
    //     const formControls= {...this.state.formControls};
    //     formControls[controlName].touched = true;
    //     formControls[controlName].value = value;
    //     formControls[controlName].valid = validate(formControls[controlName].value, formControls[controlName].validation);
    //
    //     this.setState({formControls, isFormValid: validateForm(formControls)})
    // };
    renderControls=()=>{
        return Object.keys(this.props.newQuestion.formControls).map((controlName, index)=>{
            const control = this.props.newQuestion.formControls[controlName];
            return (
                <React.Fragment key={controlName + index}>
                    <InputWhisValidate label={control.label} value={control.value} valid={control.valid} shouldValidate={!!control.validation}
                                       touched={control.touched} errorMessage={control.errorMessage}
                                       onChange={e => this.props.changeHandler(e.target.value, controlName)}
                    />
                    {index === 0 && <hr/>}
                </React.Fragment>
            )
        })
    };

    render() {
        const select = <Select
            label={"Выберите правильный ответ"} value={this.props.newQuestion.rightAnswer} onChange={this.props.selectChangeHandler}
            options={ [
                {text: 1, value:1},
                {text: 2, value:2},
                {text: 3, value:3},
                {text: 4, value:4}
            ] }
        />;
        return (
            <div className={style.Container}>
                <h1>Создание формы</h1>
                <div className={style.Wrapper}>
                    <form onSubmit={(e)=>this.submitHandler(e)} >
                        {this.renderControls()}
                        {select}
                        <button onClick={this.props.addQuestionHandler}
                                disabled={!this.props.newQuestion.isFormValid}
                        >Добавить вопрос</button>
                        <button onClick={this.props.creatQuizHandler }
                                disabled={this.props.newQuestion.quiz.length===0}
                        >Создать</button>
                    </form>

                </div>
            </div>
        )
    }
}

export default QuizCreator;

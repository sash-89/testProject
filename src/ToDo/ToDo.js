import React, {useEffect, useRef, useState} from "react";
import style from "./ToDo.module.scss";
import rewriteIco from "./pen.png";
import deleteIco from "./delete.png";
import importantIco from "./warn.png";
import TodoItem from "./TodoItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";


const btn = [
    {
        btnName: "Все",
        btnSense: "all"
    },
    {
        btnName: "Завершенные",
        btnSense: "done"
    },
    {
        btnName: "Не завершенные",
        btnSense: "not-done"
    },
];

const ToDo = ({toDos, addToDo, deleteTodo, updateTodo, filterName, changeFilterName, importantTodo, doneTodo, changeSearchValue}) => {
    const [value, changeValue]= useState("");
    const [toDo, changeToDo]= useState({id:null, value:null, done: false});

    const refInp = useRef(null);

    useEffect(() => {
        toDo.value && refInp.current.focus()
    }, [toDo.value]);



    const changeHandler = ({target:{value}}) => {
        if(toDo.value){
            changeToDo({...toDo, value})

        }else changeValue(value)
    };

    const submit =(e)=>{
        e.preventDefault();
        if(toDo.id&&!toDo.done) {
            updateTodo(toDo.id, toDo.value);
            changeToDo({id:null, value:null, done: false})
        }else if(value.trim()){
            addToDo(value);
            changeValue("")
        }

    };

    const toDoItem =()=>{
        let activeToDos = toDos.filter(({done}) => done === false);
        let completeToDos = toDos.filter(({done}) => done === true);
        let allToDos = [...activeToDos, ...completeToDos];

       return  (<TransitionGroup className={style.ToDoList}>
        {allToDos.map(item => {
           return <CSSTransition
                key={item.id}
                timeout={300}
                classNames={style}
            >
                <div className={style.ToDoItemWrap}>
                    <img src={rewriteIco} alt="" onClick={!item.done && !toDo.id && !value
                        ? () => changeToDo({id: item.id, value: item.toDoText, done: item.done})
                        : null}/>
                    <TodoItem toDoText={item.toDoText} done={item.done} important={item.important}
                              doneTodo={item.id === toDo.id ? null : () => doneTodo(item.id)}/>
                    <div>
                        <img src={deleteIco} alt="" onClick={() => deleteTodo(item.id)}/>
                        <img src={importantIco} onClick={() => importantTodo(item.id)} alt=""/>
                    </div>
                </div>
            </CSSTransition>
        })
    }
    </TransitionGroup>)
    };

    return (
        <div>
            <div className={style.FilterWrapper}>
                <input type="text" placeholder={"Поиск"} onChange={(e)=>changeSearchValue(e.target.value)}/>
                <div className={style.Filter}>
                   {btn.map( b =>{
                       return <span key={b.btnSense} className={b.btnSense===filterName? style.BtnActive : null}
                           onClick={()=>changeFilterName(b.btnSense)}>{b.btnName}</span>
                   })}
                </div>
            </div>
            <div className={toDos.length > 0 ? style.ToDoItemContainer : style.ToDoItemContainer + " " + style.ToDoItemHidden}>
                {toDoItem()}
            </div>
            <form onSubmit={(e) => submit(e)} className={style.AddForm}>
                <input ref={refInp} type="text" placeholder={"Добавить задание"} value={toDo.value ? toDo.value : value}
                       onChange={(e) => changeHandler(e)}/>
                <button>Добавить задание</button>
            </form>
        </div>
    )

};

export default ToDo;
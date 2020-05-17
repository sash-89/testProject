import React, {useState} from "react";
import style from "./ToDo3.module.scss";
import ToDo3 from "./ToDo3";


const ToDo3Container = () => {
    const [filterName, changeFilterName]= useState("all")
    const [searchValue, changeSearchValue]= useState("")

    const [toDos, changeToDo]= useState([
        {
            id: 1,
            toDoText: "Сделать что нибудь",
            important: false,
            done: false
        },
        {
            id: 2,
            toDoText: "Сходить куда нибудь",
            important: false,
            done: false
        },
        {
            id: 3,
            toDoText: "Создать что нибудь",
            important: false,
            done: false
        },
    ]);



    const addToDo = (text) => {
        const newToDo = {
            id: (new Date().getTime()),
            toDoText: text,
            important: false,
            done: false
        };
        changeToDo([...toDos, newToDo]);
    };

    const deleteTodo =(id)=>{
        changeToDo(toDos.filter(toDo=>toDo.id!==id))

    };
    const updateTodo =(id, toDoText)=>{
        changeToDo(toDos.map(toDo=>toDo.id!==id ? toDo : {...toDo, toDoText}))
    };

  const importantTodo =(id)=>{
        changeToDo(toDos.map(toDo=>toDo.id!==id ? toDo : {...toDo, important:!toDo.important}))
    };
  const doneTodo =(id)=>{
        changeToDo(toDos.map(toDo=>toDo.id!==id ? toDo : {...toDo, done:!toDo.done}))
    };


    const filterTodo =()=>{
        switch (filterName) {
            case "all": return  searchTodo();
            case "done": return  searchTodo().filter(toDo=>toDo.done===true);
            case "not-done": return  searchTodo().filter(toDo=>toDo.done===false);
            default: return  toDos;
        }
    };
    const searchTodo =()=>{
        if (!searchValue) return toDos;
        return toDos.filter(toDo=>{
                return toDo.toDoText.toLowerCase().includes(searchValue.toLowerCase())
            }
        )
    };

    return (
        <div className={style.ToDoContainer}>
            <h2>Список задач</h2>
            <ToDo3  toDos={filterTodo()} filterName={filterName} changeFilterName={changeFilterName}
                addToDo={addToDo} deleteTodo={deleteTodo} updateTodo={updateTodo}
                    importantTodo={importantTodo} doneTodo={doneTodo} changeSearchValue={changeSearchValue}
            />
        </div>
    )

};

export default ToDo3Container;
import React from "react";
import style from "./ToDo.module.scss";




const TodoItem = ({toDoText, done, important, doneTodo}) => {
const spanCls =[style.ToDoItem];
if(done) spanCls.push(style.ToDoDone);
if(important) spanCls.push(style.ToDoImportant);


       return(
           <span className={spanCls.join(" ")} onClick={doneTodo}>
               {toDoText}
           </span>
    )

};

export default TodoItem;
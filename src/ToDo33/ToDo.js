import React from "react";
import style from "./ToDo.module.css";



const ToDo=({toDo:{id, name, toggle, checked}, TodoChange, checkboxToggle, DeleteHandler, openInput})=> {
    let cls=[style.Body];
    checked&&cls.push(style.Disabled)
    return (

<tr  className={cls.join(" ")}>
        <td><input type="checkbox"  onChange={()=>{checkboxToggle(id, checked)}} checked={checked}/></td>
        <td>{name} {toggle&&<input autoFocus onKeyDown={TodoChange} className={style.showInput} onChange={TodoChange} value={name}/>}</td>
        <td><button onClick={()=>{openInput(id, toggle)}}>Изменить</button></td>
        <td><button onClick={()=>{DeleteHandler(id)}}>Удалить</button></td>
</tr>
    )
}

export default ToDo;
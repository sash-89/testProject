import React from "react";
import style from "./ToDo2.module.css";
import FlipMove from 'react-flip-move';
import DeleteIcon from "./gnome_edit_delete.png";

const ToDo2=({items, deleteItem, setUpdate})=>{
    const listItems = items.map(item =>
    {
        return <div className={style.List} key={item.key}>
            <p>
                <input type="text" id={item.key} value={item.text}
                       onChange={(e)=>{setUpdate(e.target.value, item.key)}}/>
                <img src={DeleteIcon} className={style.Icons} onClick={() => { deleteItem(item.key)}}  alt={""}/>
            </p>

        </div>})
    return <div>
        <FlipMove duration={300} easing="ease-in-out">
            {listItems}
        </FlipMove>

    </div>;
}

export default ToDo2;
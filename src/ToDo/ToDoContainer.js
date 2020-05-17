import React from "react";
import style from "./ToDoContainer.module.css";
import ToDo from "./ToDo";


class ToDoContainer extends React.Component {
    state = {
        toDos: [
            {id:1, name:"Задание1", toggle:false, checked:false},
            {id:2, name:"Задание2", toggle:false, checked:false},
            {id:3, name:"Задание3", toggle:false, checked:false},
            {id:4, name:"Задание4", toggle:false, checked:false},
        ],
        newToDoToggle:false,
        text: "",
    };

    DeleteHandler=(targetId)=>{
this.setState({toDos:this.state.toDos.filter(({id})=>id!==targetId)})
    };

    TodoChange=(targetId, e, toggle)=>{
        this.setState({toDos: this.state.toDos.map((toDo)=>(
                toDo.id!==targetId ? toDo : {...toDo, name: e.target.value}  ))});

        if(e.key==="Enter") return this.openInput(targetId, toggle);
    };

    openInput=(targetId, toggle)=>{
        this.setState({toDos: this.state.toDos.map((toDo)=>(
                toDo.id!==targetId?toDo:{...toDo, toggle: !toggle}))})
    };



    checkboxToggle=(targetId, checked)=>{
        this.setState({toDos: this.state.toDos.map((toDo)=>(
               toDo.id!==targetId? toDo : {...toDo,  checked:!checked}))})
    };


    onTextChange=(e)=>{
        this.setState({text: e.target.value});

        e.key==="Enter"&&this.newTodo(this.state.text);
    };
    newTodo=( name)=>{
        this.setState({toDos: [
                ...this.state.toDos,
                {id:(new Date().getTime()), name:name, toggle: false, checked:false}
            ],
            text :""})
    };


    render() {
        let {toDos} = this.state;
        let activeToDos = toDos.filter(({checked}) => checked === false);
        let completeToDos = toDos.filter(({checked}) => checked === true);
        let allToDos = [...activeToDos, ...completeToDos];



        return (
            <div>
                <button onClick={()=>this.setState({newToDoToggle: !this.state.newToDoToggle})}>Добавить</button>
               {this.state.newToDoToggle&&<tr  className={style.Body}>
                   <td> <input  onKeyDown={this.onTextChange} placeholder={"Введите задание"} autoFocus
                                onChange={(e)=>{this.onTextChange(e)}} value={ this.state.text }/></td>
                   <td>&nbsp;</td>
                   <td><button onClick={()=>this.newTodo(this.state.text)}>Добавить</button></td>
               </tr>}
            <table className={style.Container}>
                <thead>
                <tr className={style.ProductName}>
                    <th>N</th>
                    <th>Название</th>
                    <th>Изменить</th>
                    <th>Удалить</th>
                </tr>
                </thead>
                <tbody className={style.Product}>
                    {allToDos.map((toDo, index)=>{
                        return <ToDo toDo={toDo} key={toDo.id}
                                     checkboxToggle={this.checkboxToggle}
                                     openInput={this.openInput}
                                     TodoChange={(e)=>{this.TodoChange( toDo.id, e, toDo.toggle )}}
                                     DeleteHandler={this.DeleteHandler}/>
                    })
                    }
                </tbody>
            </table>
            </div>
        )
    }
}

export default ToDoContainer;
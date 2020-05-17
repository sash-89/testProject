import React from "react";
import style from "./ToDoContainer2.module.css";
import ToDo2 from "./ToDo2";


class ToDoContainer2 extends React.Component {
    state = {
        items: [],
        currentItem: {
            text: '',
            key: ''
        }
    };

        addItem=(e)=>{
            e.preventDefault();
            const newItem = this.state.currentItem;
            if(newItem.text !==""){
                const items = [...this.state.items, newItem];
                this.setState({ items: items,
                    currentItem:{text:'', key:''} })
            }
        };
        handleInput=(e)=>{
            this.setState({currentItem:{text: e.target.value, key: Date.now()} })
        };

        deleteItem=(key)=>{
            const filteredItems= this.state.items.filter(item => item.key!==key);
            this.setState({items: filteredItems })

        };
        setUpdate=(text,key)=>{
            const items = this.state.items;
            items.map(item => item.key===key? item.text = text : item);
            this.setState({items: items })
        };

        render(){
            const items= this.state.items;
            const currentItem= this.state.currentItem.text;

            return (
                <div className={style.TodoContainer}>
                    <div className={style.TodoWrapper}>
                        <div>
                            <form className={style.ToDoForm} onSubmit={this.addItem}>
                                <input type="text" placeholder="Enter task" value= {currentItem} onChange={this.handleInput}/>
                                <button type="submit">Add</button>
                            </form>
                            <p>{items.text}</p>

                            <ToDo2 items={items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}/>

                        </div>
                    </div>
                </div>
            );
        }

}

export default ToDoContainer2;
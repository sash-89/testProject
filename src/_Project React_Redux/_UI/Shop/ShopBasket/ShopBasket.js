import React from 'react';
import style from '../Shop.module.css'
import {faMinusCircle, faPlusCircle, faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const ShopCart = ({cartItem, totalPrice, incItem, decItem, deleteItem}) => {


    return (
        <div className={style.ShopBasketWrapper}>
            <h3>Заказы</h3>
            <table>
                <thead>
                <tr>
                    <th>N</th>
                    <th>Товар</th>
                    <th>Кол-во</th>
                    <th>Цена</th>
                    <th>Итоговая цена</th>
                    <th>Действие</th>
                </tr>
                </thead>

                <tbody>

                    {cartItem.map((item, i )=> {
                        return (
                            <tr key={item.ID}>
                                <td>{i+1}</td>
                                <td>{item.Title}</td>
                                <td>{item.Count}</td>
                                <td>{item.Price}</td>
                                <td>{item.Price * item.Count}</td>
                                <td>
                                    <button onClick={()=>incItem({ID: item.ID, Price: item.Price, Count: 1})}>
                                        <FontAwesomeIcon icon={faPlusCircle} className={style.faPlusCircle}/>
                                    </button>
                                    <button onClick={()=>decItem({ID: item.ID, Price: item.Price, Count: -1})}>
                                        <FontAwesomeIcon icon={faMinusCircle} className={style.faMinusCircle}/>
                                    </button>
                                    <button onClick={()=>deleteItem({ID: item.ID, totalPrice: totalPrice})}>
                                        <FontAwesomeIcon icon={faTrash} className={style.faTrash}/></button>
                                </td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
        </div>

    )

};


export default ShopCart;

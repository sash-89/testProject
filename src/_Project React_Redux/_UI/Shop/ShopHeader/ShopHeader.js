import React from 'react';
import style from '../Shop.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";



const ShopHeader = ({ totalPrice, totalCount }) => {


    return (
        <div className={style.ShopHeaderWrap}>
            <h3>Магазин</h3>
            <div><FontAwesomeIcon icon={faShoppingCart} className={style.ShoppingCartIco}/> {`${totalCount} вещей $(${totalPrice})`}</div>
        </div>
    )

};


export default ShopHeader;

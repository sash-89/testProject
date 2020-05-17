import React, {useEffect} from 'react';
import style from './Shop.module.css'
import ShopHeader from "./ShopHeader/ShopHeader";
import ShopItems from "./ShopItems/ShopItems";
import ShopCart from "./ShopBasket/ShopBasket";
import {useDispatch, useSelector} from "react-redux";
import {
    decrementCount,
    deleteCount,
    incrementCount,
    requestBook,
    setItemInCart
} from "../../redux/shop_page/ShopPage_Action";



const Shop =  React.memo(() => {
    const dispatch = useDispatch();
    const shopItem = useSelector(state => state.shopPage.shopItem);
    const cartItem = useSelector(state => state.shopPage.cartItem);
    const totalPrice = useSelector(state => state.shopPage.totalPrice);
    const totalCount = useSelector(state => state.shopPage.totalCount);
    const totalItemsCount = useSelector(state => state.shopPage.totalItemsCount);


    useEffect(() => {
        dispatch(requestBook("Books"))
    }, [dispatch]);

    const addItem = (item) => {
        dispatch(setItemInCart(item))
    };
    const incItem = (item) => {
        dispatch(incrementCount(item))
    };
    const decItem = (item) => {
        dispatch(decrementCount(item))
    };
    const deleteItem = (item) => {
        dispatch(deleteCount(item))
    };



    return (
        <div className={style.Container}>
            <div className={style.Wrapper}>
                <ShopHeader totalPrice={totalPrice} totalCount={totalCount}/>
                <ShopItems shopItem={shopItem} totalItemsCount={totalItemsCount} addItem={addItem}/>
                <ShopCart cartItem={cartItem} totalPrice={totalPrice} incItem={incItem} decItem={decItem} deleteItem={deleteItem}/>
            </div>
        </div>
    )

});


export default Shop;

import React, {useState} from 'react';
import style from '../Shop.module.css'
import Button from "../../common/Button/button";
import PaginationMode from "../../Users/PaginationMode/PaginationMode";



const ShopItems = ({ shopItem, totalItemsCount, addItem }) => {
    const [activePage, changeActivePage]= useState(1)

    const portionSize = 2;
    const leftPortionPageNumber = (activePage - 1) * portionSize + 1;
    const rightPortionPageNumber = activePage * portionSize;
    const books = shopItem.slice(leftPortionPageNumber - 1, rightPortionPageNumber)

    const handlePageChange = (pageNumber) => {
        changeActivePage(pageNumber);
    };

    return (
        <div>
            <div className={style.Pagination}>
                <PaginationMode currentPage={activePage} totalUsersCount={totalItemsCount}
                                pageSize={portionSize} handlePageChange={handlePageChange}/>
            </div>
            <div className={style.ShopItemsWrap}>
                {books.map(item => {
                    return (
                        <div key={item.ID} className={style.ShopItem}>
                            <img src="https://cdn.designrush.com/uploads/users/customer-11/image_1528371736_EN5sl5MooZ7dmPGZKwiLrCinXuKlCdXvCnZTmjhB.jpeg" alt =""/>
                            <div>
                                <span>Название: {item.Title}</span>
                                <span>Автор: {`${item.FirstName} ${item.LastName}`}</span>
                                <span>Кол-во стр.: {item.PageCount}стр.</span>
                                <span>Дата публикации: {item.PublishDate.slice(0, 10)}г.</span>
                                <span>Цена: {item.Price + "$"}</span>
                                <Button className={style.Btn} value={"Добавить в корзину"}
                                        onClick={()=>addItem({ID: item.ID, Title: item.Title, Price: item.Price, Count:1})}/>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )

};


export default ShopItems;

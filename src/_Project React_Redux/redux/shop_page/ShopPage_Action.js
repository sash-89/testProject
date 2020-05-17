export const SET_SHOP_ITEM = "SET_SHOP_ITEM";
export const SET_AUTHORS = "SET_AUTHORS";
export const SET_COVER_PHOTOS = "SET_COVER_PHOTOS";
export const BOOKS_FETCH_REQUESTED = "BOOKS_FETCH_REQUESTED";
export const SET_ITEM_IN_CART = "SET_ITEM_IN_CART";
export const INCREMENT_COUNT = "INCREMENT_COUNT";
export const DECREMENT_COUNT = "DECREMENT_COUNT";
export const DELETE_ITEM_IN_CART = "DELETE_ITEM_IN_CART";

export const setShopItem = (items) => ({
    type: SET_SHOP_ITEM,
    payload: items
});
export const setAuthors = (author) => ({
    type: SET_AUTHORS,
    payload: author
});
export const setItemInCart = (item) => ({
    type: SET_ITEM_IN_CART,
    payload: item
});
export const incrementCount = (item) => ({
    type: INCREMENT_COUNT,
    payload: item
});
export const decrementCount = (item) => ({
    type: DECREMENT_COUNT,
    payload: item
});
export const deleteCount = (id) => ({
    type: DELETE_ITEM_IN_CART,
    payload: id
});

// export const setCoverPhotos = (CoverPhotos) => ({
//     type: SET_COVER_PHOTOS,
//     payload: CoverPhotos
// });


export const requestBook = (url) => ({
    type: BOOKS_FETCH_REQUESTED,
    payload: url
});

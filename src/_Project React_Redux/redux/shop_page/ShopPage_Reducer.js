import {
    DECREMENT_COUNT, DELETE_ITEM_IN_CART,
    INCREMENT_COUNT,
    SET_AUTHORS,
    SET_COVER_PHOTOS,
    SET_ITEM_IN_CART,
    SET_SHOP_ITEM
} from "./ShopPage_Action";


let initialState = {
    shopItem: [],
    cartItem: [],
    totalPrice: 0,
    totalCount: 0,
    pageSize: 10,                //количество книг на стр.
    currentPage: 1,
    totalItemsCount: 0,
};

const totalInc = (cartItem, payload) => {
    return {
        totalPrice: cartItem.reduce((total, item) => {
            const totalPrice = item.Price * item.Count
            return total + totalPrice
        }, payload.Count * payload.Price),

        totalCount: cartItem.reduce((total, item) => {
            return total + item.Count
        }, payload.Count)
    }
};


const shopReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_SHOP_ITEM:
            return {
                ...state,
                shopItem: action.payload,
                totalItemsCount: action.payload.length
            };
        case SET_AUTHORS:
            return {
                ...state,
                shopItem: state.shopItem.map((item, index) => ({
                    ...item, ...action.payload[index],
                    Price: Math.round(Math.random() * 25)
                }))
            };
        // case SET_COVER_PHOTOS:
        //     return {
        //         ...state,
        //         shopItem: state.shopItem.map((item, index) => ({...item,  ...action.payload[index]}))
        //     };
        case SET_ITEM_IN_CART:
            return {
                ...state,
                cartItem: ( ()=>{
                    const itemID = state.cartItem.find(item => item.ID === action.payload.ID);

                    return itemID
                        ? state.cartItem.map(item => item.ID === action.payload.ID
                            ? {...item, Count: item.Count + action.payload.Count} : item)
                        : [...state.cartItem, action.payload]
                })(),


                ...totalInc(state.cartItem, action.payload)
            };
        case INCREMENT_COUNT:
            return {
                ...state,
                cartItem: state.cartItem.map(item => item.ID !== action.payload.ID
                    ? item
                    : {...item, Count: item.Count + action.payload.Count}),

                ...totalInc(state.cartItem, action.payload)
            };
        case DECREMENT_COUNT:
            return {
                ...state,
                cartItem: state.cartItem.find(item=> item.ID=== action.payload.ID && item.Count + action.payload.Count!==0)
                    ? state.cartItem.map(item=>(item.ID=== action.payload.ID ? {...item, Count: item.Count>0? item.Count + action.payload.Count :0}: item))
                : state.cartItem.filter(item=> item.ID !== action.payload.ID),

                ...totalInc(state.cartItem, action.payload)
            };
        case DELETE_ITEM_IN_CART:
            return {
                ...state,
                cartItem: state.cartItem.filter(item => item.ID !== action.payload.ID),

                totalPrice: state.cartItem.reduce((total, item) => {
                    const totalPrice = item.Price * item.Count;

                    if (item.ID === action.payload.ID) {
                        return total - action.payload.totalPrice
                    }
                    return total + totalPrice
                }, state.totalPrice),

                totalCount: state.cartItem.reduce((total, item) => {
                    if(item.ID === action.payload.ID){
                        return total - item.Count
                    }
                    return total
                }, state.totalCount)
            };
        default:
            return state
    }
};


export default shopReducer;
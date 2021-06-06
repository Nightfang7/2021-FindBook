import { createContext } from "react";
import useReducerWithThunk from 'use-reducer-thunk';
import products from "../json/products.json";
import {
    SET_STOREPAGE_CONTENT,
    SET_PRODUCTNAVBAR_ACTIVEITEM,
    ADD_CART_ITEM,
    REMOVE_CART_ITEM 
} from "../util/constants"


export const StoreContext = createContext();  
let cartItems = localStorage.getItem("cartItems")
? JSON.parse(localStorage.getItem("cartItems"))
: [];

const initialState = {
    page: {
       title: "全部商品",
       products,
    },
    navBar: {
       activeItem: "/store",
    },
    cartItems,
 };

 function reducer(state, action){
     console.log(action)
     switch (action.type) {

        case SET_STOREPAGE_CONTENT:
            return {
                ...state,
                page: action.payload,
            };
        case SET_PRODUCTNAVBAR_ACTIVEITEM:
            return {
                ...state,
                navBar: {
                    activeItem: action.payload
                }
            }
        case ADD_CART_ITEM:
            const item = action.payload;
            const product = state.cartItems.find((x) => x.id === item.id);
            if (product) {
                cartItems = state.cartItems.map((x) =>
                x.id === product.id ? item : x
                );
                return { ...state, cartItems };
            }
            cartItems = [...state.cartItems, item];
            return { ...state, cartItems };
        case REMOVE_CART_ITEM:
            cartItems = state.cartItems.filter((x) => x.id !== action.payload);
            return { ...state, cartItems };
        default:
            return state;
    }
 }

export function StoreProvider(props) {
    const [state, dispatch] = useReducerWithThunk(reducer, initialState);
    const value = { state, dispatch };
    return (
        <StoreContext.Provider value={value}>
            {props.children}
        </StoreContext.Provider>
    );
}
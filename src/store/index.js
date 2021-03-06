import { createContext } from "react";
import useReducerWithThunk from 'use-reducer-thunk';
import products from "../json/products.json";
import {
    SET_STOREPAGE_TITLE,
    SET_STOREPAGE_CONTENT,
    SET_PRODUCTNAVBAR_ACTIVEITEM,
    ADD_CART_ITEM,
    REMOVE_CART_ITEM,
    EMPTY_CART,
    SAVE_SHIPPING_ADDRESS,
    SAVE_PAYMENT_METHOD,
    SET_PRODUCT_DETAIL, 
    BEGIN_PRODUCTS_FEED,
    SUCCESS_PRODUCTS_FEED,
    FAIL_PRODUCTS_FEED,
    BEGIN_PRODUCTS_REQUEST,
    SUCCESS_PRODUCTS_REQUEST,
    FAIL_PRODUCTS_REQUEST,
    BEGIN_LOGIN_REQUEST,
    SUCCESS_LOGIN_REQUEST,
    FAIL_LOGIN_REQUEST,
    LOGOUT_REQUEST,
    REMEMBER_LOGIN,
    BEGIN_REGISTER_REQUEST,
    SUCCESS_REGISTER_REQUEST,
    FAIL_REGISTER_REQUEST,
    BEGIN_UPDATE_USERINFO,
    SUCCESS_UPDATE_USERINFO,
    FAIL_UPDATE_USERINFO,
    BEGIN_ORDER_CREATE,
    SUCCESS_ORDER_CREATE,
    FAIL_ORDER_CREATE,
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
    cart: {
        cartItems,
        shippingAddress: localStorage.getItem('shippingAddress')
          ? JSON.parse(localStorage.getItem('shippingAddress'))
          : {},
        paymentMethod: 'Google',
    },
    orderInfo: { 
        loading: false,
        order: localStorage.getItem('orderInfo')
        ? JSON.parse(localStorage.getItem('orderInfo'))
        : { id: ""},
        success: false,
        error: null,
      },
    feedProducts: {
        loading: false,
        error: null,
    },
    requestProducts: {
        loading: false,
        error: null,
    },
    userSignin: {
        loading: false,
        userInfo: localStorage.getItem("userInfo")
          ? JSON.parse(localStorage.getItem("userInfo"))
          : null,
        error: "",
    },
    userRegister: {
        loading: false,
        userInfo: null,
        error: "",
    },
 };

 function reducer(state, action){
     console.log(action)
     switch (action.type) {
        case SET_STOREPAGE_TITLE:
            return {
                ...state,
                page: {
                ...state.page,
                title: action.payload
                },
            };
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
        case EMPTY_CART:
            cartItems = [];
            return { ...state, cart: { ...state.cart, cartItems }};
        case SAVE_SHIPPING_ADDRESS:
            console.log('action.payload.shippingAddress = ')
            console.log(action.payload)
            return { ...state, cart: { ...state.cart, shippingAddress: action.payload } };
        case SAVE_PAYMENT_METHOD:
            return { ...state, cart: { ...state.cart, paymentMethod: action.payload } };
        case SET_PRODUCT_DETAIL:
            return { ...state, productDetail: { ...state.productDetail, ...action.payload} };
        case BEGIN_PRODUCTS_REQUEST:
            return { ...state, requestProducts: { ...state.requestProducts, loading: true } }
        case SUCCESS_PRODUCTS_REQUEST:
            return { ...state, requestProducts: { ...state.requestProducts, loading: false } }
        case FAIL_PRODUCTS_REQUEST:
            return { ...state, requestProducts: { ...state.requestProducts, loading: false, error: action.payload } }
        case BEGIN_PRODUCTS_FEED:
            return { ...state, feedProducts: { ...state.feedProducts, loading: true } }
        case SUCCESS_PRODUCTS_FEED:
            return { ...state, feedProducts: { ...state.feedProducts, loading: false } }
        case FAIL_PRODUCTS_FEED:
            return { ...state, feedProducts: { ...state.feedProducts, loading: false, error: action.payload } }
        case BEGIN_LOGIN_REQUEST:
            return { ...state, userSignin: { ...state.userSignin, loading: true } };
        case SUCCESS_LOGIN_REQUEST:
            return {
              ...state,
              userSignin: {
                ...state.userSignin,
                loading: false,
                userInfo: action.payload,
                error: "",
              },
            };
        case FAIL_LOGIN_REQUEST:
            return {
              ...state,
              userSignin: {
                ...state.userSignin,
                loading: false,
                userInfo: null,
                error: action.payload,
              },
            };
        case BEGIN_UPDATE_USERINFO:
            return { ...state, userSignin: { ...state.userSignin, loading: true } };
        case SUCCESS_UPDATE_USERINFO:
            return {
              ...state,
              userSignin: {
                ...state.userSignin,
                loading: false,
                userInfo: action.payload,
                error: "",
              },
            };
        case FAIL_UPDATE_USERINFO:
            return {
              ...state,
              userSignin: {
                ...state.userSignin,
                loading: false,
                error: action.payload,
              },
            };
        case LOGOUT_REQUEST:
            cartItems = [];
            return {
              ...state,
              cartItems,
              userSignin: {
                ...state.userSignin,
                userInfo: null,
              },
            };    
        case REMEMBER_LOGIN:
            return {
              ...state,
              userSignin: {
                ...state.userSignin,
                remember: action.payload,
              },
            };
        case BEGIN_REGISTER_REQUEST:
            return { ...state, userRegister: { ...state.userRegister, loading: true } };
        case SUCCESS_REGISTER_REQUEST:
            return {
              ...state,
              userRegister: {
                ...state.userRegister,
                loading: false,
                userInfo: action.payload,
                error: "",
              },
              userSignin: {
                ...state.userSignin,
                userInfo: action.payload,
              }
            };
        case FAIL_REGISTER_REQUEST:
            return {
              ...state,
              userRegister: {
                ...state.userRegister,
                loading: false,
                userInfo: null,
                error: action.payload,
              },
            };
        default:
        return state;
    }
 }

export function StoreProvider(props) {
    const [state, dispatch] = useReducerWithThunk(reducer, initialState, "example");
    const value = { state, dispatch };
    return (
        <StoreContext.Provider value={value}>
            {props.children}
        </StoreContext.Provider>
    );
}
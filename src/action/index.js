import {
    SET_STOREPAGE_CONTENT,
    SET_PRODUCTNAVBAR_ACTIVEITEM,
    ADD_CART_ITEM,
    REMOVE_CART_ITEM 
} from "../util/constants"

export const addcartItem = (dispatch, product, qty) => {
    const item = {
        id: product.id,
        name: product.name1,
        image: product.image,
        price: product.price,
        countInStock: product.countInStock,
        qty,
    };
    dispatch({
        type: ADD_CART_ITEM,
        payload: item,
    });
};

export const removeCartItem = (dispatch, productId) => {
    dispatch({
      type: REMOVE_CART_ITEM,
      payload: productId,
    });
};

export const setStorepageContent = (dispatch, title, products) => {
    dispatch({
        type: SET_STOREPAGE_CONTENT,
        payload: {title, products},
    });
};


export const setActiveProductNavbar = (dispatch, activeNavItem) => {
    dispatch({
      type: SET_PRODUCTNAVBAR_ACTIVEITEM,
      payload: activeNavItem,
    });
  };
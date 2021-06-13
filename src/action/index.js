import {
    SET_STOREPAGE_TITLE,
    SET_STOREPAGE_CONTENT,
    SET_PRODUCTNAVBAR_ACTIVEITEM,
    ADD_CART_ITEM,
    REMOVE_CART_ITEM, 
    SET_PRODUCT_DETAIL
} from "../util/constants"
import { getProducts, getProductById } from "../api";

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

export const setProductDetail = async (dispatch, productId, qty) => {
    const product = await getProductById(productId);
    if (qty === 0)
      dispatch({
        type: SET_PRODUCT_DETAIL,
        payload: {
          product,
        }
      })
    else
      dispatch({
        type: SET_PRODUCT_DETAIL,
        payload: {
          product,
          qty,
        }
      })
}

export const setPage = async (dispatch, url, title) => {
    let products = [];
    dispatch({
      type: SET_STOREPAGE_TITLE,
      payload: title,
    });
    try {
      products = await getProducts(url);
      dispatch({
        type: SET_STOREPAGE_CONTENT,
        payload: { title, products },
      });
      dispatch({
        type: SET_PRODUCTNAVBAR_ACTIVEITEM,
        payload: url,
      });
    } catch (error) {
      console.log(error);
    }
}

// export const setStorepageContent = (dispatch, title, products) => {
//     dispatch({
//         type: SET_STOREPAGE_CONTENT,
//         payload: {title, products},
//     });
// };


// export const setActiveProductNavbar = (dispatch, activeNavItem) => {
//     dispatch({
//       type: SET_PRODUCTNAVBAR_ACTIVEITEM,
//       payload: activeNavItem,
//     });
//   };
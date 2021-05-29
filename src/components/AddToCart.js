import React, { useContext } from 'react'
import { Button, notification } from "antd"
import { StoreContext } from "../store"
import { ADD_CART_ITEM } from "../util/constants"

export default function AddToCart({ product, qty }) {
    const { dispatch } = useContext(StoreContext);

    const openNotification = () => {
        notification.open({
            message: '購物車資訊',
            description:
                `已將數量 ${qty} 的「 ${product.name1} 」加入購物車。`,
            onClick: () => {
                console.log('Notification Clicked!');
            },
            placement: 'bottomRight',
        });
    };

    const addToCart = () => {
        openNotification();
        dispatch({
          type: ADD_CART_ITEM,
          payload: {
            id: product.id,
            name: product.name1,
            image: product.image,
            price: product.price,
            countInStock: product.countInStock,
            qty,
          },
        });
     };
    return (
        <Button type="primary" className="btn-tocar" onClick={addToCart} >
            加入購物車
        </Button>
    )
}

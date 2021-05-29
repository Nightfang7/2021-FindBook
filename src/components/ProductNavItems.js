import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import {
    SET_STOREPAGE_TITLE,
    SET_STOREPAGE_CONTENT,
    SET_PRODUCTNAVBAR_ACTIVEITEM
} from "../util/constants"
import { StoreContext } from '../store';
import products from "../json/products.json"
import newest from "../json/Newest.json"
import taiwan from "../json/Taiwanproduct.json"


export default function ProductNavItems(props) {
    const { children, to, className, activeClassName } = props
    const { state, dispatch } = useContext(StoreContext);
    const getJSON = url =>{
        switch (url) {
            case "/store/newest":
                return newest;
            case "/store/taiwan":
                return taiwan;
            default:
            return products;
        }
    }
    const onClick = () => {
        console.log(children)
        dispatch({
           type: SET_STOREPAGE_TITLE, 
           payload: children,
        });
        dispatch({
           type: SET_STOREPAGE_CONTENT, 
           payload: getJSON(to),
        });
        dispatch({
           type: SET_PRODUCTNAVBAR_ACTIVEITEM, 
           payload: to,
        });
     };
    return (
        <Link to={to}  onClick={onClick}
        className={`
        ${className}
        ${state.navBar.activeItem === to ? activeClassName : ""}`}>
            {children} 
        </Link>
        
    )
}

import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { StoreContext } from '../store';
import { setStorepageContent, setActiveProductNavbar } from "../action";
import { getJSON } from "../api";


export default function ProductNavItems(props) {
    const { children, to, className, activeClassName } = props
    const { state, dispatch } = useContext(StoreContext);

    const onClick = () => {
        setStorepageContent(dispatch, children, getJSON(to));
        setActiveProductNavbar(dispatch, to);
        console.log(to)
        console.log(children)
        console.log(getJSON(to))
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

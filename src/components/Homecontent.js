import React from 'react'
import Carousel from './Carousel'
import TopproductList from './TopproductList';
import TopProduct from '../json/Topproduct.json';
import Ad from './ad';


function Homecontent() {
    
    return (
        <div className="container content-container">
            <Carousel />
            <TopproductList TopProduct={TopProduct} />
            <Ad />
        </div>
        
    );
}

export default Homecontent

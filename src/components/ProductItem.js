import React from 'react'
import { Card } from "antd"
import { Link } from 'react-router-dom';

function ProductItem({ product }) {
    return (
        <div>
        
            <Card className="BookCard black"> 
                <Link to={`/product/${product.id}`}>
                    <div className="book-size book-shadow"></div>
                    <div className="book-size book-img">
                        <img src={product.image}
                        style={{ width: '100%', height: '100%' }}
                        alt={product.name1} />
                    </div>
                </Link>   
                    {/* 商品資訊 */}
                    <div className="product-info text-white">          
                        <h3 className="product-name text-white">{product.name1}<br/>{product.name2}</h3>
                        <h4 className="price text-white">NT. {product.price} </h4>
                        <div className="shoppingLike-container">
                            <span className="shoppingLike">
                                <i class="far fa-heart fa-lg"></i>
                                <i class="fas fa-shopping-bag fa-lg" />
                            </span>
                        </div>
                        
                    </div>   
            </Card>
             
        </div>
    )
}

export default ProductItem

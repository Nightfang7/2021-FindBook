import React from 'react'
import { Card } from "antd"
import { Link } from 'react-router-dom';

function ProductItem({ product }) {
    return (
        <div>
            <Card className="BookCard">
                <Link to={`/product/${product.id}`}>
                    <div className="book-size book-shadow"></div>
                    <div className="book-size book-img">
                        <img src={product.image}
                        style={{ width: '100%', height: '100%' }}
                        alt={product.name1} />
                    </div>
                </Link>
                <div className="product-info">          
                    <h3 className="product-name">{product.name1}<br/>{product.name2}</h3>
                </div>      
            </Card>
        </div>
    )
}

export default ProductItem

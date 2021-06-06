import React from 'react'
import { Row, Col } from "antd";
import ProductItem from './ProductItem';

function ProductList({products, title}) {
    console.log(products)
    console.log(title)
    return (
        <div>
            <div className="prodoct-title-content">
                <span className="product-title">
                    <i class="fas fa-angle-right title-icon"></i>
                    {title}
                </span>
            </div>
            <Row className="productlist" justify="start" gutter={[32, 32]}>
            {products.map(product => (
                <Col 
                key={product.id} 
                sm={{ span: 12 }}
                md={{ span: 8 }}
                lg={{ span: 8 }}
                xl={{ span: 6 }}
                xxl={{ span: 4 }}
                >
                <ProductItem product={product} />
                </Col>
            ))}
            </Row>
        </div>
        
    )
}

export default ProductList

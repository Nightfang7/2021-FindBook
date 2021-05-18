import React from 'react'
import { Row, Col } from "antd";
import ProductItem from './ProductItem';

function ProductList({products}) {
    return (
        <Row justify="start" gutter={[32, 32]}>
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
    )
}

export default ProductList

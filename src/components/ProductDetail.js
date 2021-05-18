import React, { useState } from 'react'
import { Row, Col } from "antd";
import { Select } from 'antd';

const { Option } = Select;

function ProductDetail({ product }) {
    return (
        <Row gutter={[32,32]}>
            <Col
                lg={{ span: 8, offset: 2 }}
            >
                <img
                    className="product-image"
                    src={product.image}
                    alt={product.name1}
                />    
            </Col>
            <Col
                lg={{ span: 12 }}
            >

            </Col>
        </Row>
    )
}

export default ProductDetail

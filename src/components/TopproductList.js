import React from 'react'
import { Row, Col } from "antd";
import TopproductItems from './TopproductItems';

function TopproductList( {TopProduct} ) {
    return (
        <div className="topproduct-container">
            <div className="topproduct-title-container">
                <div className="topproduct-title">
                    TOP熱銷
                </div>
                <span className="title-line"></span>
            </div>
            <Row className="topproductcard-container" justify="space-around" gutter={[16, 16]}>
            {TopProduct.map(product => (
                <Col 
                key={product.id} 
                sm={{ span: 12 }}
                md={{ span: 12 }}
                lg={{ span: 8 }}
                xl={{ span: 4 }}
                >
                <TopproductItems product={product} />
                </Col>
            ))}
            </Row>
            <div className="topproduct-title-container">
                <span className="title-line"></span>
            </div>
            
        </div>
        
    )
}

export default TopproductList

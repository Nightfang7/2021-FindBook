import React from 'react'
import { Row, Col } from "antd";
import CarouselItem from './CarouselItem';

function CarouselList({CarouselProducts}) {
    return (
        <Row justify="space-around" gutter={[16, 16]}>
        {CarouselProducts.map(product => (
            <Col 
            key={product.id} 
            sm={{ span: 8 }}
            md={{ span: 8 }}
            lg={{ span: 6 }}
            xl={{ span: 4 }}
            >
            <CarouselItem product={product} />
            </Col>
        ))}
        </Row>
    )
}

export default CarouselList

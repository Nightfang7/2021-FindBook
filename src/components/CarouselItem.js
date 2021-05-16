import React from 'react'
import { Card } from "antd"
import { Link } from 'react-router-dom';

function CarouselItem() {
    return (
        <div>
            <Card hoverable className="BookCard">
                <Link to=" ">
                    <div className="book-shadow"></div>
                    <div className="book-img">
                        <img src="" alt="" />
                    </div>
                </Link>
            </Card>
        </div>
    )
}

export default CarouselItem

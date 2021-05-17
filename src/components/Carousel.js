import React from 'react'
import { Carousel } from "antd";
import { Link } from "react-router-dom"
import CarouselList from './CarouselList';
import CarouselProducts from "../json/CarousalProduct.json"

function carousel() {
    const contentStyle = {
        height: '500px',
        color: '#fff',
        lineHeight: '500px',
        textAlign: 'center',
        background: '#D6D5C9',
    };
    return (
        <div className="carousel-container">
            <div className="container carousel" >
                
                <Carousel autoplay dotPosition="right">
                    <div className="slider-container" style={contentStyle}>
                        <Link to="/store">
                            <span className="carousel-title">最新上架</span>
                        </Link>
                    
                        <div className="slider">
                            <CarouselList CarouselProducts={CarouselProducts} />
                        </div>
                    </div>
                    <div className="slider-container" style={contentStyle}>
                        <span className="carousel-title">TOP熱銷</span>
                        <div className="slider">
                            <CarouselList CarouselProducts={CarouselProducts} />
                        </div>
                    </div>
                    <div className="slider-container" style={contentStyle}>
                        <span className="carousel-title">店長推薦</span>
                        <div className="slider">
                            <CarouselList CarouselProducts={CarouselProducts} />
                        </div>
                    </div>
                    <div className="slider-container" style={contentStyle}>
                        <span className="carousel-title">最新上架</span>
                        <div className="slider">
                            <CarouselList CarouselProducts={CarouselProducts} />
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
       
    )
}

export default carousel

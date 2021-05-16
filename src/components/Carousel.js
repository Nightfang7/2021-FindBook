import React from 'react'
import { Card, Carousel } from "antd";
import { Link } from 'react-router-dom';

function carousel() {
    const contentStyle = {
        height: 'auto',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#D6D5C9',
    };
    return (
        <div className="carousel-container">
            <div className="container carousel">
                <span className="carousel-title">最新上架</span>
                <Carousel autoplay >
                    <div className="slider-container" style={contentStyle}>
                        <div className="slider">
                            <Card hoverable className="BookCard">
                                <Link to="/">
                                    <div className="book-shadow"></div>
                                    <div className="book-img">
                                        <img src="https://hinetcdn.waca.ec/uploads/shops/6750/products/d0/d06074f09c0f7b6c9c9b713c2ff7539a.jpg" 
                                        style={{ width: '100%', height: '100%' }}
                                        alt="" />
                                    </div>
                                </Link>
                                <div className="product-info">          
                                    <h3 className="product-name">OTHER SIDE 好想睡<br/>短篇漫畫集</h3>
                                </div>      
                            </Card>
                            <Card hoverable className="BookCard">
                                <div className="book-shadow"></div>
                                <div className="book-img">
                                    <img src="" alt="" />
                                </div>
                            </Card>
                            <Card hoverable className="BookCard">
                                <div className="book-shadow"></div>
                                <div className="book-img">
                                    <img src="" alt="" />
                                </div>
                            </Card>
                        </div>
                    </div>
                    <div>
                        <div className="slider" style={contentStyle}>
                            <Card hoverable className="BookCard">
                                <div className="book-shadow"></div>
                                <div className="book-img">
                                    <img src="" alt="" />
                                </div>
                            </Card>
                            <Card hoverable className="BookCard">
                                <div className="book-shadow"></div>
                                <div className="book-img">
                                    <img src="" alt="" />
                                </div>
                            </Card>
                            <Card hoverable className="BookCard">
                                <div className="book-shadow"></div>
                                <div className="book-img">
                                    <img src="" alt="" />
                                </div>
                            </Card>
                            <Card hoverable className="BookCard">
                                <div className="book-shadow"></div>
                                <div className="book-img">
                                    <img src="" alt="" />
                                </div>
                            </Card>
                        </div>
                    </div>
                    <div>
                        <h3 style={contentStyle}>3</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>4</h3>
                    </div>
                </Carousel>
            </div>
        </div>
       
    )
}

export default carousel

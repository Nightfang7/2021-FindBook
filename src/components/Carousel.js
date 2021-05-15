import React from 'react'
import { Carousel } from "antd";

function carousel() {
    const contentStyle = {
        height: '480px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#D6D5C9',
    };
    return (
        <div className="carousel-container">
             <div className="container carousel">
            <Carousel autoplay dotPosition={'right'}>
                <div>
                    <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
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

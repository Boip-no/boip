import React from 'react'
import ai from "../../images/ai.png"
import ps from "../../images/ps.jpg"
import xd from "../../images/xd.png"
import react from "../../images/react.png"
import Carousel from 'react-bootstrap/Carousel'

function Fade({ label1, label2, label3, label4 }) {

    return (
        <Carousel className="flex-container">
            <Carousel.Item>
                <img className="carousel-img p-5"
                    src={ai}
                    alt={label1}
                />
            </Carousel.Item>
            
            <Carousel.Item>
                <img
                    className="carousel-img p-5"
                    src={ps}
                    alt={label2}
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="carousel-img p-5"
                    src={xd}
                    alt={label3}
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="carousel-img p-5"
                    src={react}
                    alt={label4}
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default Fade
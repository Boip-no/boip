import React from 'react'
import ai from "../../images/ai.png"
import Carousel from 'react-bootstrap/Carousel'

function Fade({ label1, label2, label3 }) {

    return (
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100"
                    src={ai}
                    alt={label1}
                />
                <Carousel.Caption>
                    <h3>{label1}</h3>                
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1444212477490-ca407925329e"
                    alt={label2}
                />
                <Carousel.Caption>
                    <h3>{label2}</h3>              
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1558233043-45af001ed5b7"
                    alt={label3}
                />
                <Carousel.Caption>
                    <h3>{label3}</h3>                
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Fade
import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/slide1.png';
import banner2 from '../../../images/slide2.png';
import banner3 from '../../../images/slide3.png';
import './Banner.css';
const Banner = () => {
    return (
        <div>
            <Carousel fade>
            <Carousel.Item className="item-1">
                    
                    <img
                    className="d-block w-100 opacity-50 img-fluid"
                    src={banner1}
                    alt="First slide"
                />
                <div className="custom-position">
                    <h1 className="text-dark fw-bolder">On a Pursuit of Better Medicine</h1>
                    <p>Our integrated friendly health system is on a relentless pursuit of better care in the world</p>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={banner2}
                alt="Second slide"
                />
                <div className="custom-position">
                    <h1 className="text-dark fw-bolder ">Breakthrough care is near you</h1>
                    <p>This is open to everyone every day and provides primary health care and cutting-edge medicine in a central location</p>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={banner3}
                alt="Third slide"
                />
                <div className="custom-position">
                    <h1 className="text-dark fw-bolder ">Your health is first priority</h1>
                    <p>We have made the most advanced, constumizable & user friendly medical theme in the world.</p>
                </div>
            </Carousel.Item>
        </Carousel>
        </div>
    );
};

export default Banner;
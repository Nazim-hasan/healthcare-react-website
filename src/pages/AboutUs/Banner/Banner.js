import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import coverPhoto from '../../../images/slide2.png';
import './Banner.css';
const Banner = () => {
    return (
        <div>
            <img className="img-fluid" src={coverPhoto} alt="" />
        <Container className="">
            
            <Row className="custom-text-position">
                
                <Col md={6}>
                    <h1>Best Care From Cosgrove Clinic</h1>
                    <p>We have made the most advanced, constumizable & user-friendly medical theme in the world.</p>
                    <NavLink to="/doctors"><button className="btn btn-primary">Meet The Doctors</button></NavLink>
                </Col>
                <Col md={6}>
                </Col>
            </Row>
        </Container></div>
    );
};

export default Banner;
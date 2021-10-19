import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import drImg from '../../../images/dr-image.jpg';
import sign from '../../../images/signature-1.png';
const Greetings = () => {
    return (
        <Container>
            <Row>
                <Col md={6} sm={12}>
                <img className="img-fluid" src={drImg} alt="" />
                </Col>
                <Col md={6} sm={12} className="d-flex align-items-center justify-content-center">
                    <div className="text-center">
                    <h2>Welcome to Cosgrove</h2>
                    <p className="text-primary">SHORT HISTORY</p>
                    <p className="text-muted">Our team of highly trained professionals uses the latest healing technologies to restore you to pain-free health quickly and easily. We thoroughly evaluate & treat all of the contributing root factors related to your issue.</p>
                    <img  src={sign} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Greetings;
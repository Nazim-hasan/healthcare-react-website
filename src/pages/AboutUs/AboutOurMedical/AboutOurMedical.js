import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const AboutOurMedical = () => {
    return (
        <Container className="my-5">
            <Row>
                <Col md={6}>
                    <img className="img-fluid" src="https://victorthemes.com/themes/cosgrove/wp-content/uploads/2017/11/about4.png" alt="" />
                </Col>
                <Col md={6}>
                    <h2 className="fw-bolder ">Short Story About Cosgrove Medical Center</h2>
                    <p className="text-primary">WE CREATE BEAUTIFUL SMILES</p>
                    <p>Our team of highly trained professionals uses the latest healing technologies to restore you to pain-free health quickly and easily. We thoroughly evaluate & treat all of the contributing root factors related to your issue. This includes, but is not limited to, your work and home stressors.</p>
                    <p><strong>STEPHEN MATH, CEO</strong></p>
                    <img src="https://victorthemes.com/themes/cosgrove/wp-content/uploads/2017/11/signature.png" alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default AboutOurMedical;
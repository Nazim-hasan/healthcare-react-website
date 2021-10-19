import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="mt-5 mb-2 text-white bg-dark pt-5 pb-0">
            <Container>
                <Row>
                    <Col md={3}>
                        <h4 className='text-white'>About Cosgrove</h4>
                        <p><small>The cosgrove staff members are well trained professionals, We will fax the requested records directly to the qualified doctors the day before or the day of the appointment.</small></p>
                        <p><small>Info@Learnup.Com</small></p>
                    </Col>
                    <Col md={3}>
                        <h4>Departments</h4>
                        <p>Pediatric</p>
                        <p>Cardiology</p>
                        <p>Neurology</p>
                        <p>X-ray & CT Scan</p>
                    </Col>
                    <Col md={3}>
                        <h4>Help & Support</h4>
                        <p>Documentation</p>
                        <p>Live Chat</p>
                        <p>Privacy</p>
                        <p>Mail Us</p>
                    </Col>
                    <Col md={3}>
                        <h4>Contact Details</h4>
                            <p><small>250 Main Street, Brooklyn, NY 52143, US</small></p>
                            <p><small> Tell (800)-456-789</small></p>
                            <p><small>  Email info@icloud.com</small></p>
                    </Col>
                    
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
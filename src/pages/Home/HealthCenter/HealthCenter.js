import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const HealthCenter = () => {
    return (
        <Container>
            <Row>
                <Col md={6}>
                    <h3 className="my-5">About Health Center</h3>
                    <Row>
                        <Col md={6}>
                        <img className="img-fluid" src="https://victorthemes.com/themes/cosgrove/wp-content/uploads/2017/11/about1.png" alt="" />
                        </Col>
                        
                        <Col md={6}>
                        <small className="mb-0">Emergency staff who are available 24 hours a day, seven days a week. These staff members are trained professionals The Decedent Affairs Office also works with the complete and file the necessary paperwork with county and state offices.</small>
                        </Col>
                    </Row>
                </Col>
                <Col md={6}>
                    <div className="border px-4 py-5">
                        <h3>Book An Appointment</h3>
                        <div className="d-flex">
                            <div className="me-4">
                                <p>
                                <select class="form-select" aria-label="Department">
                                    <option selected>Department</option>
                                    <option value="1">Pediatrics</option>
                                    <option value="2">Cardiology</option>
                                </select>
                                </p>
                                <p>
                                <select class="form-select" aria-label="Doctor">
                                    <option selected>Doctor</option>
                                    <option value="1">Robert Davis</option>
                                    <option value="2">Kristina Castle</option>
                                </select>
                                </p>
                                <p>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Full Name"/>
                                </p>
                                <p>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Phone Number"/>
                                </p>
                            </div>
                            <div>
                                <p>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Date"/>
                                </p>
                                <p>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Time"/>
                                </p>
                                <p>
                                    <input type="text" class="form-control py-4" id="exampleFormControlInput1" placeholder="Note for the doctor"/>
                                </p>
                            </div>
                        </div>
                        <button className="btn btn-primary w-100">Make An Appoinment</button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default HealthCenter;
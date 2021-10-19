import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const {serviceId}=useParams();
    const [services,setServices]=useState([]);

    useEffect(()=>{
    fetch('https://nazim-hasan.github.io/service-db/services.json')
    .then(res => res.json())
    .then(result=> setServices(result))
    },[serviceId])
    console.log(services);
    const service=services.find(srvsDetails =>parseInt(serviceId)===srvsDetails.id);
    return (
        <Container>
            {
                service &&
                <Row>
                <Col md={6}>
                    <img src={service.img} alt="" className="img-fluid"/>
                </Col>
                <Col md={6}>
                    <h2>{service.name}</h2>
                    <p><span className="badge bg-success">{service.categories}</span></p>
                    <p>{service.desc}</p>
                </Col>
            </Row>
            }
        </Container>
    );
};

export default ServiceDetails;
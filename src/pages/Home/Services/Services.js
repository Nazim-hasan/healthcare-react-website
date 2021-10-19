import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
    fetch('/services.json')
    .then(res => res.json())
    .then(result=> setServices(result))
    },[])
    return (
        <div>
            <Container className="my-5">
            <h2>Medical Services</h2>
            <Row className="g-3">
                {
                    services.map(serv =><Service key={serv.id} service={serv}></Service>)
                }
            </Row>
        </Container>
        </div>
    );
};

export default Services;
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Service from '../../Home/Service/Service';

const AllServices = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
    fetch('/services.json')
    .then(res => res.json())
    .then(result=> setServices(result))
    },[])
    return (
        <div>
            <Container className="">
                
            <div className="d-flex justify-content-between align-items-center custom-bg text-white px-3">
                <h2>Our Services</h2>
                <p><NavLink to="/home" >Home / </NavLink>Our Services</p>
            </div>
            <h2 className="my-5">Medical Services</h2>
            <Row className="g-3">
                {
                    services.map(serv =><Service key={serv.id} service={serv}></Service>)
                }
            </Row>
        </Container>
        </div>
    );
};

export default AllServices;
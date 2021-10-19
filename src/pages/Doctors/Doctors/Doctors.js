import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Doctor from '../Doctor/Doctor';
import "./Doctors.css";

const Doctors = () => {
    const [doctors,setDoctors]=useState([]);
    useEffect(()=>{
        fetch('./doctors.json')
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[])
    console.log(doctors);
    return (
        <Container>
            <div className="d-flex justify-content-between align-items-center custom-bg text-white px-3">
                <h2>Our Doctors</h2>
                <p><NavLink to="/home " >Home / </NavLink>Our Doctors</p>
            </div>
            <h2 className="my-5">Head of Departments</h2>
            <Row>
                {
                    doctors.map(doc=> <Doctor key={doc.id} doctor={doc}/>)
                }
            </Row>
        </Container>
    );
};

export default Doctors;
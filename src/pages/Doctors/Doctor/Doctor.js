import React from 'react';
import { Col } from 'react-bootstrap';

const Doctor = (props) => {
    const {name,img,camber,department}=props.doctor;
    return (
        <Col md={3}>
            <img className="img-fluid" src={img} alt="" />
            <div style={{backgroundColor:"#435ba1"}}>
                <div className="text-center py-4">
                <h4 className="text-white">{name}</h4>
                <p style={{color:'#3cb0d5'}}>{department}</p>
                <button className="btn btn-secondary">{camber}</button>
                </div>
            </div>
        </Col>
    );
};

export default Doctor;
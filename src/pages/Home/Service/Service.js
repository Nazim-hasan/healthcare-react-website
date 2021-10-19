import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = (props) => {
    const {id,name,img,desc,categories}=props.service;
    return (
        <Col md={3}>
            <div className="shadow-lg rounded">
                <img className="rounded-top img-fluid" src={img} alt="" width="350" height="247"/>
                <div className="ps-4 my-2">
                    <p><span className="badge bg-danger">{categories}</span></p>
                    <h6 className="fw-bolder">{name}</h6>
                    <small className="fw-light">{desc.slice(0,100)}</small>
                    </div>
                    <Link to={`/service/${id}`}>
                    <button className="btn btn-primary mb-3 ms-4 ">View Details</button>
                    </Link>
                    
            </div>
        </Col>
    );
};

export default Service;
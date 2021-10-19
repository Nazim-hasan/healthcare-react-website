import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
const Login = () => {
    const {signInUsingGoogle,RegisterUsingPassword,processLogin,user}=useAuth();
    // const {signInUsingGoogle,RegisterUsingPassword,processLogin}=useFirebase();
    const [name,setName]=useState('');  
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [isLogin,setIsLogin]=useState(false);
    const location=useLocation();
    const history=useHistory();
    const redirect_uri=location.state?.from || '/home';
    const handleNameChange=e=>{
        setName(e.target.value);
    }

    const handleEmailChange=e=>{
        setEmail(e.target.value);
    }

    const handlePasswordChange=e=>{
        setPassword(e.target.value);
    }

    const handleRegistration=e=>{
        e.preventDefault();
        isLogin? processLogin(email,password): 
        RegisterUsingPassword(name,email,password);
    }

    const handleGoogleSignIn=()=>{
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
            console.log(result.user);
        })
    }

    const toggleLogin=e=>{
        setIsLogin(e.target.checked);
    }

    return (
        <Container>
            <Row>
                <Col md={6} sm={12}>
                    <img src="https://doccure-react.dreamguystech.com/template/ece4acf86598eb59a48dc7f087716a21.png" alt="" className="img-fluid" />
                </Col>
                <Col md={6} sm={12}>
                    <div className="border p-5">
                        <h4>{isLogin ? 'Login' : 'Register'} Cosrove</h4>
                        <p>{isLogin ? 'Login with your account':'Create an Account'}</p>
                        <Form onSubmit={handleRegistration}>
                            {
                                isLogin? '':
                                <Form.Group className="my-4" controlId="formBasicName">
                                <Form.Control onChange={handleNameChange}  type="text" placeholder="Name"  required/>
                            </Form.Group>
                            }
                            <Form.Group className="my-4" controlId="formBasicEmail">
                                <Form.Control onChange={handleEmailChange}  type="email" placeholder="Email"  required/>
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formBasicPassword">
                                <Form.Control onChange={handlePasswordChange}  type="password" placeholder="Password" required />
                            </Form.Group>
                            <button className="w-100 btn btn-primary py-2 my-4">{isLogin? 'Login' : 'Register'}</button>
                        </Form>
                        <p className="text-center"><small className="text-muted ">----or----</small></p>
                        <button className="btn btn-danger w-100 my-4" onClick={handleGoogleSignIn}>{isLogin? 'Login' : 'Register'} with Google</button>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                            <Col sm={{ span: 10, offset: 2 }}>
                            <Form.Check onChange={toggleLogin} label="Already have an account? " />
                            </Col>
                        </Form.Group>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
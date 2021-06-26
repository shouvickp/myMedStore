import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Form, Button, Row, Col, InputGroup, FormControl} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {login} from '../actions/userActions'
import FormContainer from '../components/FormContainer'
const LoginScreen = ({location}) => {
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const redirect = location.search ? location.search.split('=')[1] : '/'
    const submitHandler = (e) => {
        e.preventDefault()
        //DISPATCH LOGIN
    }
    return(
        <FormContainer>
            <h3>Sign In</h3>
            <Form onSubmit={submitHandler}>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="userEmail"><i className="fas fa-envelope"></i></InputGroup.Text>
                    <FormControl
                        type="email"
                        placeholder="Enter your Email Id"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        aria-label="email"
                        aria-describedby="userEmail"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="userPassword"><i className="fas fa-key"></i></InputGroup.Text>
                    <FormControl
                        type="password"
                        placeholder="Enter your Password here"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        aria-label="password"
                        aria-describedby="userPassword"
                    />
                </InputGroup>
                <Button type="submit" variant="primary" className="btn-sm col-8 mx-auto">
                    Sign In
                </Button>
            </Form>
            <Row className="py-3">
                <Col>
                    New Customer? 
                    <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
                         Register Here
                    </Link>
                </Col>
            </Row>
        </FormContainer>
    )

}

export default LoginScreen
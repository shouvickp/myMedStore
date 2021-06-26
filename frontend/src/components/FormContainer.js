import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

const FormContainer = ({children}) => {
    return(
        <Container className="pt-3">
            <Row className="justify-content-md-center">
                <Col xs={12} md={6} className="shadow p-3">
                    {children}
                </Col>
            </Row>
        </Container>
    )
}

export default FormContainer
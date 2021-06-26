import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import { Row, Col, ListGroup, Image, Form, Button, Card, Container, Breadcrumb } from 'react-bootstrap';
import Message from '../components/Message';
import {addToCart, removeFromCart} from '../actions/cartAction';

const CartScreen = ({match, location, history})=>{
    const productId = match.params.id;
    const qty = location.search ? location.search.split('=')[1] : 1;
    const dispatch= useDispatch();
    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;
    useEffect (() => {
        if(productId){
            dispatch(addToCart(productId,qty));
        }
    }, [dispatch, qty, productId]);
    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }
    const checkoutHandler = () => {
        history.push('/login?redirect=shipping');
    }
    return(
        <Container>
            <Breadcrumb className="bg-light my-2 py-2 px-3 text-secondary">
                    <LinkContainer to="/">
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    </LinkContainer>
                    <Breadcrumb.Item active> Cart</Breadcrumb.Item>
            </Breadcrumb>
        <Row>
            <Col md={8}>
                <h3>Shopping Cart</h3>
                
                {
                    cartItems.length === 0 ? 
                    <Message>Your Cart is Empty <Link to="/">Go Back</Link></Message> : (
                        <ListGroup variant="flush">
                            {cartItems.map(item =>(
                                <ListGroup.Item key={item.product}>
                                    <Row>
                                        <Col md={2}>
                                            <Image src={item.image} alt={item.name} fluid rounded/>
                                        </Col>
                                        <Col md={3}>
                                            <Link to={`/product/${item.product}`}>{item.name}</Link>
                                        </Col>
                                        <Col md={2}>
                                            &#8377; {item.price}
                                        </Col>
                                        <Col md={2}>
                                            <Form.Select 
                                                size="sm" 
                                                value={item.qty} 
                                                onChange={
                                                    (e) => dispatch(
                                                        addToCart(item.product, Number(e.target.value))
                                                    )
                                                }
                                            >
                                                {[...Array(item.countInStock).keys()].map( (x) => (
                                                    <option keys={x+1} value={x+1}>{x+1}</option>
                                                ))}
                                            </Form.Select>
                                        </Col>
                                        <Col md={2}>
                                            <Button type="button" variant="light" onClick={() => removeFromCartHandler(item.product)}>
                                                    <i className="fas fa-trash"></i>
                                            </Button>
                                        </Col>
                                    </Row>

                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    )
                }
            </Col>
            <Col md={4}>
                <Card>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <div className="fs-5 fw-bold text-secondary">
                                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items
                            </div>
                            <div className="fs-6 fw-bolder fst-italic text-dark">
                                Total :   &#8377;
                                {
                                    cartItems
                                    .reduce((acc, item) => acc + item.qty * item.price, 0)
                                    .toFixed(2)
                                }
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button type="button" variant="dark" className="col-12 btn-block" disabled={cartItems.length === 0} onClick={checkoutHandler}>
                                Proceed to Check out
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
        </Container>
    )
}

export default CartScreen;
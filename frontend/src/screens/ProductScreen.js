import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {
  Row,
  Col,
  Form,
  Button,
  ListGroup,
  Card,
  Image,
  Breadcrumb,
  Container
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Loader from "../components/Loader";
import { listProductDetails } from "../actions/productActions";
import Message from "../components/Message";
import AlternateProducts from "../components/AlternateProducts";

const ProductScreen = ({ history, match }) => {

  const dispatch = useDispatch();
  const [qty,setQty] = useState(1);
  const productDetails = useSelector(state => state.productDetails)
  const {loading, error, product} = productDetails;
  useEffect(()=>{
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);

  const addToCartHandler = ()=>{
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  }

  const Badges = ({ value, text }) => {
    return (
      <>
        <span className="badge bg-secondary px-2 me-2">
          {value === true ? <i className="fas fa-prescription"></i> : ""}
        </span>
        <span className="badge bg-secondary px-2 me-2">{text}</span>
      </>
    );
  };
  return (
    <Container>
      <Breadcrumb className="bg-light my-2 py-2 px-3 text-secondary">
        <LinkContainer to="/">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </LinkContainer>
        <Breadcrumb.Item active> product / {product.name}</Breadcrumb.Item>
      </Breadcrumb>
      { 
        loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Row>
            <Col md={6}>
              <Card className="shadow p-3 mb-5 bg-body rounded">
                <Image src={product.image} alt={product.name} fluid />
              </Card>
            </Col>
            <Col md={6}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <div className="fs-4 fw-bold">{product.name}</div>
                  <Badges value={product.isRxRequired} text={product.category} />
                  <div className="fs-6 fw-bold text-muted my-2">
                    {product.genericName}
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="fs-4 fw-bold text-muted pt-2">
                    Price :
                    <span className="inline-block fs-4 card-price">
                      &nbsp;&#8377;{product.price}
                    </span>
                  </div>
                  <span className="fst-italic text-muted">
                    (inclusive of all taxes)
                  </span>
                  <br />
                  <span className="fs-6 fw-bold text-muted">
                    *{product.qtyPerUnit}
                  </span>
                  <div className="fst-italic text-muted"> Mfr: {product.mfr}</div>
                  <div className="fw-bold text-secondary">
                    Status : &nbsp;
                    {product.countInStock > 0 ? (
                      <span className="inline-block fst-italic badge alert-info">
                        In Stock{" "}
                      </span>
                    ) : (
                      <span className="inline-block fst-italic badge alert-danger">
                        {" "}
                        Out of Stock
                      </span>
                    )}
                  </div>
                  {product.countInStock > 0 && (
                    <Row className="mt-2">
                      <Col md={2} className="fw-bold text-secondary">Qty :</Col>
                      <Col md={3}>
                        <Form.Select size="sm" value={qty} onChange={(e)=> setQty(e.target.value)}>
                          {[...Array(product.countInStock).keys()].map( (x) => (
                            <option keys={x+1} value={x+1}>{x+1}</option>
                          ))}
                        </Form.Select>
                      </Col>
                    </Row>
                  )}
                  <Button type="button" onClick={addToCartHandler} className="my-3 btn btn-cart col-md-6 col-10 mx-auto text-white" disabled={product.countInStock === 0}>
                    Add to cart
                  </Button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="fw-bold text-secondary">Description :</div>
                  <span className="fst-italic text-muted">
                    {product.description}
                  </span>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        )
      }
      <Row>
        <h3 className="mb-3 text-secondary">
          {product.category === "Medicine" ? "Alternate Medicines" : "Products you may also buy"}
        </h3>
        <AlternateProducts id={match.params.id}/>
      </Row>
    </Container>
  );
};

export default ProductScreen;

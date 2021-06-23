import React, { useState, useEffect} from "react";
import axios from "axios";
import {
  Row,
  Col,
  Button,
  ListGroup,
  Card,
  Image,
  Breadcrumb,
  Container
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Product from "../components/Product";

const ProductScreen = ({ match }) => {

  const  [product, setProduct] = useState([]);
  const  [alternateProducts, setAlternateProducts] = useState([]);

  useEffect(()=>{
    const fetchProduct = async ()=>{
      const {data} = await axios.get(`/api/products/${match.params.id}`);
      setProduct(data);
    }

    const fetchAlternateProducts = async ()=>{
      const {data} = await axios.get(`/api/products/alternate/${match.params.id}`);
      setAlternateProducts(data);
    }

    fetchProduct();
    fetchAlternateProducts();
  }, []);

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
  // const product = products.find((p) => p._id === match.params.id);
  return (
    <Container>
      <Breadcrumb className="bg-light my-2 py-2 px-3 text-secondary">
        <LinkContainer to="/">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </LinkContainer>
        <Breadcrumb.Item active> product / {product.name}</Breadcrumb.Item>
      </Breadcrumb>
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
                Status: &nbsp;
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
              <button className="my-3 btn btn-cart col-md-6 col-10 mx-auto text-white">
                Add to cart
              </button>
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
      <Row>
        <h3 className="mb-3 text-secondary">
          {product.category === "Medicine" ? "Alternate Medicines" : "Products you may also buy"}
        </h3>
        {alternateProducts.map((product) => (
            <Col xs={10} sm={4} md={3} lg={2} xl={2} className="mb-3">
              <Product product={product} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default ProductScreen;

import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Product = ({ history, product }) => {

  const Badge = ({ value }) => {
    return (
      <span className="badge rx-badge">
        {value === true ? <i className="fas fa-prescription"></i> : ""}
      </span>
    );
  };

  // const addToCartHandler = ()=>{
  //   history.push(`/cart/${product._id}`);
  // }

  return (
    <Card className="h-100 rounded">
      <Badge value={product.isRxRequired} />
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" fluid/>
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div" className="card-title-text">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <span className="card-mfr mb-1 text-muted fst-italic">
          Mfr: {product.mfr}
        </span>
        <Card.Text className="fs-5 fw-bolder fst-italic card-price">
          &#8377;{product.price}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="border-white">
        <Link to={`/cart/${product._id}`}>
          <button type="button" className="btn btn-sm btn-cart col-12 mx-auto text-white" disabled={product.countInStock === 0} >
            Add to cart
          </button>
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default Product;

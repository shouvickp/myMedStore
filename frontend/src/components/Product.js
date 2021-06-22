import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const product = ({ product }) => {
  const Badge = ({ value }) => {
    return (
      <span className="badge rx-badge">
        {value === true ? <i className="fas fa-prescription"></i> : ""}
      </span>
    );
  };
  return (
    <Card className="h-100 rounded">
      <Badge value={product.isRxRequired} />
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" width="10px" />
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
        <Card.Text as="h5" className="card-price">
          &#8377;{product.price}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="border-white">
        <button className="btn btn-cart col-12 mx-auto text-white">
          Add to cart
        </button>
      </Card.Footer>
    </Card>
  );
};

export default product;

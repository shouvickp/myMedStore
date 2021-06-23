import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import { listProducts } from "../actions/productActions";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { Col, Row, Carousel } from "react-bootstrap";

const HomeScreen = () => {
  const dispatch =useDispatch();
  // const  [products, setProducts] = useState([]);
  const productList = useSelector(state => state.productList)
  const {loading, error, products} = productList
  useEffect(()=>{
    // const fetchProducts = async ()=>{
    //   const {data} = await axios.get('/api/products');
    //   setProducts(data);
    // }
    // fetchProducts();
    dispatch(listProducts());
  }, [dispatch]);
  

  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x250?text=First slide&bg=373940"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x250?text=Second slide&bg=282c34"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x250?text=Third slide&bg=20232a"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <h4 className="mt-3">Featured Products</h4>
      {
        loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) :
        (
          <Row>
          {products.map((product) => (
            <Col xs={10} sm={4} md={3} lg={2} xl={2} className="mx-auto mb-3">
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )
      
      }
    </>
  );
};
export default HomeScreen;

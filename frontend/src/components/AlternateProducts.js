import React, { useEffect } from 'react'
import { Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import Product from './Product'
import { listAlternateProducts } from '../actions/productActions'

const AlternateProducts = ({id}) => {
  const dispatch = useDispatch()
  const alternateProducts = useSelector(state => state.alternateProducts)
  const { loading, error, alternate_products } = alternateProducts
  useEffect(() => {
    dispatch(listAlternateProducts(id));
  }, [dispatch, id])

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    alternate_products.map(
            (product) => (
                <Col xs={10} sm={4} md={3} className="mb-3">
                    <Product product={product} />
                </Col>
            )
        )
  )
}

export default AlternateProducts

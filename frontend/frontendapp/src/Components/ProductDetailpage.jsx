import React from 'react'
import Navbar from './pages/Navbar'
import ProductDetail from './ProductDetail'
import { useParams } from 'react-router-dom';

const ProductDetailpage = () => {
  const { id } = useParams();
  return (
    <div>
        <Navbar/>
        <ProductDetail id={id}/>
    </div>
  )
}

export default ProductDetailpage
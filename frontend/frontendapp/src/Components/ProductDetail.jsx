import React, { useEffect, useState } from 'react'

import './ProductDetail.css'

const ProductDetail = ({id}) => {
  const[product,setProduct]=useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(()=>{
    const productFetching = async() => {
      setLoading(true);
      // Send API request
        try {
          const response=await fetch(`http://localhost:8080/product/productById/${id}`,{
            method:'GET',
            headers:{'Content-Type': 'application/json'} 
          });
          if(!response.ok) {
            throw new Error('Invalid response from server');
          }

          const fetchedProduct = await response.json();
          setProduct(fetchedProduct);
      } catch(error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    productFetching();
  },[id]);

  if(loading) return <div>Loading...</div>
  if(error) return <div>Retry. Error in page</div>

  return (
    <div className='detail-main-container'>
      <div className='detail-left'>
        <img src={product.image} alt='product image' className='detail-product-image'/>
      </div>
      <div className='detail-right'>
        <h1 className='detail-product-title'>{product.name}</h1>
        <div className='detail-product-price'>
          <span className='detail-price-label'>Price:</span> {product.salePrice_range}
        </div>
        <div className='detail-product-rating'>
          <span className='rating-label'>Best Selling Rank:</span> {product.bestSellingRank}
        </div>
        <div className='detail-product-reviews'>
          <span className='reviews-label'>Reviews:</span> {product.customerReviewCount} reviews
        </div>
        <div className='detail-product-description'>
          <h2>Description:</h2>
          <p>{product.shortDescription}</p>
          <p>{product.manufacturer}</p>
          <p>{product.type}</p>
          <p>{product.shipping}</p>
          <p>{product.categories}</p>
        </div>
        <button className='add-to-cart-button'>Add to Cart</button>
      </div>
  </div>
  )
}

export default ProductDetail
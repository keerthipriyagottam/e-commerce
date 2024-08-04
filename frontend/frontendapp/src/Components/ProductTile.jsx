// ProductTile.js
import React from 'react';
import './ProductTile.css';

const ProductTile = ({ image, title, price }) => {
  return (
    <div className='product-main-container'>
      <div className='product-image'>
        <img src={image} alt='Thumbnail' className='product-image'/>
      </div>
      <div className='product-title'>{title}</div>
      <div className='product-price'>Price: <strong>&#8377;{price}</strong></div>
      <div className='product-button'>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductTile;

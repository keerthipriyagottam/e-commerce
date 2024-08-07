// ProductTile.js
import React, { useState } from 'react';
import './ProductTile.css';
import { Link } from 'react-router-dom';
import { fetchCart } from '../utility/fetchCart';
import { updateCart } from '../utility/updateCart';

const ProductTile = ({ id,image, title, price }) => {
  const handleAddToCart=async ()=>{
    const userId=localStorage.getItem("userId");
    const currentCartContent = await fetchCart(userId);
    let productExistsInCart = false;
    for(let i=0; i<currentCartContent.length; i++) {
      if(currentCartContent[i].productId === id) {
        productExistsInCart = true;
        currentCartContent[i].quantity = currentCartContent[i].quantity + 1;
        break;
      }
    }

    let updatedCartContent = currentCartContent;
    if(!productExistsInCart) {
      updatedCartContent = [...currentCartContent, {productId: id, quantity: 1}];
    }
    await updateCart(userId, updatedCartContent);
  }

  return (
    <div className='product-main-container'>
      <div className='product-image'>
      <Link to={`/product/${id}`}><img src={image} alt='Thumbnail' className='product-image'/></Link>
      </div>
      <div className='product-title'>
        <Link to={`/product/${id}`}>{title}</Link></div>
      
      <div className='product-price'>Price: <strong>&#8377;{price}</strong></div>
      <div className='product-button'>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductTile;

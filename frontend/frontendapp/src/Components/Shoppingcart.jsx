import React, { useEffect, useState } from 'react'
import './shoppingcart.css'

const Shoppingcart = (title,price,quantity) => {

  return (
    <>
    <div className='cart-main-container'>
      <div className='cart-left'>
        <img src='https://th.bing.com/th/id/OIP.RZnLzFsFh7tqQF_NqQlfEQAAAA?rs=1&pid=ImgDetMain' alt='main'/>
      </div>
      <div className='cart-right'>
        <div className='cart-productname'>Title</div>
        <div className='cart-price'>Price</div>
        <div class="quantity-container">
          <label>Quantity:</label>
          <button class="quantity-button" id="decrement" disabled={quantity < 1}> - </button>
          <input type="number" id="quantity" value="1" min="1"/>
          <button class="quantity-button" id="increment">+</button>
          <div>
            <button className='deletebutton'>Remove</button>
          </div>
        </div>
        <div className='cart-total'>Total</div>
      </div>
    </div>
    
    </>
  );
}

export default Shoppingcart
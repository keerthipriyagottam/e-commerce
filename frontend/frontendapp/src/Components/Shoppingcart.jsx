import React from 'react'
import './shoppingcart.css'

const Shoppingcart = () => {
  return (
    <>
    <div className='cart-main-container'>
      <div className='cart-left'><img src='https://th.bing.com/th/id/OIP.RZnLzFsFh7tqQF_NqQlfEQAAAA?rs=1&pid=ImgDetMain' alt='main'/></div>
      <div className='cart-right'>
      <div className='cart-productname'>
        Title
      </div>
      <div className='cart-price'>Price</div>
      <div class="quantity-container">
        <label>Quantity:</label>
        <button class="quantity-button" id="decrement"> - </button>
        <input type="number" id="quantity" value="1" min="1"/>
        <button class="quantity-button" id="increment">+</button>
        <div>
        <button className='deletebutton'>Remove</button>
        </div>
      </div>
      <div className='cart-total'>Total</div>
      <div className='payment'>Redirect to payment</div>
      </div>
    </div>
    
    </>
  );
}

export default Shoppingcart
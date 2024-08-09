import React, { useEffect, useState } from 'react'
import './CartItem.css'
import { updateCart } from '../utility/updateCart'

const CartItem = ({pageType,reloadCartPage,id,title,price,image,quantity}) => {
  const userId = localStorage.getItem('userId');
  const [quantityButtonDisabled, setQuantityButtonDisabled]=useState(false);

  const updateQuantity=async(quantityToAdd)=>{
    await updateCart(userId,id,quantityToAdd);
    await reloadCartPage();
  }

  return (
    <>
    <div className='cart-main-container'>
      <div className='cart-left'>
        <img src={image} alt='main'/>
      </div>
      <div className='cart-right'>
        <div className='cart-productname'>{title}</div>
        <div className='cart-price'>Price: <strong>&#8377;{price}</strong></div>
        <div className="quantity-container">
          {pageType==='cart' && <button className="quantity-button" id="decrement" disabled={quantity < 1 || quantityButtonDisabled} onClick={()=>updateQuantity(-1)}> - </button>}
          <div>{pageType==='cart' ? quantity: `Quantity: ${quantity}`}</div>
          {pageType==='cart' && <button className="quantity-button" id="increment" disabled={quantityButtonDisabled} onClick={()=>updateQuantity(1)}>+</button>}
          {pageType==='cart' &&
            <div>
              <button className='deletebutton' onClick={()=>updateQuantity(-quantity)}>Remove</button>
            </div>
          }
        </div>
        <div className='cart-total'>Total: <strong>&#8377;{price*quantity}</strong></div>
      </div>
    </div>
    
    </>
  );
}

export default CartItem
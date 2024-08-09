import React, { useState, useEffect } from 'react'
import Navbar from './pages/Navbar'
import CartItem from './CartItem'
import './CartPage.css'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const CartPage = () => {
  const[cartProducts,setCartProducts]=useState([]);
  const[triggerEffect,setTriggerEffect]=useState(false);
  const[grandTotal,setGrandTotal]=useState(0);
  const[pageType,setPageType]=useState('cart');
  const[address,setAddress]=useState('');
  const userId = localStorage.getItem('userId');
  const navigate = useNavigate();
  
  const onCheckout=()=>{
    setPageType('order');
  }
  const toggleTriggerEffect=() => {
    setTriggerEffect(prevState => !prevState);
  };
  const getCartProducts=async()=>{
      try {
          const response= await fetch(`http://localhost:8080/cart/cartProducts/${userId}`,{
              method:'GET',
              headers:{'Content-Type': 'application/json'} 
          });
          if(response.ok) {
              const allproducts= await response.json();
              calculateGrandTotal(allproducts);
              setCartProducts(allproducts);
              setAddress('');
              setPageType('cart');
          } else {
              console.error('An error occurred while fetching products');
          }
      } catch (error) {
          console.error('Error:', error);
      }
  }

  const updateAddress=(newAddress)=>{
    setAddress(newAddress)
  }

  const emptyCart=async()=>{
    try {
      const orderProducts = cartProducts.map(p=>({productId:p._id,quantity:p.quantity}));
      const response= await fetch(`http://localhost:8080/cart/update/${userId}`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body: JSON.stringify({items:[]})
      });
      if(response.ok) {
          console.log('Cart cleared successfully')
          toggleTriggerEffect();
      } else {
          console.error('An error occurred while clearing cart');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const handlePlaceOrder=async()=>{
    try {
      const orderProducts = cartProducts.map(p=>({productId:p._id,quantity:p.quantity,productName:p.productName}));
      const response= await fetch(`http://localhost:8080/order/newOrder`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body: JSON.stringify({address:address,userId,products:orderProducts})
      });
      if(response.ok) {
          console.log('Order placed successfully');
          toast.success('Order placed successfully');
          emptyCart();
          navigate('/orderHistory');
      } else {
          console.error('An error occurred while placing order');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const calculateGrandTotal=()=>{
    let total = 0;
    cartProducts.forEach(p=>total+=p.price*p.quantity);
    setGrandTotal(total);
  }

  useEffect(()=>{
    setPageType('cart');
  },[]);
  
  useEffect(()=>{
    getCartProducts();
  }, [triggerEffect]);

  useEffect(()=>{calculateGrandTotal()},[cartProducts])

  return (
    <div>
        <Navbar/>
        <div className='cart-page'>
          <div className='cart-items-container'>
              {cartProducts.map((product)=>(
                  <CartItem pageType={pageType} key={product._id} reloadCartPage={toggleTriggerEffect} id={product._id} title={product.productName} price={product.price} image={product.image} quantity={product.quantity}/>
              ))}
              {cartProducts.length === 0 && <div>Cart is empty</div>}
          </div>
          {cartProducts.length !== 0 &&
            <div className='checkout-details'>
              <div className='grand-total'>Grand Total: <strong>&#8377;{grandTotal}</strong></div>
              {pageType==='cart' && <button className='checkout-button' onClick={()=>onCheckout()}>Checkout</button>}
              {pageType==='order' &&
                <div className='Address-details'>
                  <input className='Address' type='text' placeholder='Enter the address' value={address} onChange={(e)=>updateAddress(e.target.value)}/>
                </div>
              }
              {pageType ==='order' && 
                <button className='place-order' onClick={()=>handlePlaceOrder()}>Place Order</button>
              }
              
            </div>
          }
        </div>
        
    </div>
  )
}

export default CartPage
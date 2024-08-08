import React, { useState, useEffect } from 'react'
import Navbar from './pages/Navbar'
import Shoppingcart from './Shoppingcart'
import { fetchCart } from '../utility/fetchCart'

const CartPage = () => {
  const[products,setProducts]=useState([]);
  const[cartItems,setCartItems]=useState([]);
  const[itemDetails,setItemDetails]=useState([]);
  const getAllProducts=async()=>{
      try {
          const response= await fetch('http://localhost:8080/product/allProducts',{
              method:'GET',
              headers:{'Content-Type': 'application/json'} 
          });
          if(response.ok) {
              const allproducts= await response.json();
              setProducts(allproducts);console.log(allproducts[0])

          } else {
              console.error('An error occurred while fetching products');
          }
      } catch (error) {
          console.error('Error:', error);
      }
  }

  const userId = localStorage.getItem('userId');
  const getCartItems=async()=>{
    const items = await fetchCart(userId);
    const result = await items.json();
    setCartItems(result);
  }
  const findProductWithId=(id)=>{
    const filteredProduct = products.filter(p=>p._id===id);
    return filteredProduct[0];
  }
  
  let itemDetails = [];
  useEffect(
    ()=>{
        getAllProducts();
        getCartItems();
        cartItems.map(item=>{
          const product = findProductWithId(item.productId);
          itemDetails.push({title:product.title,price:product.price,quantity:item.quantity})
        });
    }, []);


  return (
    <div>
        <Navbar/>
        <div className='cart-items-container'>
            {itemDetails.map((item)=>(
                <Shoppingcart item/>
            ))}
        </div>
    </div>
  )
}

export default CartPage
import React, { useEffect, useState } from 'react'
import Navbar from './pages/Navbar'
import OrderItem from './OrderItem'
import './OrderHistory.css'

const OrderHistory = () => {
  const[orders,setOrders]=useState([]);
  const userId = localStorage.getItem('userId');

  const fetchOrders=async()=>{
    try {
      const response= await fetch(`http://localhost:8080/order/allOrders/${userId}`,{
          method:'GET',
          headers:{'Content-Type': 'application/json'} 
      });
      if(response.ok) {
          const allOrders= await response.json();
          allOrders.sort((a, b) => new Date(b.datePlaced) - new Date(a.datePlaced));
          setOrders(allOrders);
      } else {
          console.error('An error occurred while fetching products');
      }
    } catch (error) {
        console.error('Error:', error);
    }
  }

  useEffect(()=>{fetchOrders()},[]);

  return (
    <>
      <Navbar/>
      <div className='orders-list-container'>
      {orders.map((order)=>(
                  <OrderItem date={order.datePlaced} address={order.address} orderStatus={order.status} products={order.products}/>
              ))}
      </div>
    </>
    
  )
}

export default OrderHistory
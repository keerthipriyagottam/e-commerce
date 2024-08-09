import React, { useEffect, useState } from 'react'
import AdminNavBar from './AdminNavBar'
import OrderItem from './OrderItem';

const ProcessOrders = () => {
    const[orders,setOrders]=useState([]);

    const getAllOrders=async()=>{
        try {
            const response= await fetch('http://localhost:8080/order/allOrders',{
                method:'GET',
                headers:{'Content-Type': 'application/json'} 
            });
            if(response.ok) {
                const allOrders = await response.json();
                setOrders(allOrders);
            } else {
                console.error('An error occurred while fetching orders');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    useEffect(()=>{getAllOrders()},[])
  return (
    <>
        <AdminNavBar/>
        <div className='orders-container'>
        {orders.map((order)=>(
                  <OrderItem pageType='admin' orderId={order._id} date={order.datePlaced} address={order.address} orderStatus={order.status} products={order.products}/>
              ))}
        </div>
    </>
    

  )
}

export default ProcessOrders
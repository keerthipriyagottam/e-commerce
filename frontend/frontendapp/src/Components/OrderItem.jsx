import React, { useState } from 'react'
import './OrderItem.css'
import { format } from 'date-fns';

const OrderItem = ({pageType,date,address,orderStatus,products,orderId}) => {
    const formattedDate = format(new Date(date), 'dd-MM-yyyy');
    const deliveredStatus = 'delivered';
    const[updatedOrderStatus,setUpdatedOrderStatus] = useState(orderStatus);

    const deliverOrder=async()=>{
        try {
            const response= await fetch(`http://localhost:8080/order/changeOrderStatus/${orderId}/${deliveredStatus}`,{
                method:'POST',
                headers:{'Content-Type': 'application/json'}
            });
            if(response.ok) {
                setUpdatedOrderStatus(deliveredStatus);
            } else {
                console.error('An error occurred while clearing cart');
            }
          } catch (error) {
            console.error('Error:', error);
          }
    }
    return (
        <div className='order-item-container'>
            <div className='header'>
                <div>Placed on: {formattedDate}</div>
                <div>Shipped to: {address}</div>
                <div>Status: {updatedOrderStatus.toUpperCase()}</div>
            </div>
            <div className='content'>
                {products.map((product)=>(
                        <div>{product.productName} - Quantity: {product.quantity}</div>
                        ))}
            </div>
            {pageType === 'admin' &&
                <div className='deliver-button'>
                    <button onClick={deliverOrder}>Deliver</button>
                </div>
            }
            

        </div>
    )
}

export default OrderItem
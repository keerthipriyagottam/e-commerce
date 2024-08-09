import React from 'react'
import './OrderItem.css'
import { format } from 'date-fns';

const OrderItem = ({date,address,orderStatus,products}) => {
    const formattedDate = format(new Date(date), 'dd-MM-yyyy');
    return (
        <div className='order-item-container'>
            <div className='header'>
                <div>Placed on: {formattedDate}</div>
                <div>Shipped to: {address}</div>
                <div>Status: {orderStatus}</div>
            </div>
            <div className='content'>
                {products.map((product)=>(
                        <div>{product.productName} - Quantity: {product.quantity}</div>
                        ))}
            </div>

        </div>
    )
}

export default OrderItem
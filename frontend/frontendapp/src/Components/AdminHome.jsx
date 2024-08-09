import React from 'react'
import AdminNavBar from './AdminNavBar'
import './AdminHome.css'
import { Link } from 'react-router-dom'

const AdminHome = () => {
  return (
    <>
        <AdminNavBar/>
        <div className='admin-home-container'>
            <Link to={'/admin/addProduct'}>
                <button className='admin-home-button'>Add Product</button>
            </Link>
            <Link to={'/admin/deleteProduct'}>
                <button className='admin-home-button'>Delete Product</button>
            </Link>
            <Link to={'/admin/processOrders'}>
              <button className='admin-home-button'>Process Orders</button>
            </Link>
            
        </div>
    </>
    
  )
}

export default AdminHome